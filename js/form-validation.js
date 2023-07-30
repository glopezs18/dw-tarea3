// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {

        if (document.getElementById("birthdate").value != "") {
          let ageValidate = validate_age(document.getElementById("birthdate").value);
          if (ageValidate < 18) {
            event.preventDefault();
            event.stopPropagation();
            document.getElementById("birthdate").setCustomValidity("Invalid field.");
            document.querySelector(".birthdate-validation").innerHTML = "Debe ser mayor de edad.";
            form.classList.add('was-validated');
          } else {
            event.preventDefault();
            event.stopPropagation();
            document.getElementById("birthdate").setCustomValidity("");
          }
        } else {
          event.preventDefault();
          event.stopPropagation();
          document.querySelector(".birthdate-validation").innerHTML = "Fecha de nacimiento es requerida.";
          form.classList.add('was-validated');
        }

        let dpiValidate = validate_dpi(document.getElementById("dpi").value);
        if (!dpiValidate) {
          event.preventDefault();
          event.stopPropagation();
          document.getElementById("dpi").setCustomValidity("Invalid field.");
          document.querySelector(".dpi-validation").innerHTML = "Debe colocar su número de dpi completo.";
          form.classList.add('was-validated');
        } else {
          event.preventDefault();
          event.stopPropagation();
          document.getElementById("dpi").setCustomValidity("");
        }

        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
        } else {
          console.log("Formulario enviado");
          var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
          myModal.show();

          if (document.getElementById("resultFullname")) document.getElementById("resultFullname").innerHTML = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
          if (document.getElementById("resultBirthdate")) document.getElementById("resultBirthdate").innerHTML = document.getElementById("birthdate").value;
          if (document.getElementById("resultPhone")) document.getElementById("resultPhone").innerHTML = document.getElementById("tel").value;
          if (document.getElementById("resultEmail")) document.getElementById("resultEmail").innerHTML = document.getElementById("email").value;
          if (document.getElementById("resultDpi")) document.getElementById("resultDpi").innerHTML = document.getElementById("dpi").value;
          if (document.getElementById("resultDocto")) document.getElementById("resultDocto").innerHTML = document.getElementById("docto").value;
          if (document.getElementById("resultNacionality")) document.getElementById("resultNacionality").innerHTML = (document.getElementById("nacionality").value == "1") ? "Guatemalteco" : "Extranjero";
          if (document.getElementById("resultRequest")) document.getElementById("resultRequest").innerHTML = (document.getElementById("information_request").value != "") ? document.getElementById("information_request").value : "Campo vacío";

          var gender = document.getElementsByName('gender');

          for (let i = 0; i < gender.length; i++) {            
            if (gender[i].checked) document.getElementById("resultGender").innerHTML = gender[i].value;
              
          }
          // if(document.getElementById("resultGender")) document.getElementById("resultGender").innerHTML = document.getElementById("gender").value;
        }

      }, false)
    })
})()

function validate_age(date) {
  var today = new Date();
  var birthdate = new Date(date);
  var age = today.getFullYear() - birthdate.getFullYear();
  var m = today.getMonth() - birthdate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  return age;
}

function validate_dpi(dpi) {
  if (dpi.length < 13) return false;
  else return true;
}
