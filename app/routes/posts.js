import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('post', { userId: 1 });
    // return this.store.findAll('post');
  }
});