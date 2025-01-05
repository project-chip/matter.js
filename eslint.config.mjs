import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import _import from "eslint-plugin-import";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: [
            "*/node_modules/**/*",
            "*/dist/**/*",
            "*/build/**/*",
            "packages/*/dist/**/*",
            "packages/*/build/**/*",
            "models/*/**/*",
            "**/forwards/**/*",
            "docs/**/*",
        ],
    },
    ...fixupConfigRules(
        compat.extends(
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:@typescript-eslint/recommended-requiring-type-checking",
            "plugin:import/errors",
            "plugin:import/warnings",
            "plugin:import/typescript",
        ),
    ),
    {
        plugins: {
            "@typescript-eslint": fixupPluginRules(typescriptEslint),
            import: fixupPluginRules(_import),
        },

        linterOptions: {
            reportUnusedDisableDirectives: true,
        },

        languageOptions: {
            globals: {
                ...globals.node,
            },

            parser: tsParser,
            ecmaVersion: 2018,
            sourceType: "module",

            parserOptions: {
                project: ["./tsconfig.eslint.json"],
            },
        },

        settings: {
            "import/extensions": [".ts"],

            "import/parsers": {
                "@typescript-eslint/parser": [".ts"],
            },

            "import/resolver": {
                typescript: {
                    project: "packages/*/tsconfig.json",
                },
            },
        },

        rules: {
            "@typescript-eslint/no-explicit-any": "off",

            "@typescript-eslint/no-empty-object-type": "off",

            "@typescript-eslint/require-await": "off",
            "@typescript-eslint/no-unsafe-argument": "off",
            "@typescript-eslint/no-unsafe-assignment": "off",
            "@typescript-eslint/no-unsafe-member-access": "off",
            "@typescript-eslint/no-unsafe-return": "off",
            "@typescript-eslint/no-unsafe-call": "off",
            "@typescript-eslint/restrict-template-expressions": "off",
            "@typescript-eslint/no-base-to-string": "off",

            "no-constant-condition": [
                "error",
                {
                    checkLoops: false,
                },
            ],

            "no-restricted-imports": [
                "error",
                {
                    patterns: [
                        {
                            group: ["**/export"],
                            message: "Please import the directory rather than the export file",
                        },
                        {
                            group: ["**/export.js"],
                            message: "Please import directly from the defining file",
                        },
                    ],
                },
            ],

            "@typescript-eslint/no-namespace": "off",
            "no-inner-declarations": "off",
            "no-case-declarations": "off",
            "@typescript-eslint/no-implied-eval": "off",
            "@typescript-eslint/no-this-alias": "off",
            "import/default": "off",
            "import/export": "off",
            "import/no-named-as-default-member": "off",
            "@typescript-eslint/no-unsafe-enum-comparison": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/unbound-method": "off",
            "no-ex-assign": "off",
            "@typescript-eslint/no-redundant-type-constituents": "off",
            "import/no-unresolved": "off",
        },
    },
    {
        // For all test dirs disable the no-unused-expressions rule because all "expect" calls are errored
        files: ["**/test/**/*.ts"],
        rules: {
            "@typescript-eslint/no-unused-expressions": "off",
        },
    },
];
