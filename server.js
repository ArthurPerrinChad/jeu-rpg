const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Utilise le port Railway ou 3000 par défaut

app.get('/', (req, res) => {
    res.send('Serveur en ligne !');
});

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
