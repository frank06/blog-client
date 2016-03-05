/*jshint node:true*/

module.exports = function(app) {

  // app.get('/api/posts', function(req, res) {
  //   res.send({"data":[
  //     {"id":"1","type":"posts","links":{"self":"/api/posts/1"},"attributes":{"name":"Post 1","description":"post   text"}}
  //   ]});
  // });
  //
  // app.get('/api/posts/1', function(req, res) {
  //   res.send({"data":{"id":"1","type":"posts","links":{"self":"/api/posts/1"},"attributes":{"name":"Post 1","description":"post   text"},"relationships":{"comments":{"links":{"self":"/api/posts/1/relationships/comments","related":"/api/posts/1/comments"}}}}});
  // });
  //
  // app.get('/api/posts/1/comments', function(req, res) {
  //   res.send({"data":[{"id":"1","type":"comments","links":{"self":"/api/comments/1"},"attributes":{"description":"comment for post 1"},"relationships":{"post":{"links":{"self":"/api/comments/1/relationships/post","related":"/api/comments/1/post"}}}},{"id":"2","type":"comments","links":{"self":"/api/comments/2"},"attributes":{"description":"another comment for post 1"},"relationships":{"post":{"links":{"self":"/api/comments/2/relationships/post","related":"/api/comments/2/post"}}}}]})
  // });

};
