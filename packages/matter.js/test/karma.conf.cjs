module.exports = function(config) {
    config.set({
        basePath: "..",
        frameworks: ["jasmine", "karma-typescript"],
        client: {
            jasmine: {
                random: false
            }
        },
        files: [
          'src/**/*.ts',
          'test/support/*.ts',
          'test/**/*Test.ts'
        ],
        preprocessors: {
            "src/**/*.ts": ["karma-typescript", "coverage"],
            "test/support/*.ts": ["karma-typescript"],
            "test/**/*Test.ts": ["karma-typescript"]
        },
        reporters: ["progress", "coverage", "karma-typescript"],
        browsers: ["ChromeHeadless"],
        karmaTypescriptConfig: {
            tsconfig: "tsconfig.karma.json"
        },
        singleRun: true
    });
};
