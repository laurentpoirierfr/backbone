define([ 'backbone', 'resthub', 'collection/samples', 'hbs!template/samples', 'view/sample-view', 'model/sample' ],
function (Backbone, Resthub, Samples, samplesTemplate, SampleView, Sample) {
    
    var SamplesView = Resthub.View.extend({
        
        // Define view template
        template: samplesTemplate,
        events : {
			'click #create' : 'create'
		},
        initialize:function () {
            // Initialize the collection
            this.collection = new Samples();
            
            // Render the view when the collection is retreived from the server
            this.listenTo(this.collection, 'sync', this.render);
            
            // Request unpaginated URL
            this.collection.fetch({ data: { page: 'no'} });
        },
		render : function() {
			SamplesView.__super__.render.apply(this);
			this.collection.forEach(this.add, this);
			return this;
		},
		add : function(sample) {
			var sampleView = new SampleView({
				model : sample
			});
			sampleView.render();
		},
		create : function() {
			var sample = new Sample();
			// Silent cause we do not want to render but to be in edit
			// mode
			this.collection.add(sample, {
				silent : true
			});
			var sampleView = new SampleView({
				model : sample
			});
			sampleView.edit();
		}

    });
    return SamplesView;
});