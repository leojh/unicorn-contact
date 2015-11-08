import Ember from 'ember';

export default Ember.Component.extend({
  sortByFirstName: ['first'],
  sortedContacts: Ember.computed.sort('contacts', 'sortByFirstName'),

  filteredContacts: function() {
    var searchContacts = this.get('searchContacts');
    var sortedContacts = this.get('sortedContacts');

    if (!searchContacts) {return sortedContacts;}

    return this.get('sortedContacts')
      .filter(c => c.get('first').toLowerCase().includes(searchContacts.toLowerCase()));

  }.property('searchContacts'),

  actions: {
    contactSelected: function(contact) {
      this.sendAction('contactSelected', contact);
    }
  }
});
