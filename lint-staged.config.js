module.exports = {
  '{apps,libs}/**/*.{ts,tsx,html}': files => {
    return `nx affected --target=typecheck --files=${files.join(',')}`;
  },
  '{apps,libs}/**/*.{js,ts,jsx,tsx,json,html}': [
    files => `eslint --fix ${files.join(' ')}`,
    files => `nx format:write --files=${files.join(',')}`,
  ],
};
