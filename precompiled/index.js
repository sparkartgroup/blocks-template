var Runtime = require('./runtime.js');

// can't assign this because it doesn't work like a node module
// https://github.com/wycats/handlebars.js/pull/619#issuecomment-26661436
require('./template.js');

module.exports = {
  template: Runtime.templates['template.hbs']
};
