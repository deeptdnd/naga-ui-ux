import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    router: {
      basepath: "/naga-ui-ux",
    },

    client: {
      base: "/naga-ui-ux/_build",
    },

    prerender: {
      enabled: true,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
      failOnError: true,
    },

    server: {
      entry: "server",
    },
  },
});
