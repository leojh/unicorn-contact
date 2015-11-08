import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToContact: function(contact) {
      this.transitionToRoute('contact', contact);
    }
  }
});
