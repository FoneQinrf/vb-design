module.exports = {
  'packages/**/*.{js,ts,vue,tsx}': ['prettier --write', 'eslint --fix'],
  'packages/**/*.{scss,md,css}': ['prettier --write'],
};
