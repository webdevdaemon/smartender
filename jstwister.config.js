module.exports = {
  entry: {},
  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx', '.es6', '.css'],
    modules: ['.', './node_modules']
  },
  files: ['**/*.js', '**/*.jsx'],
  exclude: ['**/*.min.js'],
  plugins: { 'imports-manager': { 'import-style': 'relativeToModules' } },
  printer: {
    tabWidth: 2,
    useTabs: false,
    reuseWhitespace: true,
    lineTerminator: '\n',
    wrapColumn: 120,
    quote: 'single',
    trailingComma: false,
    arrayBracketSpacing: false,
    objectCurlySpacing: true,
    arrowParensAlways: false,
    flowObjectCommas: true
  },
  autostart: false,
  logLevel: 'info'
}