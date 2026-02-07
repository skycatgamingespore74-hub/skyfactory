const API_URL = 'http://localhost:3000/api';
                                  function login(){
                                      localStorage.setItem("credits","0");
                                          localStorage.setItem("connected","true");
                                              window.location.href="dashboard.html";
                                              }
                                              function register(){
                                                  alert("Compte créé");
                                                      window.location.href="connexion.html";
                                                      }
                                                      