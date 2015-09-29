# Backbone

## Backbone.Model

Models are the heart of any JavaScript application, containing the interactive data as well as a large part of the logic surrounding it: conversions, validations, computed properties, and access control. You extend Backbone.Model with your domain-specific methods, and Model provides a basic set of functionality for managing changes.


Déclaration d\`un Backbone.Model :

	var Sample = Backbone.Model.extend({
		defaults : {
			name : "",
			description : ""
		}
	});

Exemple en déclaration de module require.js

	define([ 'backbone' ], function(Backbone) {
		var Sample = Backbone.Model.extend({
			defaults : {
				name : "",
				description : ""
			}
		});
		return Sample;
	});



## Backbone.Collection

Collections are ordered sets of models. You can bind "change" events to be notified when any model in the collection has been modified, listen for "add" and "remove" events, fetch the collection from the server, and use a full suite of Underscore.js methods.

Any event that is triggered on a model in a collection will also be triggered on the collection directly, for convenience. This allows you to listen for changes to specific attributes in any model in a collection, for example: documents.on("change:selected", ...)


	var Samples = Backbone.Collection.extend({
		model : Sample,
		url : 'api/sample'
	});

Exemple en déclaration de module require.js :

	define([ 'backbone', 'model/sample'], function(Backbone, Sample) {
		var Samples = Backbone.Collection.extend({
			model : Sample,
			url : 'api/sample'
		});
		return Samples;
	});




## Rest Méthode

Lors de l\`utilisation des objets Model et Collection, certains méthode sont exposées afin d'accéder aux fonctionnalités REST.

Manipulation de la Collection :

	GET  /books/ .... collection.fetch();
	POST /books/ .... collection.create();

Manipulation du model :
	
	GET  /books/1 ... model.fetch();
	PUT  /books/1 ... model.save();
	DEL  /books/1 ... model.destroy();


![example image](example-image.jpg "An exemplary image")



## Backbone.Router


Mise en place d\`un router, pour la gestion de l'application :
 

	var Router = Backbone.Router.extend({
	  routes: {
	    "help":                 "help",    // #help
	    "search/:query":        "search",  // #search/kiwis
	    "search/:query/p:page": "search"   // #search/kiwis/p7
	  },
	  help: function() {
	    ...
	  },
	  search: function(query, page) {
	    ...
	  }
	});

Différents type de lien sont possible, liens direct ou paramétrés.



## Backbone.history

History serves as a global router (per frame) to handle hashchange events or pushState, match the appropriate route, and trigger callbacks. You shouldn't ever have to create one of these yourself since Backbone.history already contains one.

Lancement du Backone.history

	$(function(){
	  new Router();
	  new HelpPaneRouter();
	  Backbone.history.start({pushState: true});
	});


## Backbone.sync

Backbone.sync is the function that Backbone calls every time it attempts to read or save a model to the server. By default, it uses jQuery.ajax to make a RESTful JSON request and returns a jqXHR. You can override it in order to use a different persistence strategy, such as WebSockets, XML transport, or Local Storage.

## Backbone.View

Backbone views are almost more convention than they are code — they don't determine anything about your HTML or CSS for you, and can be used with any JavaScript templating library. The general idea is to organize your interface into logical views, backed by models, each of which can be updated independently when the model changes, without having to redraw the page. Instead of digging into a JSON object, looking up an element in the DOM, and updating the HTML by hand, you can bind your view's render function to the model's "change" event — and now everywhere that model data is displayed in the UI, it is always immediately up to date.



	define([ 'backbone', 'resthub', 'collection/samples', 
	'hbs!template/samples', 'view/sample-view', 'model/sample' ], 	
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

