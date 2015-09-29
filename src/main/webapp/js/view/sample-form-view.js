define(['backbone', 'resthub', 'hbs!template/sample-form', 'backbone-validation'], function(Backbone, Resthub, sampleFormTemplate) {

  var SampleFormView = Resthub.View.extend({
    template: sampleFormTemplate,
    tagName: 'form',
    events: {
      submit: 'save',
      'click .cancel': 'cancel',
      'click .delete': 'delete'
    },
    initialize: function() {
      Backbone.Validation.bind(this);
    },
    save: function() {
      this.model.save({
        name: this.$('#name-field').val(),
        description: this.$('#desc-field').val(),
      });
      return false;
    },
    cancel: function() {
      this.model.trigger('change');
      this.remove();
      return false;
    },
    delete: function() {
      this.model.destroy();
      this.remove();
      return false;
    }
  });

  return SampleFormView;

});
