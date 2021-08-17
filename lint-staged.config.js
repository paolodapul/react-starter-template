module.exports = {
  "**/*.{js,jsx,ts,tsx}": ["eslint", "prettier --write --ignore-unknown"],
  "**/*.{ts,tsx}": [() => "tsc --skipLibCheck --noEmit"],
};
