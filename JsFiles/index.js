 

let modules = document.querySelectorAll(".module .grade")  

for(let i =0  ; i < modules.length ; i++) {
   

  if( modules[i].getAttribute("tp") === "true" &&  modules[i].getAttribute("td") === "true" ) {
     
 
     let tpInput = document.getElementsByClassName("tp")[i] ; 
     let tdInput = document.getElementsByClassName("td")[i] ; 
     let examInput = document.getElementsByClassName("exam")[i] ; 


     tpInput.addEventListener("input" , function(){

      calculateGradeModule(i); 
       
    })
    tdInput.addEventListener("input" , function(){

      calculateGradeModule(i); 
       
    })
    examInput.addEventListener("input" , function(){

      calculateGradeModule(i); 
       
    })
 
  }else if(modules[i].getAttribute("tp") === "false" &&  modules[i].getAttribute("td") === "true"){
    
    let tdInput = document.getElementsByClassName("td")[i] ; 
    let examInput = document.getElementsByClassName("exam")[i] ; 

    tdInput.addEventListener("input" , function(){

      calculateGradeModule1(i); 
       
    })
    examInput.addEventListener("input" , function(){

      calculateGradeModule1(i); 
       
  })
  

}else if(modules[i].getAttribute("tp") === "true" &&  modules[i].getAttribute("td") === "false") {
  let tpInput = document.getElementsByClassName("tp")[i] ; 
  
  let examInput = document.getElementsByClassName("exam")[i] ; 


  tpInput.addEventListener("input" , function(){

   calculateGradeModule2(i); 
    
 })
 
 examInput.addEventListener("input" , function(){

   calculateGradeModule2(i); 
    
 })
}else {
  
  
  let examInput = document.getElementsByClassName("exam")[i] ; 
 
 examInput.addEventListener("input" , function(){

   calculateGradeModule3(i); 
    
 })

}
 
}











function calculateGradeModule(i) {

  let tp = document.querySelectorAll(".module .tp input")[i].value ; 
  let td = document.querySelectorAll(".module .td input")[i].value ; 
  let exam = document.querySelectorAll(".module .exam input")[i].value ;

  let grade = (parseFloat(td) * 0.2) + (parseFloat(tp) * 0.2) + (parseFloat(exam) * 0.6); 

  if( !isNaN(grade) && td >= 0 && td <=20 &&  tp >= 0 && tp <=20 && exam >= 0 && exam <=20 ) {
    document.getElementsByClassName("grade")[i].innerHTML =  grade.toFixed(2);;  
  }else{
    document.getElementsByClassName("grade")[i].innerHTML = NAN;  
  }
   
}

function calculateGradeModule1(i) {

   
  let td = document.querySelectorAll(".module .td input")[i].value ; 
  let exam = document.querySelectorAll(".module .exam input")[i].value ;

  let grade = (parseFloat(td) * 0.4) + (parseFloat(exam) * 0.6); 

  if( !isNaN(grade) && td >= 0 && td <=20 &&   exam >= 0 && exam <=20 ) {
    document.getElementsByClassName("grade")[i].innerHTML =  grade.toFixed(2);;  
  }else{
    document.getElementsByClassName("grade")[i].innerHTML = NAN;  
  }
   
}

function calculateGradeModule2(i) {

  let tp = document.querySelectorAll(".module .tp input")[i].value ; 
   
  let exam = document.querySelectorAll(".module .exam input")[i].value ;

  let grade =  ( (parseFloat(tp) * 0.4) + (parseFloat(exam) * 0.6) ) ; 

  if( !isNaN(grade) &&  tp >= 0 && tp <=20 && exam >= 0 && exam <=20 ) {
    document.getElementsByClassName("grade")[i].innerHTML =  grade.toFixed(2);;  
  }else{
    document.getElementsByClassName("grade")[i].innerHTML = NAN;  
  }
   
}

function calculateGradeModule3(i) {

   
  let exam = document.querySelectorAll(".module .exam input")[i].value ;

  let grade =    (parseFloat(exam) ) ;

  if( !isNaN(grade) &&  exam >= 0 && exam <=20 ) {
    document.getElementsByClassName("grade")[i].innerHTML =  grade.toFixed(2);;  
  }else{
    document.getElementsByClassName("grade")[i].innerHTML = NAN;  
  }
   
}


document.getElementsByClassName("btnResult")[0].addEventListener("click" , ()=>{ 

  let somme = 0 ; 
  let cof =0 ; 
    for(let i=0 ; i< modules.length ; i++ ){

     somme = somme +  document.getElementsByClassName("grade")[i].textContent * document.getElementsByClassName("grade")[i].getAttribute("cof"); 
     cof =  cof + parseInt(document.getElementsByClassName("grade")[i].getAttribute("cof")) ; 
      console.log(cof)
    }
    somme = somme / cof;
    console.log(somme)
    
    
    document.getElementsByClassName("result")[0].innerHTML =   somme.toFixed(2)    ; 
})