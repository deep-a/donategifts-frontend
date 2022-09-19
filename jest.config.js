module.exports = {
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  testPathIgnorePatterns: [
    '/.next/',
    '/node_modules/',
    '/lib/',
    '/coverage/',
    '/.storybook/',
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    '.(ts|tsx)': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
