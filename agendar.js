

function agendar(){

    var rut = document.getElementById("rut").value;
    var name = document.getElementById("nombre").value;
    var lastname = document.getElementById("apellidos").value;
    var age = document.getElementById("edad").value;
    var email = document.getElementById("correo").value;
    var specialty = document.getElementById("opciones").value;
    var date = document.getElementById("date").value;
    var hour = document.getElementById("opciones2").value;

// /^(0?[0-9]{2})\.?([0-9]{3})\.?([0-9]{3})\-?([\dkK])$/

// /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/gim

// /^(0?[1-9]|1[0-9]|2[0-9]|3[0-1])\-?(0?[1-9]|1[0-2])\-?([0-9]{4})$/

// /^(0?[0-9]{1,2})\.?([0-9]{3})\.?([0-9]{3})\-?([\dkK])$/

 // /^(0?[1-9]|1[0-9]|2[0-9]|3[0-1])\.?(0?[1-9]{3})\.?(0?[1-9]{3})\-?([0-9]{1})$/


 

  const regexp = /^(0?[1-9]|1[0-9]|2[0-9]|3[0-1])\.?(0?[1-9]{3})\.?(0?[1-9]{3})\-?([\dkK])$/ ; //Valida todo tipo de rut: con "." y "-" y sin estos.
  if (!rut.match(regexp)){
    alert('Debe escribir Rut valido');
        return false;
  }
  

     if (name === "" || name.length >15 || !/^[A-Z]+$/i.test(name)){
        alert("Debe escribir su Nombre");
        return false;
    }

    else if (lastname === "" || lastname.length>15 || !/^[A-Z]+$/i.test(lastname)){
        alert("Debe escribir su Apellido");
        return false;
    }

    else if(age ==="" || age ==="0" || age.length > 2 || isNaN(age) || /^\s[0]+$/.test(age)){
        alert(' Debe ingresar una edad valida');
        return false;
    }

    if(!(/\S+@\S+\.\S+/.test(email)) || email.length>100 ){
        alert('Debe escribir un Email valido');
        return false;
      }

      
      const date_r = /^(0?[1-9]|1[0-9]|2[0-9]|3[0-1])\-?(0?[1-9]|1[0-2])\-?([0-9]{4})$/ ;
      if ((!date.match(date_r))) { 
        alert("Debe escribir una Fecha valida dd-mm-aa")
          return false;
      }


      

alert(`Estimado(a) ${name}  ${lastname}, su hora para ${specialty} ha sido reservada para el
día ${date} a las ${hour}.\n Además, se le envió un mensaje a su correo ${email} con el detalle de su cita.
Gracias por preferirnos.`);
}
