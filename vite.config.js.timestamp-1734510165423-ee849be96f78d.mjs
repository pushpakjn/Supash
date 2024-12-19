// vite.config.js
import { defineConfig } from "file:///C:/Users/offic/Desktop/Project/Supash/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/offic/Desktop/Project/Supash/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\offic\\Desktop\\Project\\Supash";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      assets: path.resolve("src/assets/"),
      components: path.resolve("src/components/"),
      context: path.resolve("src/context/"),
      db: path.resolve("src/db/"),
      helpers: path.resolve("src/helpers/"),
      hooks: path.resolve("src/hooks/"),
      data: path.resolve("src/data/")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/variables.scss";`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxvZmZpY1xcXFxEZXNrdG9wXFxcXFByb2plY3RcXFxcU3VwYXNoXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxvZmZpY1xcXFxEZXNrdG9wXFxcXFByb2plY3RcXFxcU3VwYXNoXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9vZmZpYy9EZXNrdG9wL1Byb2plY3QvU3VwYXNoL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXHJcbiAgICAgIGFzc2V0czogcGF0aC5yZXNvbHZlKCdzcmMvYXNzZXRzLycpLFxyXG4gICAgICBjb21wb25lbnRzOiBwYXRoLnJlc29sdmUoJ3NyYy9jb21wb25lbnRzLycpLFxyXG4gICAgICBjb250ZXh0OiBwYXRoLnJlc29sdmUoJ3NyYy9jb250ZXh0LycpLFxyXG4gICAgICBkYjogcGF0aC5yZXNvbHZlKCdzcmMvZGIvJyksXHJcbiAgICAgIGhlbHBlcnM6IHBhdGgucmVzb2x2ZSgnc3JjL2hlbHBlcnMvJyksXHJcbiAgICAgIGhvb2tzOiBwYXRoLnJlc29sdmUoJ3NyYy9ob29rcy8nKSxcclxuICAgICAgZGF0YTogcGF0aC5yZXNvbHZlKCdzcmMvZGF0YS8nKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Nzczoge1xyXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCBcIkAvdmFyaWFibGVzLnNjc3NcIjtgLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UyxTQUFTLG9CQUFvQjtBQUMxVSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRmpCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDbEMsUUFBUSxLQUFLLFFBQVEsYUFBYTtBQUFBLE1BQ2xDLFlBQVksS0FBSyxRQUFRLGlCQUFpQjtBQUFBLE1BQzFDLFNBQVMsS0FBSyxRQUFRLGNBQWM7QUFBQSxNQUNwQyxJQUFJLEtBQUssUUFBUSxTQUFTO0FBQUEsTUFDMUIsU0FBUyxLQUFLLFFBQVEsY0FBYztBQUFBLE1BQ3BDLE9BQU8sS0FBSyxRQUFRLFlBQVk7QUFBQSxNQUNoQyxNQUFNLEtBQUssUUFBUSxXQUFXO0FBQUEsSUFDaEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
