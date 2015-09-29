({
    appDir: "../..",
    baseUrl: "js",
    dir: "../../target/build",
    
    optimizeCss: "standard.keepLines",
    mainConfigFile: "../js/main.js",
	
    inlineText: true,
    removeCombined: true,
    fileExclusionRegExp: /^build/,
	
    modules: [
    {
        name: "main"
    }
    ]
})