import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  
  urlForQuery(query) {
    if (query.userId) {
      return `${this.urlPrefix()}/users/${query.userId}/feed`;
    }
    return this._super(...arguments);
  },
  
  findHasMany(store, snapshot, url, relationship) {
    const id = snapshot.id,
      type = snapshot.modelName;

    url = this.urlPrefix(url, this.buildURL(type, id, null, 'findHasMany'));
    
    if (relationship.type == "comment" && snapshot.record.get('query-params')) {
      const qp = $.param(snapshot.record.get('query-params'));
      url += "?" + qp;
    }

    return this.ajax(url, 'GET');
  }
  
});