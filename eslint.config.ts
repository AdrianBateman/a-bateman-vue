import pluginVue from 'eslint-plugin-vue';
import {
    defineConfigWithVueTs, vueTsConfigs,
} from '@vue/eslint-config-typescript';
import pluginVitest from '@vitest/eslint-plugin';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pluginCypress from 'eslint-plugin-cypress/flat';
import oxlint from 'eslint-plugin-oxlint';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: [
            '**/*.{ts,mts,tsx,vue}',
        ],
    },

    {
        name: 'app/files-to-ignore',
        ignores: [
            '**/dist/**',
            '**/dist-ssr/**',
            '**/coverage/**',
        ],
    },

    pluginVue.configs['flat/recommended'],
    vueTsConfigs.recommended,

    {
        ...pluginVitest.configs.recommended,
        files: [
            'src/**/__tests__/*',
        ],
    },

    {
        ...pluginCypress.configs.recommended,
        files: [
            'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
            'cypress/support/**/*.{js,ts,jsx,tsx}',
        ],
    },

    ...oxlint.configs['flat/recommended'],
    {
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            'indent': [
                'error',
                4,
            ],
            '@stylistic/indent': [
                'error',
                4,
            ],
            "comma-dangle": [
                "error",
                "always-multiline",
            ],
            "@stylistic/array-bracket-newline": [
                "error",
                "always",
            ],
            "@stylistic/array-element-newline": [
                "error",
                "always",
            ],
            "@stylistic/curly-newline": [
                "error",
                "always",
            ],
            "@stylistic/object-curly-newline": [
                "error",
                "always",
            ],
            "@stylistic/semi": [
                "error",
                "always",
            ],
        },
    },
    {
        rules: {
            "vue/first-attribute-linebreak": [
                "error",
                {
                    "singleline": "below",
                    "multiline": "below",
                },
            ],

            "vue/multiline-html-element-content-newline": [
                "error",
                {
                    "ignoreWhenEmpty": false,
                    "ignores": [
                        "pre",
                        "textarea",
                    ],
                    "allowEmptyLines": false,
                },
            ],
        },
    },
);
