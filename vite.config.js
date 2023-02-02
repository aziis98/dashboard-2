import preactPlugin from '@preact/preset-vite'
import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [preactPlugin()],
})
