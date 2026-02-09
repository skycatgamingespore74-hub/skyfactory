const SERVER_URL = 'https://serveur-site-production-97d2.up.railway.app';

async function checkServerConnection() {
    const bar = document.getElementById('server-status-bar');

    try {
        const response = await fetch(`${SERVER_URL}/status`, {
            cache: 'no-store' // 🔥 empêche le 304
        });

        // Si le serveur répond (200)
        if (response.ok) {
            const data = await response.json();

            if (data.connected === true) {
                bar.textContent = '🟢 Connecté au serveur';
                document.body.classList.add('connected');
                document.body.classList.remove('disconnected');
                return;
            }
        }

        throw new Error('Réponse serveur invalide');

    } catch (err) {
        bar.textContent = '🔴 Non connecté au serveur';
        document.body.classList.add('disconnected');
        document.body.classList.remove('connected');
        console.error('Erreur serveur:', err);
    }
}

// Vérification toutes les 3 secondes
setInterval(checkServerConnection, 3000);
checkServerConnection();
