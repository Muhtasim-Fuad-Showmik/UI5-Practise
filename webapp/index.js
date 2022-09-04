sap.ui.define([
	"sap/m/Text"

], function (Text) {
	"use strict";

	new Text({
		text: "Hello Fuad!"
	}).placeAt("header");

    new Text({
		text: "Welcome to SAP UI5 Practise..."
	}).placeAt("content");

});