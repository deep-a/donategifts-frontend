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
  testRegex: '(/tests/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    '.(ts|tsx)': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
