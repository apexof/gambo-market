module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: { jsx: true, },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        semi: ["error", "never"],
        "linebreak-style": [
            "error",
            "windows"
        ],
        indent: [
            "error",
            4
        ],
        "react/prop-types": 0,
        "react/jsx-indent": 0,
        "react/jsx-indent-props": 0,
        "react/jsx-filename-extension": 0,
        "import/prefer-default-export": 0,
        quotes: [
            "error",
            "double"
        ],
        "comma-dangle": [
            "error",
            {
                arrays: "never",
                objects: "always",
                imports: "always",
                exports: "never",
                functions: "ignore",
            }
        ],
        "no-use-before-define": 0,
        "arrow-parens": [2, "always"],
        "object-curly-newline": [
            "error",
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 5,
                },
                ObjectPattern: { multiline: true, },
                ImportDeclaration: "never",
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 3,
                },
            }
        ],
        "max-len": ["error", { code: 150, }],
        "react/jsx-props-no-spreading": 0,
        "arrow-body-style": 0,
        "spaced-comment": 0,
        "no-warning-comments": 0,
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "react/react-in-jsx-scope": 0,
        "padding-line-between-statements": [
            "error",
            {
                blankLine: "always", prev: "*", next: ["function", "class", "return", "export"],
            },
            {
                blankLine: "always", prev: ["import"], next: "*",
            },
            {
                blankLine: "never", prev: "import", next: "import",
            },
            {
                blankLine: "always", prev: "function", next: "*",
            }
        ],
    },
}
