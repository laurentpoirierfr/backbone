define([ 'backbone', 'model/sample', 'backbone-localstorage' ], function(Backbone, Sample) {

	var Samples = Backbone.Collection.extend({

		//localStorage: new Backbone.LocalStorage("key-samples"),
		// Reference to this collection's model.
		model : Sample,
		url : 'api/sample',
		parse : function(response) {
			return response;
		},
		
			
	});
	return Samples;
});
