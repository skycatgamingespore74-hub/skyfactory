const API_URL = "https://serveur-site-production-97d2.up.railway.app";

/* ===================== LOGIN ===================== */
async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Veuillez remplir tous les champs");
        return;
    }

    try {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include", // envoi du cookie de session
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.error || "Compte inexistant ou mauvais identifiant");
            return;
        }

        window.location.href = "dashboard.html";

    } catch (err) {
        console.error(err);
        alert("Impossible de contacter le serveur");
    }
}

/* ===================== REGISTER ===================== */
async function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Veuillez remplir tous les champs");
        return;
    }

    try {
        const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.error || "Erreur lors de l'inscription");
            return;
        }

        alert("Compte créé avec succès !");
        window.location.href = "connexion.html";

    } catch (err) {
        console.error(err);
        alert("Impossible de contacter le serveur");
    }
}

/* ===================== CHECK SESSION ===================== */
async function checkSession() {
    try {
        // ⚠️ Changement ici : /me -> /session
        const res = await fetch(`${API_URL}/session`, {
            method: "GET",
            credentials: "include"
        });

        const data = await res.json();

        if (!res.ok || !data.connected) {
            return false; // pas connecté
        }

        return data.user; // connecté
    } catch (err) {
        console.error(err);
        return false;
    }
}

/* ===================== LOGOUT ===================== */
async function logout() {
    try {
        const res = await fetch(`${API_URL}/logout`, {
            method: "POST",
            credentials: "include"
        });

        const data = await res.json();

        if (res.ok && data.success) {
            window.location.href = "connexion.html";
        } else {
            alert("Impossible de se déconnecter");
        }
    } catch (err) {
        console.error(err);
        alert("Impossible de se déconnecter");
    }
}
