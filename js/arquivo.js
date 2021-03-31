/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//clique para ver desenhos

function clicouRodas() {
   document.getElementById('rodas').classList.remove('none');
   document.getElementById('rodas').classList.add('customize-rodas');
   
   if (document.getElementById('portas').classList.contains('customize-portas') == true) {
      
      document.getElementById('portas').classList.remove('customize-portas');
      document.getElementById('portas').classList.add('none');
   }
   
}


function clicouPortas() {
   document.getElementById('portas').classList.remove('none');
   document.getElementById('portas').classList.add('customize-portas');
   
   if (document.getElementById('rodas').classList.contains('customize-rodas') == true) {
      
      document.getElementById('rodas').classList.remove('customize-rodas');
      document.getElementById('rodas').classList.add('none');
   }
   
}



function roda1() {
   document.getElementById('roda1').classList.remove('none');
   document.getElementById('roda1').classList.add('absolute');
   
   if (document.getElementById('roda2').classList.contains('absolute') == true || document.getElementById('roda3').classList.contains('absolute')) {
      
      document.getElementById('roda2').classList.remove('absolute');
      document.getElementById('roda2').classList.add('none');
      
      document.getElementById('roda3').classList.remove('absolute');
      document.getElementById('roda3').classList.add('none');
   }
  
}
function roda2() {
   document.getElementById('roda2').classList.remove('none');
   document.getElementById('roda2').classList.add('absolute');
   
   if (document.getElementById('roda1').classList.contains('absolute') == true || document.getElementById('roda3').classList.contains('absolute')) {
      
      document.getElementById('roda1').classList.remove('absolute');
      document.getElementById('roda1').classList.add('none');
      
      document.getElementById('roda3').classList.remove('absolute');
      document.getElementById('roda3').classList.add('none');
   }
  
}

function roda3() {
   document.getElementById('roda3').classList.remove('none');
   document.getElementById('roda3').classList.add('absolute');
   
   if (document.getElementById('roda1').classList.contains('absolute') == true || document.getElementById('roda2').classList.contains('absolute')) {
      
      document.getElementById('roda1').classList.remove('absolute');
      document.getElementById('roda1').classList.add('none');
      
      document.getElementById('roda2').classList.remove('absolute');
      document.getElementById('roda2').classList.add('none');
   }
  
}


function porta1() {
   document.getElementById('porta1').classList.remove('none');
   document.getElementById('porta1').classList.add('absolute');
   
   if (document.getElementById('porta2').classList.contains('absolute') == true || document.getElementById('porta3').classList.contains('absolute')) {
      
      document.getElementById('porta2').classList.remove('absolute');
      document.getElementById('porta2').classList.add('none');
      
      document.getElementById('porta3').classList.remove('absolute');
      document.getElementById('porta3').classList.add('none');
   }
  
}
function porta2() {
   document.getElementById('porta2').classList.remove('none');
   document.getElementById('porta2').classList.add('absolute');
   
   if (document.getElementById('porta1').classList.contains('absolute') == true || document.getElementById('porta3').classList.contains('absolute')) {
      
      document.getElementById('porta1').classList.remove('absolute');
      document.getElementById('porta1').classList.add('none');
      
      document.getElementById('porta3').classList.remove('absolute');
      document.getElementById('porta3').classList.add('none');
   }
  
}

function porta3() {
   document.getElementById('porta3').classList.remove('none');
   document.getElementById('porta3').classList.add('absolute');
   
   if (document.getElementById('porta1').classList.contains('absolute') == true || document.getElementById('porta2').classList.contains('absolute')) {
      
      document.getElementById('porta1').classList.remove('absolute');
      document.getElementById('porta1').classList.add('none');
      
      document.getElementById('porta2').classList.remove('absolute');
      document.getElementById('porta2').classList.add('none');
   }
  
}