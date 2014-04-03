Ext.define( 'TreatLocations.model.Doctors', {
  extend: 'Ext.data.Model',
  config: {
    fields: ['uuid','display','identifiers','person','identifier','attributes','retired','auditInfo','links','resourceVersion'],
    proxy: {
      type: 'ajax',
      url: '/openmrs-standalone/ws/rest/v1/provider?v=full',
      reader: {
	      type: 'json',
	      rootProperty: 'results'
      },
      autoload:true
    }
  }
});