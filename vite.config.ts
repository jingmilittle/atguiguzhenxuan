import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
//command 获取开发环境
export default defineConfig(({ command }) => {
  return {
    plugins: [vue(),
    createSvgIconsPlugin({
      // 指定需缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    }),
    viteMockServe({
      // 开发阶段运行mock接口
      enable: command === 'serve'
    })
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    },
    //全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnable: true,
          // 导入
          additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    }
  }
})
