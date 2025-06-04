const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5174;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'dota2secret',
  resave: false,
  saveUninitialized: true
}));


// Index route
app.get('/', (req, res) => {
  res.status(200).send({message: 'Bem vindo ao Dota 2 API!'});
});

// Login page (GET)
// app.get('/login', (req, res) => {
//   res.send(`
//     <form method="POST" action="/login">
//       <input name="username" placeholder="Username" required />
//       <input name="password" type="password" placeholder="Password" required />
//       <button type="submit">Login</button>
//     </form>
//   `);
// });

// Login handler (POST)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Simple check (replace with real authentication)
  if (username === 'admin' && password === 'dota2') {
    req.session.user = 'P4cotin';
    res.redirect('/logged');
  } else {
    res.status(400).send({ error: 'Credenciais inválidas' });
  }
});

// Logged page (protected)
app.get('/logged', (req, res) => {
  if (req.session.user) {
    res.status(200).send({ message: `Fala memo ${req.session.user}! você está logado tá.` });
  } else {
    res.status(401).json({ error: 'Sem autorização' });
  }
});

app.get('/heroes', (req, res) => {
  if (req.session.user) {
    res.send(`Fala maluco! ${req.session.user}! voce esta logado!. <a href="/logout">Logout</a>`);
  } else {
    res.status(401).json({ error: 'Sem autorização' });
  }
});


// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

