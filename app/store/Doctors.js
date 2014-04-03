Ext.define('TreatLocations.store.Doctors', {
    extend : "Ext.data.Store",
    requires : [ 'Location.model.Doctors' ],
    config : {
        storeId : 'providerStore',
        model : 'Location.model.Doctors',
	autoLoad: true
    }
});