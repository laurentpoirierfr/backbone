define([ 'backbone' ], function(Backbone) {
	var SampleModel = Backbone.Model.extend({

		defaults : {
			name : "",
			description : ""
		}

	});
	return SampleModel;
});