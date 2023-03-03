module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018, // Allows for the parsing of modern ECMAScript features
        "sourceType": "module", // Allows for the use of imports
        "project": "./tsconfig.json"
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript"
    ],
    "plugins": ["@typescript-eslint", "import"],
    "reportUnusedDisableDirectives": true,
    "env": {
        "node": true
    },
    "ignorePatterns": ["**/*.d.ts"],
    "rules": {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "{}": false
                },
                "extendDefaults": true
            }
        ],
        // turn on errors for missing imports
        "import/no-unresolved": "error",
        // Exclude _* and our special typing cases
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                ignoreRestSiblings: true,
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^Matter.*SpecificationV|^[A-Z]$"
            },
        ],

        // We can turn this on from time to time but in general these rules
        // make our lives harder instead of easier
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-call": "off",

        "no-constant-condition":[
            "error",
            {
                "checkLoops": false
            }
        ]
    },
    "settings": {
        "import/extensions": [".ts", ".tsx"],
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

                // Multiple tsconfigs (Useful for monorepos)
                "project": "packages/*/tsconfig.json",
            }
        }
    }
};
