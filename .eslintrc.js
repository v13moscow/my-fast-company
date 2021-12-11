module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 13,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        "indent": ["error", 4],
        "quotes":["error","double",{"allowTemplateLiterals": true}],
        "semi": [1, 'always'],
    }
};