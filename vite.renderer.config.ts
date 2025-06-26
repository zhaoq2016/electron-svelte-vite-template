import { defineConfig } from 'vite';
import { resolve } from 'path';
// https://vitejs.dev/config
export default defineConfig({
        build: {
            // 开发模式：配置开发服务器行为
            // 生产模式：构建优化版本
            outDir: 'dist/renderer',
            emptyOutDir: true,
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'src/renderer/src/app.html')
                }
            }
        }

});
