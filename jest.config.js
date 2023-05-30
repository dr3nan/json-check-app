module.exports = {
  testEnvironment: 'node',
  testMatch: ["**/__tests__/**/*.test.*s"],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};