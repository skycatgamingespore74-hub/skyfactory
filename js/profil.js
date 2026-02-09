const API_URL = 'https://serveur-site-production-97d2.up.railway.app';

async function updateProfile() {
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    if (!email || !token) {
        alert("Vous devez être connecté");
        window.location.href = 'connexion.html';
        return;
    }

    const newEmail = document.getElementById('email').value;
    const newTelephone = document.getElementById('telephone').value;
    const newPassword = document.getElementById('password').value;

    try {
        // Adapter l'URL pour correspondre au backend existant
        const res = await fetch(`${API_URL}/profile/${email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newEmail: newEmail || undefined,
                newPassword: newPassword || undefined,
                newTelephone: newTelephone || undefined
            })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(`Erreur : ${data.error || 'Impossible de mettre à jour le profil'}`);
            return;
        }

        alert("Profil mis à jour avec succès !");
        
        // Mettre à jour localStorage si l'email change
        if (newEmail) localStorage.setItem('email', newEmail);

    } catch (err) {
        console.error(err);
        alert("Impossible de contacter le serveur");
    }
}
