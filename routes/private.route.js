const express = require('express');
const router = express.Router();

const { isAdmin } = require('../middlewares/functs');
const { isAuth } = require('../middlewares/functs');

//router
//  .route('/admin')
//  .get(isAdmin, isAuth, privateAdminPage)
//  .post(isAdmin, isAuth, createTeaCard)
// .delete(isAdmin, isAuth, deleteTeaCard)
// .put(isAdmin, isAuth, updateTeaCard);

module.exports = router;
