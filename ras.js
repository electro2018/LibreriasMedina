let productos = [];
let contenedor = document.getElementById("contenedor");
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
contenedor.innerHTML = "";

function promedio() {
 let a=inputs[0].value;
 let b=inputs[1].value;
 s=(parseInt(a)+parseInt(b))/2 ;
 
 if(s>10)
 {
 //return s ;
Swal.fire({
  title: "aprobaste tu nota es   " +  `${s}`,
  text: "Haz agregado al carrito",
   icon: "success",
  confirmButtonText: "Ok",
});


} else { 
          
  
            
  Swal.fire({
      title: "puntaje bajo!",
      text: "campo obligatorio",
      icon: "error",
      confirmButtonText: "Confirmar"
});

}

} 


let inputs = e.target.children;
productos.push(inputs[0].value);

 productos.forEach(producto =>{
 let div = document.createElement("div");
 div.innerHTML = promedio();
 // contenedor.append(div);
  })
    inputs[0].value = "";
    inputs[1].value = "";
    
})
 