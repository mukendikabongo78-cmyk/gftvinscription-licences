const express = require('express');
const path = require('path');
const app = express();

// Configuration pour lire les données envoyées par le formulaire
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTE PRINCIPALE : Affiche la page de paiement (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ROUTE PAIEMENT : Reçoit le numéro et lance l'opération
app.post('/payer-flexpay', (req, res) => {
    const telephone = req.body.phone;
    const duree = req.body.duree;
    
    // Message de confirmation
    res.send(`
        <div style="font-family: Arial; text-align: center; padding: 50px;">
            <h2 style="color: #28a745;">Demande de paiement envoyée !</h2>
            <p>Un message a été envoyé au numéro <strong>${telephone}</strong>.</p>
            <p>Veuillez valider le paiement sur votre téléphone Mobile Money pour activer votre abonnement de ${duree} jours.</p>
            <br>
            <a href="/" style="text-decoration: none; color: #007bff;">← Retourner à l'accueil</a>
        </div>
    `);
});

// Démarrage du serveur sur le port attribué par Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
