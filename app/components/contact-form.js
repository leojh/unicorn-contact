import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    save: function() {
      this.get('contact')
        .save()
        .then(() => {
          this.sendAction('onContactSaved');
        });
    }
  }
});
