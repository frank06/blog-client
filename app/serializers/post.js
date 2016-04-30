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
  },
  
  serializeAttribute: function(snapshot,json,key,attributes) {
    
    debugger;
    if ( snapshot.changedAttributes()[key] || snapshot.record.get('isNew'))  {
      var t = this._super(snapshot, json, key, attributes);

      Object.keys(json).forEach((k) => {
        if (json[k] === null) {
          json[k] = undefined;
        }
      });

      return t;
    } else {
      return;
    }
  }
  
});
