module.exports = {
  plugins: ["prettier"],
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
    "prettier/react",
    "plugin:unicorn/recommended",
  ],
  rules: {
    "import/no-namespace": "error",
    "import/no-relative-parent-imports": "error",
    "import/no-anonymous-default-export": [
      "error",
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: true,
        allowObject: true,
      },
    ],
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "consts/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "components/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "helpers/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/forbid-dom-props": ["error", { forbid: ["style"] }],
    "unicorn/no-array-for-each": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-null": "off",
    "unicorn/filename-case": [
      "error",
      {
        case: "camelCase",
        ignore: ["App.tsx"],
      },
    ],
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["src/components/**/*.tsx"],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            case: "pascalCase",
          },
        ],
      },
    },
    {
      files: ["src/pages/**/*.tsx"],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
          },
        ],
      },
    },
  ],
};
