module.exports = {
  transform: {'^.+\\.ts?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }]},
  testEnvironment: 'node',
  testRegex: '/test-node/.*\\.ts$',
  moduleNameMapper: { "^(.+)\\.js$": "$1" },
  moduleFileExtensions: ['ts', 'js']
};
