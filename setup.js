const fs = require('fs');
const path = require('path');

/* ========================= OUTILS ========================= */
function createDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    }

    function createFile(filePath, content) {
        fs.writeFileSync(filePath, content, 'utf8');
        }

        /* ========================= DOSSIERS ========================= */
        const ROOT = 'frontend';
        const JS_DIR = path.join(ROOT, 'js');
        createDir(ROOT);
        createDir(JS_DIR);

        /* ========================= BASE CSS / HEADER / FOOTER ========================= */
        const baseStyle = `
        <style>
        * { box-sizing:border-box; }
        body { margin:0; font-family:Arial,sans-serif; background:#020617; color:white; }
        header { background:#1e293b; padding:20px; }
        nav a { color:#38bdf8; margin-right:15px; text-decoration:none; }
        .container { padding:30px; }
        .card { background:#1e293b; padding:20px; border-radius:8px; margin-bottom:20px; }
        button { padding:10px 15px; border:none; background:#2563eb; color:white; border-radius:5px; cursor:pointer; }
        input { padding:10px; width:100%; margin-bottom:10px; }
        footer { background:#020617; text-align:center; padding:15px; opacity:0.6; }
        </style>
        `;

        const header = `
        <header>
        <h1>Bot Platform</h1>
        <nav>
        <a href="index.html">Accueil</a>
        <a href="bots.html">Nos bots</a>
        <a href="equipe.html">Équipe</a>
        <a href="credits.html">Crédits</a>
        <a href="connexion.html">Connexion</a>
        </nav>
        </header>
        `;

        const footer = `
        <footer>
        © 2026 Bot Platform – Tous droits réservés
        </footer>
        `;

        /* ========================= HTML PAGES ========================= */
        const pages = {
          'index.html': `<!DOCTYPE html>
          <html lang="fr">
          <head>
          <meta charset="UTF-8">
          <title>Accueil</title>
          ${baseStyle}
          </head>
          <body>
          ${header}
          <div class="container">
          <div class="card">
          <h2>Bienvenue sur notre plateforme de bots</h2>
          <p>Découvre tous nos bots, notre équipe et notre système de crédits.</p>
          </div>
          <div class="card">
          <button onclick="window.location.href='bots.html'">Voir nos bots</button>
          </div>
          </div>
          ${footer}
          <script src="js/main.js"></script>
          </body>
          </html>`,

            'bots.html': `<!DOCTYPE html>
            <html lang="fr">
            <head>
            <meta charset="UTF-8">
            <title>Nos Bots</title>
            ${baseStyle}
            </head>
            <body>
            ${header}
            <div class="container">
            <div class="card">
            <h2>Nos Bots</h2>
            <p>Présentation des bots : file d'attente, tournoi, et autres.</p>
            </div>
            </div>
            ${footer}
            <script src="js/main.js"></script>
            </body>
            </html>`,

              'equipe.html': `<!DOCTYPE html>
              <html lang="fr">
              <head>
              <meta charset="UTF-8">
              <title>Équipe</title>
              ${baseStyle}
              </head>
              <body>
              ${header}
              <div class="container">
              <div class="card">
              <h2>Notre Équipe</h2>
              <p>Découvrez les membres de notre équipe e-sport.</p>
              </div>
              </div>
              ${footer}
              <script src="js/main.js"></script>
              </body>
              </html>`,

                'credits.html': `<!DOCTYPE html>
                <html lang="fr">
                <head>
                <meta charset="UTF-8">
                <title>Crédits</title>
                ${baseStyle}
                </head>
                <body>
                ${header}
                <div class="container">
                <div class="card">
                <h2>Crédits</h2>
                <p>Chaque utilisateur commence avec 0 crédit. Découvrez notre système.</p>
                </div>
                </div>
                ${footer}
                <script src="js/main.js"></script>
                </body>
                </html>`,

                  'connexion.html': `<!DOCTYPE html>
                  <html lang="fr">
                  <head>
                  <meta charset="UTF-8">
                  <title>Connexion</title>
                  ${baseStyle}
                  </head>
                  <body>
                  ${header}
                  <div class="container">
                  <div class="card">
                  <h2>Connexion</h2>
                  <input id="email" placeholder="Email">
                  <input id="password" type="password" placeholder="Mot de passe">
                  <button onclick="login()">Se connecter</button>
                  </div>
                  </div>
                  ${footer}
                  <script src="js/auth.js"></script>
                  </body>
                  </html>`,

                    'inscription.html': `<!DOCTYPE html>
                    <html lang="fr">
                    <head>
                    <meta charset="UTF-8">
                    <title>Inscription</title>
                    ${baseStyle}
                    </head>
                    <body>
                    ${header}
                    <div class="container">
                    <div class="card">
                    <h2>Créer un compte</h2>
                    <input id="email" placeholder="Email">
                    <input id="password" type="password" placeholder="Mot de passe">
                    <button onclick="register()">S'inscrire</button>
                    </div>
                    </div>
                    ${footer}
                    <script src="js/auth.js"></script>
                    </body>
                    </html>`,

                      'dashboard.html': `<!DOCTYPE html>
                      <html lang="fr">
                      <head>
                      <meta charset="UTF-8">
                      <title>Dashboard</title>
                      ${baseStyle}
                      </head>
                      <body>
                      ${header}
                      <div class="container">
                      <div class="card">
                      <h2>Dashboard</h2>
                      <p>Crédits : <span id="credits">0</span></p>
                      </div>
                      <div class="card">
                      <button onclick="window.location.href='boutique.html'">Boutique</button>
                      <button onclick="window.location.href='profil.html'">Profil</button>
                      </div>
                      </div>
                      ${footer}
                      <script src="js/dashboard.js"></script>
                      </body>
                      </html>`,

                        'profil.html': `<!DOCTYPE html>
                        <html lang="fr">
                        <head>
                        <meta charset="UTF-8">
                        <title>Profil</title>
                        ${baseStyle}
                        </head>
                        <body>
                        ${header}
                        <div class="container">
                        <div class="card">
                        <h2>Modifier les informations</h2>
                        <input id="email" placeholder="Email">
                        <input id="telephone" placeholder="Téléphone">
                        <input id="password" type="password" placeholder="Mot de passe">
                        <button onclick="updateProfile()">Mettre à jour</button>
                        </div>
                        </div>
                        ${footer}
                        <script src="js/profil.js"></script>
                        </body>
                        </html>`,

                          'boutique.html': `<!DOCTYPE html>
                          <html lang="fr">
                          <head>
                          <meta charset="UTF-8">
                          <title>Boutique</title>
                          ${baseStyle}
                          </head>
                          <body>
                          ${header}
                          <div class="container">
                          <div class="card">
                          <h2>Boutique</h2>
                          <p>Choisis le nombre de crédits et le prix correspondant :</p>
                          <ul>
                          <li>5 crédits → 0,99€ <button onclick="notAvailable()">Acheter</button></li>
                          <li>10 crédits → 1,99€ <button onclick="notAvailable()">Acheter</button></li>
                          <li>25 crédits → 4,99€ <button onclick="notAvailable()">Acheter</button></li>
                          </ul>
                          </div>
                          </div>
                          ${footer}
                          <script src="js/boutique.js"></script>
                          </body>
                          </html>`
                          };

                          /* ========================= CRÉATION DES PAGES ========================= */
                          for (const [file, content] of Object.entries(pages)) {
                              createFile(path.join(ROOT, file), content);
                              }

                              /* ========================= JS FILES ========================= */
                              createFile(path.join(JS_DIR, 'main.js'), `
                              function goPage(page){
                                  window.location.href = page;
                                  }
                                  `);

                                  createFile(path.join(JS_DIR, 'auth.js'), `
                                  function login(){
                                      localStorage.setItem("credits","0");
                                          localStorage.setItem("connected","true");
                                              window.location.href="dashboard.html";
                                              }
                                              function register(){
                                                  alert("Compte créé");
                                                      window.location.href="connexion.html";
                                                      }
                                                      `);

                                                      createFile(path.join(JS_DIR, 'dashboard.js'), `
                                                      document.getElementById("credits").innerText = localStorage.getItem("credits") || "0";
                                                      `);

                                                      createFile(path.join(JS_DIR, 'profil.js'), `
                                                      function updateProfile(){
                                                          alert("Profil mis à jour");
                                                          }
                                                          `);

                                                          createFile(path.join(JS_DIR, 'boutique.js'), `
                                                          function notAvailable(){
                                                              alert("Cet endroit n'est pas encore disponible pour le moment");
                                                              }
                                                              `);

                                                              console.log("✅ Tous les fichiers frontend et JS ont été créés avec succès !");