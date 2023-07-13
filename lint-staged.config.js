module.exports = {
  '{apps,libs}/**/*.{ts,tsx, html}': files => {
    return `nx affected --target=typecheck --files=${files.join(',')}`;
  },
  '{apps,libs}/**/*.{js,ts,jsx,tsx,json}': [
    files => `nx affected:lint --files=${files.join(',')} --fix`,
    files => `nx format:write --files=${files.join(',')}`,
  ],
};
