sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function(
	Controller,
    MessageToast,
    Fragment
) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello : function () {
            // read message from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
        },
        onOpenDialog : function () {
            
        // WALKTHROUGH METHOD:
            // if(!this.pDialog) {
            //     this.pDialog = this.loadFragment({
            //         name: "sap.ui.demo.walkthrough.view.HelloDialog"
            //     });
            // }
            
            // this.pDialog.then(function(oDialog) {
            //     oDialog.open();
            // });
            
        // BRANDON METHOD:
        //     var oView = this.getView();
        //     if(!this.byId("helloDialog")) {
        //         //loan asynchronously XML fragment
        //         Fragment.load({
        //             id: oView.getId(),
        //             name: "sap.ui.demo.walkthrough.view.HelloDialog",
        //             controller: this
        //         }).then(function (oDialog) {
        //             // connect dialog to the root view of this component (models, lifecycle)
        //             oView.addDependent(oDialog);
        //             oDialog.open();
        //         })
        //     } else {
        //         this.byId("helloDialog").open();
        //     }

        // NOTE: Commented code above has all been moved to component.js. Therefore, the following implementation has become necessary
            this.getOwnerComponent().openHelloDialog();
        }

        // NOTE: onCloseDialog not necessary anymore due to the reuse implementation of the component where it has already been handled.

        // onCloseDialog : function () {
        //     // note: We don't need to chain to the pDialog promise, since this event-handler
        //     // is only called from within the loaded dialog itself.

        //     this.byId("helloDialog").close();
        // }
	});
});