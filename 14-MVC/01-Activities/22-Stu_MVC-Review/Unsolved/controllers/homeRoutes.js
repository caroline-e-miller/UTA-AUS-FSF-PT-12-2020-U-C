const router = require('express').Router();

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  const userData = await Dish.findAll().catch((err) => {
    res.json(err);
  });
  const user = userData.map((user) => user.get({ plain: true }));

  res.render('homepage', [user]);
});

module.exports = router;
