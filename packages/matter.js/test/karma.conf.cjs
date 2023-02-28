module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ["jasmine", "karma-typescript"],
        client:{
            jasmine:{
             random:false
           }
         },
        files: [
            { pattern: "src/**/*.ts" },
            { pattern: "test/**/*.ts" }
        ],
        preprocessors: {
            "src/**/*.ts": ["karma-typescript", "coverage"],
            "test/**/*.ts": ["karma-typescript"]
        },
        reporters: ["coverage", "karma-typescript"],
        browsers: ["Chrome"]
    });
};
