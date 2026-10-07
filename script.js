/* ============================= */
/* LOGIN */
/* ============================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value;

        const password =
            document.getElementById("password").value;

        const message =
            document.getElementById("loginMessage");


        if (username === "greeshma" && password === "1234") {

            localStorage.setItem("loggedIn", "true");

            message.style.color = "#22c55e";

            message.innerText =
                "Login successful! Opening portfolio...";


            setTimeout(function() {

                window.location.href = "index.html";

            }, 800);


        } else {

            message.style.color = "#ef4444";

            message.innerText =
                "Invalid username or password!";

        }

    });

}


/* ============================= */
/* CHECK LOGIN */
/* ============================= */

if (
    window.location.pathname.endsWith("index.html")
) {

    if (
        localStorage.getItem("loggedIn") !== "true"
    ) {

        window.location.href = "login.html";

    }

}


/* ============================= */
/* LOGOUT */
/* ============================= */

function logout() {

    localStorage.removeItem("loggedIn");

    window.location.href = "login.html";

}


/* ============================= */
/* CONTACT FORM */
/* ============================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            document.getElementById(
                "contactMessage"
            ).innerText =
                "Thank you! Your message has been submitted.";

            contactForm.reset();

        }
    );

}