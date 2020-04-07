module.exports = {
  preset: 'ts-jest',
  testEnvironment: '<rootDir>/__tests__/setup/enviroment/mongodb',
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
