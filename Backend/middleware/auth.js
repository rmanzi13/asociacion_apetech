const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  console.log('Autenticando token...');
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token provided, access denied' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

const adminOnly = (req, res, next) => {
  console.log('Verificando rol de administrador...');
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied, admin only' });
  }
  next();
};

module.exports = { authenticateToken, adminOnly };
