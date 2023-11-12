import { defineConfig } from 'vitest/config'
import {mergeConfig} from 'vite'
import ViteConfig from './vite.config'

export default mergeConfig(ViteConfig, defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './tests/setup.ts',
        coverage: {
            reporter: ['text', 'json', 'html'],
            enabled: true,
            reportsDirectory: './tests/coverage'
          },      
    }
}))