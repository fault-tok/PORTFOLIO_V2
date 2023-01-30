import { defineConfig } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
		// hmr: {
		// 	clientPort: 443,
		// },
		host: true,
	},
  resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
  plugins: [vue()],
})
