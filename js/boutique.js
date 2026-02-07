const API_URL = "https://serveur-site-production-97d2.up.railway.app"; // pas besoin du /api si ton serveur n'ajoute pas ce préfixe

/* ===================== BOUTIQUE ===================== */
async function acheterCredits(credits) {
    const connected = localStorage.getItem("connected");
        const email = localStorage.getItem("email");

            if (!connected || !email) {
                    alert("Connecte-toi pour acheter des crédits !");
                            return;
                                }

                                    try {
                                            // 1) Récupérer l'utilisateur depuis le backend
                                                    const resUser = await fetch(`${API_URL}/user/${email}`);
                                                            if (!resUser.ok) throw new Error("Impossible de récupérer les infos utilisateur");
                                                                    const user = await resUser.json();

                                                                            // 2) Calculer le nouveau total de crédits
                                                                                    const newCredits = (user.credits || 0) + credits;

                                                                                            // 3) Envoyer la mise à jour au backend
                                                                                                    const resUpdate = await fetch(`${API_URL}/update`, {
                                                                                                                method: "POST",
                                                                                                                            headers: {
                                                                                                                                            "Content-Type": "application/json",
                                                                                                                                                        },
                                                                                                                                                                    body: JSON.stringify({
                                                                                                                                                                                    email: email,
                                                                                                                                                                                                    page: "boutique",   // peut être utile si tu suis la page
                                                                                                                                                                                                                    newCredits: newCredits
                                                                                                                                                                                                                                }),
                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                const data = await resUpdate.json();
                                                                                                                                                                                                                                                        if (!resUpdate.ok) throw new Error(data.error || "Erreur lors de la mise à jour des crédits");

                                                                                                                                                                                                                                                                // 4) Mettre à jour localStorage et affichage
                                                                                                                                                                                                                                                                        localStorage.setItem("credits", newCredits);

                                                                                                                                                                                                                                                                                const creditsEl = document.getElementById("credits");
                                                                                                                                                                                                                                                                                        if (creditsEl) creditsEl.innerText = newCredits;

                                                                                                                                                                                                                                                                                                // 5) Message de confirmation
                                                                                                                                                                                                                                                                                                        alert(`Achat réussi ! Tu as maintenant ${newCredits} crédits.`);
                                                                                                                                                                                                                                                                                                            } catch (err) {
                                                                                                                                                                                                                                                                                                                    console.error(err);
                                                                                                                                                                                                                                                                                                                            alert("Impossible de contacter le serveur pour acheter des crédits");
                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                }
