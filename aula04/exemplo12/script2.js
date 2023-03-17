function coletarDados(){
   let peso =Number (document.getElementById("peso").value)
   let altura =Number(document.getElementById("altura").value)
   calcularIMC(peso, altura)
}
   function  calcularIMC(argPeso, argAltura){
    console.log(argPeso)
    console.log(argAltura)
    let imc = argPeso / (argAltura * argAltura )
    document.getElementById("res").innerHTML = imc
    classificarIMC(imc)
   }

   function classificarIMC(argIMC){
   var classe = ""

   if (argIMC < 18.5){
    classe = "desnutrição"
   }
   else if (argIMC < 25){
     classe = "peso normal"
   }
   else if (argIMC < 30){
      classe = "sobrepeso"
   }
   else if (argIMC < 35){
     classe = "Obesidade I"
  }
  else if (argIMC < 40){
     classe = "Obesidade II"
  }
  else{
     classe = "obesidade III"
  }
   document.getElementById("status").innerHTML= classe
   }
