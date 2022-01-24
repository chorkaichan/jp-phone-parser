import pluginNodeResolve from '@rollup/plugin-node-resolve'
import pluginCommonjs from '@rollup/plugin-commonjs'
import { babel as pluginBabel } from '@rollup/plugin-babel'
import { terser as pluginTerser } from 'rollup-plugin-terser'

import * as path from 'path'

import camelCase from 'lodash.camelcase'
import upperFirst from 'lodash.upperfirst'

import pkg from './package.json'

const moduleName = upperFirst(camelCase(pkg.name.replace(/^@.*\//, '')))

const banner = `/*!
  ${moduleName}.js v${pkg.version}
  Released under the ${pkg.license} License.
*/`

export default [
  {
    input: 'src/index.js',
    output: [
      // do not minify
      {
        name: moduleName,
        file: pkg.browser,
        format: 'iife',
        sourcemap: 'inline',
        banner,
      },
      // minify
      {
        name: moduleName,
        file: pkg.browser.replace('.js', '.min.js'),
        format: 'iife',
        banner,
        plugins: [
          pluginTerser(),
        ],
      },
    ],
    plugins: [
      pluginCommonjs({
        extensions: [ '.js' ],
      }),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, 'babel.config.js'),
      }),
      pluginNodeResolve({
        browser: true,
      }),
    ],
  },

  // ES modules
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: 'inline',
        banner,
        exports: 'default',
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      pluginCommonjs({
        extensions: [ '.js' ],
      }),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, 'babel.config.js'),
      }),
      pluginNodeResolve({
        browser: false,
      }),
    ],
  },

  // CommonJS
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: 'inline',
        banner,
        exports: 'default',
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      pluginCommonjs({
        extensions: [ '.js' ],
      }),
      pluginBabel({
        babelHelpers: 'bundled',
        configFile: path.resolve(__dirname, 'babel.config.js'),
      }),
      pluginNodeResolve({
        browser: false,
      }),
    ],
  },
]
