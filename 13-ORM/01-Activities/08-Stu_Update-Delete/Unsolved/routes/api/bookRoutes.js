const router = require('express').Router();
const Book = require('../../models/Book');

// TODO finish the PUT route to UPDATE a book in the database with a matching book_id
router.put('/:book_id', (req, res) => {
  Book.update(
    {
      // All the fields you can update and the data attached to the request body.
      title: req.body.title,
      author: req.body.author,
      book_id: req.body.book_id,
      pages: req.body.pages,
      edition: req.body.edition,
      is_paperback: req.body.is_paperback,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        book_id: req.params.book_id,
      },
    }
  )
    .then((updatedBook) => {
      // Sends the updated book as a json response
      res.json(updatedBook);
    })
    .catch((err) => res.json(err));
});

// TODO finish the DELETE route to DELETE a book in the database with a matching book_id
router.delete('/:book_id', (req, res) => {
  Book.destroy({
    where: {
      book_id: req.params.book_id,
    },
  })
    .then((deletedBook) => {
      res.json(deletedBook);
    })
    .catch((err) => res.json(err));
});

router.post('/seed', (req, res) => {
  Book.bulkCreate([
    {
      title: 'Make It Stick: The Science of Successful Learning',
      author: 'Peter Brown',
      book_id: '9780674729018',
      pages: 336,
      edition: 1,
      is_paperback: false,
    },
    {
      title:
        'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
      author: 'Kenneth Rubin',
      book_id: '9780137043293',
      pages: 500,
      edition: 1,
      is_paperback: true,
    },
    {
      title:
        "White Fragility: Why It's So Hard for White People to Talk About Racism",
      author: 'Robin DiAngelo',
      book_id: '9780807047415',
      pages: 192,
      edition: 2,
      is_paperback: true,
    },
    {
      title: 'The Pragmatic Programmer: Your Journey To Mastery',
      author: 'David Thomas',
      book_id: '9780135957059',
      pages: 352,
      edition: 2,
      is_paperback: false,
    },
    {
      title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
      author: 'Donald Knuth',
      book_id: '9780201896831',
      pages: 672,
      edition: 3,
      is_paperback: false,
    },
    {
      title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
      author: 'Safiya Umoja Noble',
      book_id: '9781479837243',
      pages: 256,
      edition: 1,
      is_paperback: true,
    },
  ]).then(() => {
    res.send('Seeding Success!');
  });
});

module.exports = router;
