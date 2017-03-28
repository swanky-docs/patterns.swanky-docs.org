import reactBootstrap from 'swanky-processor-ngdocs/src/bootstrap/react.bootstrap';

// This line MUST contain a static-path (rather than a variable) so that Webpack can determine the list of files to require() at compile-time.
const modulesToRequire = require.context('../../content/react-components/', true, /^.*\/index.jsx$/);

// Load all of the React modules that you can find.
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

// Pass an object-map of moduleNames-to-module-functions: {'DatePicker': function DatePicker() ..., CardInput: function CardInput
let moduleMap = {};

requireAll(modulesToRequire).forEach(module => {
  let moduleKeys = Object.keys(module.default);
moduleKeys.forEach(moduleKey => moduleMap[moduleKey] = module.default[moduleKey]);
});

reactBootstrap(moduleMap);
