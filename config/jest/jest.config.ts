const config = {
  testEnvironment: "jsdom",
  rootDir: "../../",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"], //! может не рабоать!
  coveragePathIgnorePatterns: ["/node_modules/"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],
  clearMocks: true,
};

export default config;
