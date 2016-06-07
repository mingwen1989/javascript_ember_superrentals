import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    rentals: this.store.findAll('rental'),
    announcements: this.store.findAll('announcement')
    });
    },
    actions: {
  destroyAnnouncement(announcement) {
    announcement.destroyRecord();
    this.transitionTo('index');
    }
  }
});
