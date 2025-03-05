const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// Middleware pour servir les fichiers statiques du dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Route de test pour voir si le serveur fonctionne
app.get('/ping', (req, res) => {
    res.send('Pong!');
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
