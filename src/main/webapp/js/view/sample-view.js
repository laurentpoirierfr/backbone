define([ 'backbone', 'resthub', 'view/sample-form-view', 'hbs!template/sample' ],
		function(Backbone, Resthub, SampleFormView, sampleTemplate) {

			var SampleView = Resthub.View.extend({
				root : '#sample-list',
				strategy : 'append',
				template : sampleTemplate,
				tagName : 'tr',
				className : 'sample',
				events : {
					'dblclick' : 'edit'
				},
				initialize : function() {
					this.listenTo(this.model, 'sync', this.render);
					this.listenTo(this.model, 'change', this.render);
					this.listenTo(this.model, 'destroy', this.remove);
				},
				edit : function() {
					var sampleFormView = new SampleFormView({
						root : "#sampleForm",
						model : this.model
					});
					sampleFormView.render();
				}
			});

			return SampleView;
		});
