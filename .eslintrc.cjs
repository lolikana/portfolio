module.exports = {
	env: {
		node: true,
		es2022: true,
		browser: true
	},
	extends: [
		'eslint:recommended',
		'plugin:astro/recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier', 'import'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'no-mixed-spaces-and-tabs': 'error',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		indent: [2, 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
		semi: ['error', 'always'],
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': 'off'
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				extraFileExtensions: ['.astro']
			}
		},
		{
			files: ['*.ts'],
			parserOptions: {
				tsconfigRootDir: __dirname,
				project: ['./tsconfig.json']
			},
			extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
			rules: {
				'@typescript-eslint/no-unused-vars': [
					'error',
					{ argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }
				],
				'@typescript-eslint/no-non-null-assertion': 'off',
				'require-await': 'off',
				'@typescript-eslint/require-await': 'warn'
			}
		},
		{
			files: ['*.d.ts'],
			rules: {
				'@typescript-eslint/triple-slash-reference': 'off'
			}
		},
		{
			// Define the configuration for `<script>` tag.
			// Script in `<script>` is assigned a virtual file name with the `.js` extension.
			files: ['**/*.astro/*.js', '*.astro/*.js'],
			parser: '@typescript-eslint/parser'
		}
	]
};
