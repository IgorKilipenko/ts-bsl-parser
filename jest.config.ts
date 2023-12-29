import type { JestConfigWithTsJest } from 'ts-jest';

const srcDir = "<rootDir>/src";
const unitTestsDir = "<rootDir>/tests/unit";
const filesExts = "{js,ts}";

const config: JestConfigWithTsJest = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ["<rootDir>"],
    collectCoverageFrom: [
        `${srcDir}/**/*.${filesExts}`,
        `${unitTestsDir}/**/*.${filesExts}}`,
        "!<rootDir>/**/*.d.ts"
    ],
    testMatch: [
        `${srcDir}/**/__tests__/**/*.${filesExts}`,
        `${srcDir}/**/*.{spec,test}.${filesExts}`,
        `${unitTestsDir}/**/*.{spec,test}.${filesExts}`
    ],
};

export default config;
