const API_URL = "https://serveur-site-production-97d2.up.railway.app";

/* ===================== PROTECTION PAGE ===================== */
if (localStorage.getItem("connected") !== "true") {
    window.location.href = "connexion.html";
}

/* ===================== CHARGEMENT DASHBOARD ===================== */
async function loadDashboard() {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    if (!email || !token) {
        window.location.href = "connexion.html";
        return;
    }

    try {
        // 1) Vérifier la session
        const resSession = await fetch(`${API_URL}/check-session`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token })
        });

        const sessionData = await resSession.json();
        if (!sessionData.success) {
            alert("Session invalide, reconnecte-toi !");
            localStorage.clear();
            window.location.href = "connexion.html";
            return;
        }

        // 2) Récupérer les infos utilisateur
        const resUser = await fetch(`${API_URL}/user/${email}`);
        if (!resUser.ok) throw new Error("Impossible de récupérer les infos utilisateur");
        const data = await resUser.json();

        // 3) Mise à jour crédits et affichage
        document.getElementById("credits").innerText = data.credits;
        localStorage.setItem("credits", data.credits);

    } catch (err) {
        console.error(err);
        alert("Impossible de contacter le serveur");
    }
}

loadDashboard();
