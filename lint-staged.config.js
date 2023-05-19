module.exports = {
  'src/**/*.ts?(x)': () => [
    'yarn tsc --project src/tsconfig.json --pretty --noEmit',
  ],
  'src/**/*.(ts|js)?(x)': filenames => [
    `yarn eslint --fix --max-warnings=0 ${filenames.join(' ')}`,
  ],
  'src/**/*.(js|jsx|ts|tsx|css|json)': filenames => [
    `yarn prettier --write ${filenames.join(' ')}`,
  ],
};
