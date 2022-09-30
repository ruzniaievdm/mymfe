module.exports = {
  /*
  Modules you want to use from local source code.  Adding a module here means that when this app
  runs its build, it'll resolve the source from peer directories of this app.

  moduleName: the name you use to import code from the module.
  dir: The relative path to the module's source code.
  dist: The sub-directory of the source code where it puts its build artifact.  Often "dist".
  */
  localModules: [
    { moduleName: '@edx/brand', dir: '../brand' },
    { moduleName: '@edx/frontend-component-footer', dir: '../frontend-component-footer' },
    { moduleName: '@edx/frontend-component-header', dir: '../frontend-component-header' },
  ],
};
