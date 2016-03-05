import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  
  normalizeFindAllResponse(store, type, payload) {
    payload.data = payload.data.map(this.addLinks);
    return payload;
  },
  
  normalizeFindRecordResponse(store, type, payload) {
    payload.data = this.addLinks(payload.data);
    return payload;
  },
  
  addLinks(post) {
    post.type = 'post';
    delete post.relationships.comments.data;
    post.relationships.comments.links = { related: `/api/posts/${post.id}/comments` };
    return post;
  }
  
});
