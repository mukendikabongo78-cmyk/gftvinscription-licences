<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abonnement - Grand François TV</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
        }

        /* CONTAINER PRINCIPAL POUR ALIGNER LES PANNEAUX SUR FOND BLEU ET LE FORMULAIRE */
        .layout-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 25px;
            width: 100%;
            max-width: 1100px;
            flex-wrap: wrap; /* S'adapte aux écrans mobiles */
        }

        /* PANNEAUX SUR LE FOND BLEU (GAUCHE ET DROITE) */
        .side-panel {
            background: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            border-radius: 15px;
            color: #ffffff;
            padding: 25px;
            width: 280px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            text-align: left;
            box-sizing: border-box;
        }

        .side-panel h3 {
            margin-top: 0;
            font-size: 16px;
            color: #ffda6a; /* Teinte dorée pour lisibilité sur bleu */
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            padding-bottom: 8px;
        }

        .side-panel p {
            font-size: 13px;
            line-height: 1.5;
            margin: 10px 0;
            color: #f0f4f8;
        }

        .account-item {
            background: rgba(0, 0, 0, 0.15);
            padding: 10px;
            border-radius: 8px;
            margin-bottom: 10px;
            font-size: 13px;
        }

        .account-item strong {
            color: #ffffff;
            display: block;
            font-size: 14px;
        }

        .account-item span {
            color: #d1e7dd;
            font-size: 12px;
        }

        /* CARTE CENTRALE DU FORMULAIRE */
        .card {
            background: white;
            padding: 35px;
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            width: 100%;
            max-width: 420px;
            text-align: center;
            box-sizing: border-box;
        }

        .header-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 5px;
        }

        .profile-pic {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #1e3c72;
        }

        h2 {
            color: #1e3c72;
            margin: 0;
            font-size: 24px;
        }

        .subtitle {
            color: #666;
            font-size: 13px;
            margin-bottom: 25px;
        }

        .form-group {
            margin-bottom: 20px;
            text-align: left;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            color: #333;
            font-size: 13px;
        }

        input, select {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-sizing: border-box;
            font-size: 14px;
        }

        .btn-pay {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 14px;
            width: 100%;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s;
        }

        .btn-pay:hover {
            background-color: #218838;
        }

        .footer-text {
            margin-top: 15px;
            font-size: 11px;
            color: #888;
        }
    </style>
</head>
<body>

<div class="layout-container">

    <!-- PANNEAU GAUCHE : NUMÉROS DE PAIEMENT DIRECT -->
    <div class="side-panel">
        <h3>Paiement Direct (Mobile Money)</h3>
        <p>Si vous souhaitez effectuer un transfert direct hors ligne, utilisez l'un des comptes ci-dessous :</p>
        
        <div class="account-item">
            <strong>081 08 00 925</strong>
            <span>Nom : Bienvenu Mpali</span>
        </div>

        <div class="account-item">
            <strong>097 19 24 547</strong>
            <span>Nom : Mukendi François</span>
        </div>

        <div class="account-item">
            <strong>090 73 27 088</strong>
            <span>Nom : Mukendi François</span>
        </div>
    </div>

    <!-- FORMULAIRE CENTRAL (INCHANGÉ) -->
    <div class="card">
        <div class="header-container">
            <h2>Grand François TV</h2>
            <img src="https://github.com/mukendikabongo78-cmyk.png" alt="Grand François" class="profile-pic">
        </div>
        
        <p class="subtitle">Activation de Licence & Abonnement D-SoftBook</p>

        <form action="/payer-flexpay" method="POST">
            <div class="form-group">
                <label for="phone">Numéro Mobile Money (M-Pesa, Orange, Airtel)</label>
                <input type="tel" id="phone" name="phone" placeholder="Ex: 0812345678" required>
            </div>

            <div class="form-group">
                <label for="duree">Choisir la formule d'abonnement</label>
                <select id="duree" name="duree">
                    <option value="1">1 Mois - Licence Standard ($15)</option>
                    <option value="2">2 Mois - Licence Standard ($25)</option>
                    <option value="3">3 Mois - Licence Trimestrielle ($45)</option>
                    <option value="12">1 An - Licence Annuelle Recommandée ($150)</option>
                    <option value="99">À Vie - Licence Illimitée ($250)</option>
                </select>
            </div>

            <button type="submit" class="btn-pay">Payer via FlexPay</button>
        </form>

        <p class="footer-text">Paiement sécurisé. Votre licence sera activée automatiquement après validation.</p>
    </div>

    <!-- PANNEAU DROIT : CONSIGNES WHATSAPP -->
    <div class="side-panel">
        <h3>Validation & Activation</h3>
        <p>Après avoir effectué votre transfert sur l'un des numéros ci-contre :</p>
        <p><strong>1.</strong> Prenez une capture d'écran du message de confirmation de transaction.</p>
        <p><strong>2.</strong> Envoyez la capture par <strong>WhatsApp</strong> à l'un de ces numéros.</p>
        <p><strong>3.</strong> Vous recevrez immédiatement votre <strong>mot de passe d'activation</strong> pour débloquer votre logiciel D-SoftBook.</p>
    </div>

</div>

</body>
</html>
