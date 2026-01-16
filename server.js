const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Serveur opérationnel' });
});

app.get('/api/data', (req, res) => {
    res.status(200).json({ data: "Voici vos données stratégiques" });
});

// Export pour les tests, démarrage sinon
if (require.main === module) {
    app.listen(PORT, () => console.log(`App running on port ${PORT}`));
}

module.exports = app;