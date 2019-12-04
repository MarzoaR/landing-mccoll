
var formulario = document.getElementById('contactform');
// var info = document.querySelector('#infoform');
// var menssage;

formulario.addEventListener('submit', function(e){
  e.preventDefault();

  console.log('click en formulario');  
  
  var datos = new FormData(formulario);

      fetch('/send/contactform.php',{
        method: 'POST',
        body: datos
      })
        .then( res => res.json())
        .then( data => {
          console.log(data);
          
          // if(data === '1'){
          //   if(sessionStorage.getItem("languaje")==="en"){
          //     menssage = "Data sent";
          //   }else{
          //     if(sessionStorage.getItem("languaje")==="es"){
          //       menssage = "Mensaje enviado";
          //     }
          //   }
          //   //console.log("entra en el if");
          //   info.innerHTML = `<div class="col-12 mt-2 text-center"><span>${menssage}</span></div>`;
          //   setTimeout(function(){borrar()}, 3000);
          //   function borrar(){
          //     info.innerHTML = '';
          //     formulario.reset();
          //     //console.log("Se ejecuta el reset");
          //   }
          // }else{
          //   if(data === '0'){
          //     if(sessionStorage.getItem("languaje")==="en"){
          //       menssage = "Data not sent";
          //     }else{
          //       if(sessionStorage.getItem("languaje")==="es"){
          //         menssage = "Mensaje no enviado";
          //       }
          //     }
          //     info.innerHTML = `<div class="col-12 mt-2 text-center"><span>${menssage}</span></div>`;
          //     setTimeout(function(){borrar()}, 3000);
          //     function borrar(){
          //       info.innerHTML = '';
          //     }
          //   }
          // }         
        });
});