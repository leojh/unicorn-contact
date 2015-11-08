import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    goToContactIndex: function() {
      this.transitionToRoute('contact.index', this.model);
    }

  }
});
