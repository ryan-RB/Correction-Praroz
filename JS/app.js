document.addEventListener("DOMContentLoaded", () => {
    console.log("JS Loaded.");
    let warning = document.querySelector(".alert");
    let email = document.querySelector(".email");
    let mdp = document.querySelector(".password");
    let btn = document.getElementById("connexion");
    
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        formActive();
    });

    let formActive = () => {

        email = document.querySelector(".email").value;
        mdp = document.querySelector(".password").value;

        console.log(email , mdp);

        if (email && mdp){
            warning.classList.add("success");
            warning.classList.remove("error");
            warning.innerText = "Connexion réussie.";
            localStorage.setItem("utilisateur", email);
            sessionStorage.setItem("utilisateur", "idsession");
        } else {
            warning.classList.add("error");
            warning.innerText = "Mail ou mot de passe incorrecte.";
            warning.classList.remove("success");
        }
    };
});