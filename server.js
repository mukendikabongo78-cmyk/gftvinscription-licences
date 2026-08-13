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
    
    // --- CONVERSION DE LA DURÉE EN TEXTE CLAIR POUR L'AFFICHAGE ---
    let dureeTexte = "";
    
    switch (duree) {
        case "1":
            dureeTexte = "1 mois";
            break;
        case "2":
            dureeTexte = "2 mois";
            break;
        case "3":
            dureeTexte = "3 mois";
            break;
        case "12":
            dureeTexte = "1 an (12 mois)";
            break;
        case "99":
            dureeTexte = "à vie (illimité)";
            break;
        default:
            dureeTexte = duree + " mois";
    }

    // Message de confirmation
    res.send(`
        <div style="font-family: Arial; text-align: center; padding: 50px;">
            <h2 style="color: #28a745;">Demande de paiement envoyée !</h2>
            <p>Un message a été envoyé au numéro <strong>${telephone}</strong>.</p>
            <p>Veuillez valider le paiement sur votre téléphone Mobile Money pour activer votre abonnement de <strong>${dureeTexte}</strong>.</p>
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
