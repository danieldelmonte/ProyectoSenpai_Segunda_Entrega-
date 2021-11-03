/* ASIGNACIÓN DE EVENTOS */

const botonSignIN = document.getElementById("btnSignIN");
const txtPass = document.getElementById("passIN");
const txtUser = document.getElementById("userIN");

const btnSignUP = document.getElementById("btnSignUP");
const txtUserUP = document.getElementById("userUP");
const txtPassUP = document.getElementById("passUP");
const txtRPassUP = document.getElementById("RpassUP");
const emailUP = document.getElementById("emailUP");


botonSignIN.addEventListener("click", async() => {
    try {

        const pass = txtPass.value;
        const user = txtUser.value;

        const promesa = await fetch(
            `http://localhost:3000/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mail: user,
                    password: pass,
                }),
            }
        );

        const resultado = await promesa.json();

        console.log(resultado);
        if (resultado.error === null) {
            console.log("OK!");
        } else {
            console.log("ERROR!");
        }

    } catch (error) {
        console.log(error);
    } finally {
        //Hacer algo?
    }
});


btnSignUP.addEventListener("click", async() => {
    try {

        const user = txtUserUP.value;
        const pass = txtPassUP.value;
        const Rpass = txtRPassUP.value;
        const email = emailUP.value;

        const promesa = await fetch(
            `http://localhost:3000/user/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: user,
                    mail: email,
                    password: pass,
                }),
            }
        );

        const resultado = await promesa.json();

        console.log(resultado);
        // if (resultado.success === true) {
        //     console.log("OK!");
        // } else {
        //     console.log("ERROR!");
        // }

    } catch (error) {
        console.log(error);
    } finally {
        //loader.style = "display: none";
    }
});