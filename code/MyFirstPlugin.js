const MyFirstCompilationPlugin = require("./MyFirstCompilationPlugin");

class MyFirstPlugin {
  constructor() {
    console.log("HELLLLOOOO INSTANSIATED");
  }
  apply(compiler) {
    compiler.hooks.done.tapAsync("MyFirstPlugin", (stats, callback) => {
      console.log(Reflect.ownKeys(stats.compilation.assets).join("\n"));
    });
    compiler.hooks.compilation.tap("MyFirstPlugin", compilation => {
      new MyFirstCompilationPlugin().apply(compilation);
    });
  }
}

module.exports = MyFirstPlugin;
