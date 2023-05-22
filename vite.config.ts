import { defineConfig, Plugin, UserConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import * as path from "path";

export default defineConfig(({ mode }) => {
    const name = "canvas-animation";
    const port: number = parseInt(process.env.APP_PORT || "8000");

    const plugins: (Plugin | Plugin[])[] = [
        vue(),
        splitVendorChunkPlugin(),
        eslintPlugin({
            include: ["src/**/*.ts", "src/**/*.vue", "src/*.vue"]
        })
    ];

    const defaultOptions: UserConfig = {
        base: "./",
        plugins,
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src")
            }
        },
        server: {
            host: true,
            port
        },
        build: {
            outDir: "dist",
            chunkSizeWarningLimit: 1000,
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes("node_modules/")) {
                            return id
                                .toString()
                                .split("node_modules/")[1]
                                .split("/")[0]
                                .toString();
                        }
                    },
                    chunkFileNames: "assets/js/[name]-[hash].js",
                    entryFileNames: "assets/js/[name]-[hash].js",
                    assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
                }
            },
            minify: mode === "production" ? "terser" : false
        }
    };

    return {
        ...defaultOptions
    };
});
