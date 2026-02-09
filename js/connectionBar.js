const SERVER_URL = 'https://serveur-site-production-97d2.up.railway.app';

// Fonction de test serveur
async function checkServerConnection() {
    const bar = document.getElementById('server-status-bar');
    try {
        const response = await fetch(`${SERVER_URL}/admin/status`); // juste le /status
        const data = await response.json();

        if (response.ok && data.connected) {
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
        console.error('Erreur serveur:', err);
    }
}

// Vérification toutes les 3 secondes
setInterval(checkServerConnection, 3000);
checkServerConnection();
