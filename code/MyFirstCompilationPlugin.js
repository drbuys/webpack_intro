class MyFirstCompilationPlugin {
  apply(compilation) {
    compilation.hooks.buildModule.tap("MyFirstModule", module => {
      debugger;
    });
  }
}

module.exports = MyFirstCompilationPlugin;
