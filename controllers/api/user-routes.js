const router = require('express').Router();
const { User } = require('../../models')

//Creates new user
router.post('/signup', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
});

// Login for the user
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;

      res.render('userProfile', {
        dbUserData
      })    
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Logout for the user
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;