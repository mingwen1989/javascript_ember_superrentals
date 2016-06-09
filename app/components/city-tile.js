import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(city) {
      if (confirm('Are you sure?')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
