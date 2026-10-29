/**
 * Cloudflare Worker entry point for xBraan1 Portfolio
 * Serves static assets with SPA fallback and security headers.
 */
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Security headers applied to all responses
    const securityHeaders: Record<string, string> = {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    };

    // API routes - return 404 JSON for any /api/* paths
    if (url.pathname.startsWith("/api/")) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
          ...securityHeaders,
        },
      });
    }

    // Delegate to static assets binding
    // The assets binding handles file serving and SPA fallback
    // (configured via not_found_handling = "single-page-application" in wrangler.toml)
    const response = await env.ASSETS.fetch(request);
    const newResponse = new Response(response.body, response);

    // Apply security headers
    for (const [key, value] of Object.entries(securityHeaders)) {
      newResponse.headers.set(key, value);
    }

    // Cache static assets with long TTL
    if (url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|woff2|woff|ico|webp)$/)) {
      newResponse.headers.set(
        "Cache-Control",
        "public, max-age=31536000, immutable"
      );
    } else if (url.pathname === "/" || url.pathname === "/index.html") {
      // HTML pages should revalidate
      newResponse.headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    }

    return newResponse;
  },
};

interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}
