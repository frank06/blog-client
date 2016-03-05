import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  
  findHasMany(store, snapshot, url, relationship) {
    var id   = snapshot.id;
    var type = snapshot.modelName;

    url = this.urlPrefix(url, this.buildURL(type, id, null, 'findHasMany'));
    
    if (relationship.type == "comment") {
      url += `?${snapshot.record.get("qp")}=true`;
    }

    return this.ajax(url, 'GET');
  }
  
});