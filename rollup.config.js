const resolve = require('rollup-plugin-node-resolve')
const typescript = require('@rollup/plugin-typescript')
module.exports = {
	input: './src/index.ts', // 入口文件
	output: [
		{
			format: 'cjs', // 打包为commonjs格式
			file: 'dist/jade-utils.cjs.js', // 打包后的文件路径名称
			name: 'jutils' // 打包后的默认导出文件名称
		},
		{
			format: 'esm', // 打包为esm格式
			file: 'dist/jade-utils.esm.js',
			name: 'jutils'
		},
		{
			format: 'umd', // 打包为umd通用格式
			file: 'dist/jade-utils.umd.js',
			name: 'jutils',
			minifyInternalExports: true
		}
	],
	plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve()]
}
