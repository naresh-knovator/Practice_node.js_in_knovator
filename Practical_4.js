fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(albums => {
        const userAlbums = users.map(user => {
          const userAlbumTitles = albums
            .filter(album => album.userId === user.id)
            .map(album => album.title);
          return {
            userid: user.id,
            name: user.name,
            albums: userAlbumTitles,
          };
        });
        console.log(userAlbums);
      });
  });
