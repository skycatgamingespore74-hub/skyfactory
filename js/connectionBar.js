const SERVER_URL = 'https://serveur-site-production-97d2.up.railway.app'; // Racine du serveur backend

async function checkServerConnection() {
    const bar = document.getElementById('server-status-bar');
    try {
        const response = await fetch(`${SERVER_URL}/status`); // Vérifie le statut
        if (response.ok) {
            bar.textContent = 'Connecté au serveur';
            document.body.classList.add('connected');
            document.body.classList.remove('disconnected');
        } else {
            throw new Error('Serveur non accessible');
        }
    } catch (err) {
        bar.textContent = 'Non connecté au serveur';
        document.body.classList.add('disconnected');
        document.body.classList.remove('connected');
    }
}

// Vérification toutes les 3 secondes
setInterval(checkServerConnection, 3000);
checkServerConnection(); // première vérification immédiate
