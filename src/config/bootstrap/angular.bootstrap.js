import ngDocsBootstrap from 'swanky-processor-ngdocs/src/bootstrap/angular.bootstrap';

// This line MUST contain a static-path (rather than a variable) so that Webpack can determine the list of files to require() at compile-time.
const modulesToRequire = require.context('../../content/angular-components/', true, /^.*\/index.js$/);

// Load all of the Angular modules that you can find then boot the app.
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

const modules = requireAll(modulesToRequire);

// Assume module.default is the module name (a string)
const moduleNameMap = modules.reduce((acc, mod) => Object.assign(acc, {[mod.default]: mod}), {});

ngDocsBootstrap(moduleNameMap);
