import path from "path";

const config = {
  testEnvironment: "jsdom",
  rootDir: "../../",
  modulePaths: ["<rootDir>src"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"], //! может не рабоать!
  coveragePathIgnorePatterns: ["/node_modules/"],
  moduleDirectories: ["node_modules", "src"],
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
  setupFilesAfterEnv: ["<rootDir>config/jest/setupTest.ts"],
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy",
    "^.+\\.svg$": "<rootDir>/config/jest/JestEmptyComponent.tsx",
  },
};

export default config;
