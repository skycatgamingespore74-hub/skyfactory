const API_URL = "https://serveur-site-production-97d2.up.railway.app";

/* ===================== BOUTIQUE ===================== */
async function acheterCredits(credits) {
    const connected = localStorage.getItem("connected");
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token"); // <-- récupérer le token

    if (!connected || !email || !token) {
        alert("Connecte-toi pour acheter des crédits !");
        return;
    }

    try {
        // 1) Vérifier que la session est valide
        const resSession = await fetch(`${API_URL}/check-session`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token })
        });

        const sessionData = await resSession.json();
        if (!sessionData.success) {
            alert("Session invalide, reconnecte-toi !");
            return;
        }

        // 2) Récupérer l'utilisateur depuis le backend
        const resUser = await fetch(`${API_URL}/user/${email}`);
        if (!resUser.ok) throw new Error("Impossible de récupérer les infos utilisateur");
        const user = await resUser.json();

        // 3) Calculer le nouveau total de crédits
        const newCredits = (user.credits || 0) + credits;

        // 4) Envoyer la mise à jour au backend
        const resUpdate = await fetch(`${API_URL}/update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                page: "boutique",
                newCredits: newCredits
            })
        });

        const data = await resUpdate.json();
        if (!resUpdate.ok) throw new Error(data.error || "Erreur lors de la mise à jour des crédits");

        // 5) Mettre à jour localStorage et affichage
        localStorage.setItem("credits", newCredits);
        const creditsEl = document.getElementById("credits");
        if (creditsEl) creditsEl.innerText = newCredits;

        // 6) Message de confirmation
        alert(`Achat réussi ! Tu as maintenant ${newCredits} crédits.`);

    } catch (err) {
        console.error(err);
        alert("Impossible de contacter le serveur pour acheter des crédits");
    }
}
