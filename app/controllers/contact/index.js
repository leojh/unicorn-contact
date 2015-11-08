import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToEditContact: function(c) {
      this.transitionToRoute('contact.edit', c);
    }
  }
});
