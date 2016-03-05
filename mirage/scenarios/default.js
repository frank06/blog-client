export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  const posts = server.createList('post', 10);

  server.loadFixtures('comments');
  server.create('comment', { postId: 5 });

}
