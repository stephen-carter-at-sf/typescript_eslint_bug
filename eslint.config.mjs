import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
    {
        linterOptions: {
            reportUnusedDisableDirectives: false,
        },
    },
    ...tseslint.configs.all,
	{
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			'@typescript-eslint/prefer-readonly-parameter-types': ['error']
		},
        languageOptions: {
			parser: tsParser,
            parserOptions: {
                projectService: true,
				tsconfigRootDir: import.meta.dirname
            }
        }
	},
	{
		ignores: ["lib/**", "node_modules/**", "github-actions/**"]
	}
];