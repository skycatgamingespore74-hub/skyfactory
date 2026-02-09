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
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.error || "Compte inexistant ou mauvais identifiant");
            return;
        }

        // Stockage local avec token
        localStorage.setItem("connected", "true");
        localStorage.setItem("userId", data.user.id || "");
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("credits", data.user.credits);
        localStorage.setItem("token", data.token); // <-- token ajouté

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
