import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');

  this.route('contact', function() {
    this.route('index', { path: '/:contact_id' });
    this.route('edit', { path: '/edit/:contact_id' });
  });
});

export default Router;
