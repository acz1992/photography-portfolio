import { defineConfig } from "vite";
import sassGlobImports from "vite-plugin-sass-glob-import";

export default defineConfig({
	plugins: [sassGlobImports()],
});
