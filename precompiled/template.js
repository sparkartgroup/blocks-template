var Handlebars = require("handlebars/runtime.js");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template.hbs'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h1>Precompiled</h1>\n\n<form action=\""
    + escapeExpression(((helper = (helper = helpers.formAction || (depth0 != null ? depth0.formAction : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"formAction","hash":{},"data":data}) : helper)))
    + "\" method=\""
    + escapeExpression(((helper = (helper = helpers.formMethod || (depth0 != null ? depth0.formMethod : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"formMethod","hash":{},"data":data}) : helper)))
    + "\">\n  <input type=\"email\" value=\"\" name=\""
    + escapeExpression(((helper = (helper = helpers.emailName || (depth0 != null ? depth0.emailName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"emailName","hash":{},"data":data}) : helper)))
    + "\">\n  <input type=\"submit\" value=\""
    + escapeExpression(((helper = (helper = helpers.submitText || (depth0 != null ? depth0.submitText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"submitText","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + escapeExpression(((helper = (helper = helpers.submitName || (depth0 != null ? depth0.submitName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"submitName","hash":{},"data":data}) : helper)))
    + "\">\n</form>";
},"useData":true});
