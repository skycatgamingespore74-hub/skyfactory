const fs = require("fs");
const path = require("path");

/* =========================
   OUTILS
   ========================= */

   function createDir(dir) {
     if (!fs.existsSync(dir)) {
         fs.mkdirSync(dir, { recursive: true });
           }
           }

           function createFile(filePath, content) {
             fs.writeFileSync(filePath, content, "utf8");
             }

             /* =========================
                DOSSIERS
                ========================= */

                const ROOT = "frontend";
                const JS_DIR = path.join(ROOT, "js");

                createDir(ROOT);
                createDir(JS_DIR);

                /* =========================
                   HTML TEMPLATES
                   ========================= */

                   const baseStyle = `
                   <style>
                   * { box-sizing:border-box; }
                   body {
                     margin:0;
                       font-family:Arial, sans-serif;
                         background:#020617;
                           color:white;
                           }
                           header {
                             background:#1e293b;
                               padding:20px;
                               }
                               nav a {
                                 color:#38bdf8;
                                   margin-right:15px;
                                     text-decoration:none;
                                     }
                                     .container {
                                       padding:30px;
                                       }
                                       .card {
                                         background:#1e293b;
                                           padding:20px;
                                             border-radius:8px;
                                               margin-bottom:20px;
                                               }
                                               button {
                                                 padding:10px 15px;
                                                   border:none;
                                                     background:#2563eb;
                                                       color:white;
                                                         border-radius:5px;
                                                           cursor:pointer;
                                                           }
                                                           input {
                                                             padding:10px;
                                                               width:100%;
                                                                 margin-bottom:10px;
                                                                 }
                                                                 footer {
                                                                   background:#020617;
                                                                     text-align:center;
                                                                       padding:15px;
                                                                         opacity:0.6;
                                                                         }
                                                                         </style>
                                                                         `;

                                                                         const header = `
                                                                         <header>
                                                                           <h1>Bot Platform</h1>
                                                                             <nav>
                                                                                 <a href="index.html">Accueil</a>
                                                                                     <a href="dashboard.html">Dashboard</a>
                                                                                         <a href="admin.html">Admin</a>
                                                                                           </nav>
                                                                                           </header>
                                                                                           `;

                                                                                           const footer = `
                                                                                           <footer>
                                                                                             © 2026 Bot Platform – Tous droits réservés
                                                                                             </footer>
                                                                                             `;

                                                                                             /* =========================
                                                                                                index.html
                                                                                                ========================= */

                                                                                                createFile(
                                                                                                  path.join(ROOT, "index.html"),
                                                                                                    `<!DOCTYPE html>
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
                                                                                                          <h2>Plateforme de Bots</h2>
                                                                                                              <p>Site central reliant tous les bots et dashboards.</p>
                                                                                                                </div>
                                                                                                                  <div class="card">
                                                                                                                      <button onclick="goLogin()">Connexion</button>
                                                                                                                          <button onclick="goRegister()">Inscription</button>
                                                                                                                            </div>
                                                                                                                            </div>
                                                                                                                            ${footer}
                                                                                                                            <script src="js/main.js"></script>
                                                                                                                            </body>
                                                                                                                            </html>`
                                                                                                                            );

                                                                                                                            /* =========================
                                                                                                                               login.html
                                                                                                                               ========================= */

                                                                                                                               createFile(
                                                                                                                                 path.join(ROOT, "login.html"),
                                                                                                                                   `<!DOCTYPE html>
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
                                                                                                                                                       </html>`
                                                                                                                                                       );

                                                                                                                                                       /* =========================
                                                                                                                                                          register.html
                                                                                                                                                          ========================= */

                                                                                                                                                          createFile(
                                                                                                                                                            path.join(ROOT, "register.html"),
                                                                                                                                                              `<!DOCTYPE html>
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
                                                                                                                                                                        <input placeholder="Email">
                                                                                                                                                                            <input type="password" placeholder="Mot de passe">
                                                                                                                                                                                <button onclick="register()">S'inscrire</button>
                                                                                                                                                                                  </div>
                                                                                                                                                                                  </div>
                                                                                                                                                                                  ${footer}
                                                                                                                                                                                  <script src="js/auth.js"></script>
                                                                                                                                                                                  </body>
                                                                                                                                                                                  </html>`
                                                                                                                                                                                  );

                                                                                                                                                                                  /* =========================
                                                                                                                                                                                     dashboard.html
                                                                                                                                                                                     ========================= */

                                                                                                                                                                                     createFile(
                                                                                                                                                                                       path.join(ROOT, "dashboard.html"),
                                                                                                                                                                                         `<!DOCTYPE html>
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
                                                                                                                                                                                               <h3>Crédits</h3>
                                                                                                                                                                                                   <p id="credits">0</p>
                                                                                                                                                                                                     </div>
                                                                                                                                                                                                       <div class="card">
                                                                                                                                                                                                           <h3>Statut serveur</h3>
                                                                                                                                                                                                               <p id="server">Hors ligne</p>
                                                                                                                                                                                                                 </div>
                                                                                                                                                                                                                 </div>
                                                                                                                                                                                                                 ${footer}
                                                                                                                                                                                                                 <script src="js/dashboard.js"></script>
                                                                                                                                                                                                                 </body>
                                                                                                                                                                                                                 </html>`
                                                                                                                                                                                                                 );

                                                                                                                                                                                                                 /* =========================
                                                                                                                                                                                                                    admin.html
                                                                                                                                                                                                                    ========================= */

                                                                                                                                                                                                                    createFile(
                                                                                                                                                                                                                      path.join(ROOT, "admin.html"),
                                                                                                                                                                                                                        `<!DOCTYPE html>
                                                                                                                                                                                                                        <html lang="fr">
                                                                                                                                                                                                                        <head>
                                                                                                                                                                                                                        <meta charset="UTF-8">
                                                                                                                                                                                                                        <title>Admin Panel</title>
                                                                                                                                                                                                                        ${baseStyle}
                                                                                                                                                                                                                        </head>
                                                                                                                                                                                                                        <body>
                                                                                                                                                                                                                        ${header}
                                                                                                                                                                                                                        <div class="container">
                                                                                                                                                                                                                          <div class="card">
                                                                                                                                                                                                                              <h2>Administration</h2>
                                                                                                                                                                                                                                  <button onclick="toggleServer()">Activer / Désactiver serveur</button>
                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                    ${footer}
                                                                                                                                                                                                                                    <script src="js/admin.js"></script>
                                                                                                                                                                                                                                    </body>
                                                                                                                                                                                                                                    </html>`
                                                                                                                                                                                                                                    );

                                                                                                                                                                                                                                    /* =========================
                                                                                                                                                                                                                                       JS FILES
                                                                                                                                                                                                                                       ========================= */

                                                                                                                                                                                                                                       createFile(
                                                                                                                                                                                                                                         path.join(JS_DIR, "main.js"),
                                                                                                                                                                                                                                           `
                                                                                                                                                                                                                                           function goLogin(){ window.location.href="login.html"; }
                                                                                                                                                                                                                                           function goRegister(){ window.location.href="register.html"; }
                                                                                                                                                                                                                                           `
                                                                                                                                                                                                                                           );

                                                                                                                                                                                                                                           createFile(
                                                                                                                                                                                                                                             path.join(JS_DIR, "auth.js"),
                                                                                                                                                                                                                                               `
                                                                                                                                                                                                                                               function login(){
                                                                                                                                                                                                                                                 localStorage.setItem("credits", "10");
                                                                                                                                                                                                                                                   window.location.href="dashboard.html";
                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                   function register(){
                                                                                                                                                                                                                                                     alert("Compte créé");
                                                                                                                                                                                                                                                       window.location.href="login.html";
                                                                                                                                                                                                                                                       }
                                                                                                                                                                                                                                                       `
                                                                                                                                                                                                                                                       );

                                                                                                                                                                                                                                                       createFile(
                                                                                                                                                                                                                                                         path.join(JS_DIR, "dashboard.js"),
                                                                                                                                                                                                                                                           `
                                                                                                                                                                                                                                                           document.getElementById("credits").innerText =
                                                                                                                                                                                                                                                             localStorage.getItem("credits") || "0";

                                                                                                                                                                                                                                                             document.getElementById("server").innerText =
                                                                                                                                                                                                                                                               localStorage.getItem("server") || "Hors ligne";
                                                                                                                                                                                                                                                               `
                                                                                                                                                                                                                                                               );

                                                                                                                                                                                                                                                               createFile(
                                                                                                                                                                                                                                                                 path.join(JS_DIR, "admin.js"),
                                                                                                                                                                                                                                                                   `
                                                                                                                                                                                                                                                                   function toggleServer(){
                                                                                                                                                                                                                                                                     const current = localStorage.getItem("server");
                                                                                                                                                                                                                                                                       const next = current === "En ligne" ? "Hors ligne" : "En ligne";
                                                                                                                                                                                                                                                                         localStorage.setItem("server", next);
                                                                                                                                                                                                                                                                           alert("Serveur : " + next);
                                                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                                           `
                                                                                                                                                                                                                                                                           );

                                                                                                                                                                                                                                                                           console.log("✅ Setup frontend terminé avec succès");