const express = require('express');
const router = express.Router();

const routes = [
  { path: '/', view: 'base.html' },
  { path: '/admin', view: 'admin.html' },
  { path: '/admin/appointments', view: 'appointments.html' },
  { path: '/admin/users', view: 'users.html' },
  { path: '/profile', view: 'profile.html' },
  { path: '/login', view: 'login.html' },
  { path: '/register', view: 'register.html' }
];

routes.forEach(route => {
  router.get(route.path, (req, res) => res.render(route.view));
});

module.exports = router;