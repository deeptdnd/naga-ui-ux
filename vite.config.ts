import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/naga-ui-ux/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});
