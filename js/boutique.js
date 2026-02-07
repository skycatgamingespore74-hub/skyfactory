/* ===================== BOUTIQUE ===================== */
function acheterCredits(credits) {
    const connected = localStorage.getItem("connected");
        if (!connected) {
                alert("Connecte-toi pour acheter des crédits !");
                        return;
                            }

                                // Récupère le nombre actuel de crédits depuis localStorage
                                    let currentCredits = parseInt(localStorage.getItem("credits")) || 0;
                                        currentCredits += credits;

                                            // Met à jour localStorage
                                                localStorage.setItem("credits", currentCredits);

                                                    // Met à jour l'affichage sur le dashboard si présent
                                                        const creditsEl = document.getElementById("credits");
                                                            if (creditsEl) creditsEl.innerText = currentCredits;

                                                                // Message de confirmation
                                                                    alert(`Achat réussi ! Tu as maintenant ${currentCredits} crédits.`);
                                                                    }