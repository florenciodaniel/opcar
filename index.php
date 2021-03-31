<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>DEBOR</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="js/arquivo.js" type="text/javascript"></script>
        <link href="css/estilo.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
       <div class="container">
          <div class="escolha">
             <h2 class="rodas bbut_ora bpad_06 bmar_03" onclick="clicouRodas()">rodas</h2> 
             <h2 class="rodas bbut_ora bpad_06 bmar_03" onclick="clicouPortas()">portas</h2>
             <a href="index.php"><h2 class="rodas bbut_ora bpad_06 bmar_03">reset</h2></a>
          </div>
          
          <div class="foto">
             <img src="img/carro.png" alt=""/>
          </div>
          
          <div id="roda1" class="none">
             <img src="img/roda1.png" alt=""/>
          </div>
          <div id="roda2" class="none">
             <img src="img/roda2.png" alt=""/>
          </div>
          <div id="roda3" class="none">
             <img src="img/roda3.png" alt=""/>
          </div>
          
          <div id="porta1" class="none">
             <img src="img/cinza.png" alt=""/>
          </div>
          <div id="porta2" class="none">
             <img src="img/verde.png" alt=""/>
          </div>
          <div id="porta3" class="none">
             <img src="img/vermelha.png" alt=""/>
          </div>
          
       </div>
       
       <div class="customize">
          <div id="rodas" class="none">
             <div class="customize-box" onclick="roda1()">
                <img src="img/p_roda1.png" alt=""/>
             </div>
             <div class="customize-box" onclick="roda2()">
                <img src="img/p_roda2.png" alt=""/>
             </div>
             <div class="customize-box" onclick="roda3()">
                <img src="img/p_roda3.png" alt=""/>
             </div>
          </div>
          
          <div id="portas" class="none">
           <div class="customize-box" onclick="porta1()">
              <img src="img/p_cinza.png" alt=""/>
             </div>
             <div class="customize-box" onclick="porta2()">
                <img src="img/p_verde.png" alt=""/>
             </div>
             <div class="customize-box" onclick="porta3()">
                <img src="img/p_vermelha.png" alt=""/>
             </div> 
          </div>
          
          
       </div>
       
       
    </body>
</html>

