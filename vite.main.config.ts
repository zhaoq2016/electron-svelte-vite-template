import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            formats: ['cjs'], // Electron 主进程需要 CommonJS
            fileName: () => '[name].js'
        },
        rollupOptions: {
            external: ['electron'], // 排除 electron 内置模块
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js'
            }
        },
        emptyOutDir: false, // 避免与渲染进程构建冲突
        minify: process.env.NODE_ENV === 'production'
    }
});
