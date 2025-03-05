const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080; // ✅ Bon : Utilisation du port dynamique

app.get('/', (req, res) => {
    res.send('Serveur en ligne !');
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
app.use((req, res, next) => {
    console.log(`Requête reçue : ${req.method} ${req.url}`);
    next();
});
process.on("SIGTERM", () => {
    console.log("Processus terminé proprement.");
    process.exit(0);
});

process.on("uncaughtException", (err) => {
    console.error("Erreur non capturée :", err);
});
