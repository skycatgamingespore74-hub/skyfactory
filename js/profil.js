const API_URL = 'http://localhost:3000/api';

async function updateProfile() {
    const userId = localStorage.getItem('userId');

        if (!userId) {
                alert("Vous devez être connecté");
                        window.location.href = 'connexion.html';
                                return;
                                    }

                                        const email = document.getElementById('email').value;
                                            const telephone = document.getElementById('telephone').value;
                                                const password = document.getElementById('password').value;

                                                    try {
                                                            const res = await fetch(`${API_URL}/user/${userId}`, {
                                                                        method: 'PUT',
                                                                                    headers: {
                                                                                                    'Content-Type': 'application/json'
                                                                                                                },
                                                                                                                            body: JSON.stringify({ email, telephone, password })
                                                                                                                                    });

                                                                                                                                            const data = await res.json();

                                                                                                                                                    if (!res.ok) {
                                                                                                                                                                alert(`Erreur : ${data.message}`);
                                                                                                                                                                            return;
                                                                                                                                                                                    }

                                                                                                                                                                                            alert("Profil mis à jour avec succès !");
                                                                                                                                                                                                } catch (err) {
                                                                                                                                                                                                        console.error(err);
                                                                                                                                                                                                                alert("Impossible de contacter le serveur");
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                    }