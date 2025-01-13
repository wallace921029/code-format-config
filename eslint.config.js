import js from '@eslint/js'
import ts from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  prettierRecommended,
  {
    ignores: ['dist', 'node_modules']
  },
  {
    files: ['src/**/*.{js,ts,vue}'],
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-debugger': 'error'
    }
  }
]
