module.exports = {
  up: function(queryInterface, Sequelize) {
    // Define dummy data for posts
    const posts = [
      {
        title: 'A silly post',
        content: 'Roses are red, violets are blue, I am a poet.',
        createdAt: new Date('2010/08/17 12:09'),
        updatedAt: new Date('2010/08/17 12:09')
      },
      {
        title: 'New technology',
        content: 'These things called "computers" are pretty fancy.',
        createdAt: new Date('2011/03/06 15:32'),
        updatedAt: new Date('2011/03/06 15:47')
      },
      {
        title: 'Where is everybody?',
        content: 'I swear that they were here a minute ago.',
        createdAt: new Date('2011/04/06 15:32'),
        updatedAt: new Date('2011/04/06 15:47')
      },
      {
        title: 'Rock',
        content: 'Is deader than dead.',
        createdAt: new Date('2011/05/06 15:32'),
        updatedAt: new Date('2011/05/06 15:47')
      },
      {
        title: 'Ego',
        content: 'The center of the universe is a very crowded place.',
        createdAt: new Date('2011/03/16 15:32'),
        updatedAt: new Date('2011/03/16 15:47')
      },
      {
        title: 'I need a saga',
        content: 'What\'s the saga? It\'s "Songs for the Deaf".',
        createdAt: new Date('2012/03/06 15:32'),
        updatedAt: new Date('2012/03/06 15:47')
      },
      {
        title: 'Watch out where the huskies go',
        content: 'And don\'t you eat that yellow snow!',
        createdAt: new Date('2012/05/06 15:32'),
        updatedAt: new Date('2012/05/06 15:47')
      }
    ];

    // Insert posts into the database
    return queryInterface.bulkInsert('Posts', posts, {});
  },
  down: function(queryInterface, Sequelize) {
    // Delete all posts from the database
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
