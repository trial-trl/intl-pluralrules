const modules =
  process.env.NODE_ENV === 'test' ? 'auto' : process.env.TARGET || false

module.exports = {
  presets: [['@babel/preset-env', { modules, targets: '> 0.25%, not dead' }]]
}
