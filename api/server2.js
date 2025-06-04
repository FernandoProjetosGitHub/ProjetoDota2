const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5174;
const SECRET_KEY = 'dota2supersecretkey'; // idealmente, coloque em .env depois

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware de autenticação
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Formato: "Bearer TOKEN"

    if (!token) return res.status(401).json({ error: 'Token não fornecido' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token inválido ou expirado' });
        req.user = user;
        next();
    });
}

// Rota pública
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Bem-vindo ao Dota 2 API!' });
});

// Login (gera token)
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Autenticação simples (substituir por banco de dados depois)
    if (username === 'admin' && password === 'dota2') {
        const user = { username: 'P4cotin' };
        const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login bem-sucedido', token });
    } else {
        res.status(400).json({ error: 'Credenciais inválidas' });
    }
});

// Rota protegida: /logged
app.get('/logged', authenticateToken, (req, res) => {
    res.status(200).json({ message: `Fala memo ${req.user.username}! você está logado tá.` });
});

// Rota protegida: /heroes
app.get('/heroes', authenticateToken, (req, res) => {
    res.status(200).json({ message: `Fala maluco! ${req.user.username}! você está logado!` });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
