module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true,
        "node": true
    },
    "extends": [
        'plugin:testing-library/react',
        "plugin:react/recommended",
        "eslint:recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["testing-library", "react", "jest"],
    "rules": {
        "testing-library/await-async-query": "error",
        "testing-library/no-await-sync-query": "error",
        "testing-library/no-debugging-utils": "warn",
        "testing-library/no-dom-import": "off",
        "react/jsx-boolean-value": "error"
    }
}
