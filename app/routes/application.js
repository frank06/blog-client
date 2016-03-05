import Ember from 'ember';

const { RSVP, $ } = Ember;

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      posts: $.getJSON('/api/posts'),
      post2: $.getJSON('/api/posts/2'),
      commentsFor1: $.getJSON('/api/posts/1/comments'),
      commentsFor5: $.getJSON('/api/posts/5/comments')
    });
  }
});
