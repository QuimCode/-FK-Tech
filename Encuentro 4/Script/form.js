const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const edad = document.getElementById("edad");

    console.log(nombre, email, edad);

        alert(
            'El formulario se envió correctamente. Su nombre es {$nombre}'
        );
        
});