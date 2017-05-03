jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"analytics/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"analytics/test/integration/pages/Worklist",
		"analytics/test/integration/pages/Object",
		"analytics/test/integration/pages/NotFound",
		"analytics/test/integration/pages/Browser",
		"analytics/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "analytics.view."
	});

	sap.ui.require([
		"analytics/test/integration/WorklistJourney",
		"analytics/test/integration/ObjectJourney",
		"analytics/test/integration/NavigationJourney",
		"analytics/test/integration/NotFoundJourney",
		"analytics/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});