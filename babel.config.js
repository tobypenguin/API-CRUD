// babel.config.js
module.exports = {
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          '^@adapters/(.*)$': './src/adapters/\\1',
          '^@controllers/(.*)$': './src/controllers/\\1',
          '^@dtos/(.*)$': './src/entities/dtos/\\1',
          '^@errors/(.*)$': './src/errors/\\1',
          '^@middlewares/(.*)$': './src/middlewares/\\1',
          '^@repositories/(.*)$': './src/repositories/\\1',
          '^@routes/(.*)$': './src/routes/\\1',
          '^@schemas/(.*)$': './src/entities/schemas/\\1',
          '^@usecases/(.*)$': './src/usecases/\\1',
          '^@utilities/(.*)$': './src/utilities/\\1',
          '^@validations/(.*)$': './src/validations/\\1',
          '^@datatests/(.*)$': './test/data_tests/\\1',
        },
      },
    ],
    'babel-plugin-transform-typescript-metadata',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    ['@babel/plugin-proposal-class-properties'],
  ],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
}
