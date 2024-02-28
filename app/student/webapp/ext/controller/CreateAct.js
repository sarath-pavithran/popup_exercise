sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        CreateAction: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
