const API_URL = "http://localhost:3000/api";

/* ===================== PROTECTION PAGE ===================== */
if (localStorage.getItem("connected") !== "true") {
    window.location.href = "connexion.html";
    }

    /* ===================== CHARGEMENT DASHBOARD ===================== */
    async function loadDashboard() {
        const userId = localStorage.getItem("userId");

            if (!userId) {
                    window.location.href = "connexion.html";
                            return;
                                }

                                    try {
                                            const res = await fetch(`${API_URL}/user/${userId}`);
                                                    const data = await res.json();

                                                            if (!res.ok) {
                                                                        alert("Session invalide");
                                                                                    localStorage.clear();
                                                                                                window.location.href = "connexion.html";
                                                                                                            return;
                                                                                                                    }

                                                                                                                            // Mise à jour crédits
                                                                                                                                    document.getElementById("credits").innerText = data.credits;
                                                                                                                                            localStorage.setItem("credits", data.credits);

                                                                                                                                                } catch (err) {
                                                                                                                                                        console.error(err);
                                                                                                                                                                alert("Impossible de contacter le serveur");
                                                                                                                                                                    }
                                                                                                                                                                    }

                                                                                                                                                                    loadDashboard();