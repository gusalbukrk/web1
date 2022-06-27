module.exports = {
  words: ['gusalbukrk', 'fontawesome', 'fortawesome', 'pnpm'],

  ignoreWords: ['postbuild', 'postpublish', 'monospace'],

  ignorePaths: [
    'node_modules',
    'dist/',
    'cspell.config.cjs', // otherwise, would've to be included in every `overrides.filename`
    '.gitignore',
    '.git/',
    '.husky/_/',
  ],

  overrides: [
    {
      filename: [
        'babel.config.cjs',
        '.eslintrc.cjs',
        'package.json',
        'rollup.config.js',
        'ISSUES.md',
      ], // config files
      words: [
        'npmignore',
        'corejs',
        'includepaths',
        'stylelint',
        'abspath',
        'relpath',
        'loglevel',
      ],
    },
  ],
};
