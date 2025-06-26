import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
        build: {
            // 开发模式中用于确定处理规则
            // 生产模式中用于构建优化版本
            lib: {
                entry: 'src/preload.ts',
                formats: ['cjs']
            },
            sourcemap: 'inline' ,// 开发环境需要源码映射
            rollupOptions: {
                external: ['electron']
            }
        }

});
