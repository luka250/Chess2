function initialize(){
  document.getElementById('board').innerHTML = '';
  var j = 0;
  for(i=0;i<64;i++){
    if(j%2==1)document.getElementById('board').innerHTML+=
   '<div id='+i+' onclick="move('+i+')" style="width:50px;height:50px;display:inline-block;background-color:grey;"></div>';
    else document.getElementById('board').innerHTML+=
    '<div id='+i+' onclick="move('+i+')" style="width:50px;height:50px;display:inline-block;background-color:white;"></div>';
    j++;if((i)%8==7)j++;
  }j=0;

  for(i=0;i<8;i++){
    document.getElementById(8+i).innerHTML='<img src="figures/b.pawn.png" style="width:40px;height:40px;margin:5px;">';
    document.getElementById(48+i).innerHTML='<img src="figures/w.pawn.png" style="width:40px;height:40px;margin:5px;">';
  }



  document.getElementById('0').innerHTML='<img src="figures/b.rook.png" style="width:40px;height:40px;margin:5px;">';
  document.getElementById('7').innerHTML='<img src="figures/b.rook.png" style="width:40px;height:40px;margin:5px;">';
  document.getElementById('56').innerHTML='<img src="figures/w.rook.png" style="width:40px;height:40px;margin:5px;">';
  document.getElementById('63').innerHTML='<img src="figures/w.rook.png" style="width:40px;height:40px;margin:5px;">';

  document.getElementById('1').innerHTML='<img src="figures/b.knight.png" style="width:40px;height:40px;margin:5px;">';
  document.getElementById('6').innerHTML='<img src="figures/b.knight.png" style="width:40px;height:40px;margin:5px;">';
  document.getElementById('57').innerHTML='<img src="figures/w.knight.png" style="width:40px;height:40px;margin:5px;">';
  document.getElementById('62').innerHTML='<img src="figures/w.knight.png" style="width:40px;height:40px;margin:5px;">';

  document.getElementById('2').innerHTML='<img src="figures/b.bishop.png" style="width:40px;height:40px;margin:5px;">';
  document.getElementById('5').innerHTML='<img src="figures/b.bishop.png" style="width:40px;height:40px;margin:5px;">';
  document.getElementById('58').innerHTML='<img src="figures/w.bishop.png" style="width:40px;height:40px;margin:5px;">';
  document.getElementById('61').innerHTML='<img src="figures/w.bishop.png" style="width:40px;height:40px;margin:5px;">';

  document.getElementById('3').innerHTML='<img src="figures/b.queen.png" style="width:40px;height:40px;margin:5px;">';
  document.getElementById('59').innerHTML='<img src="figures/w.queen.png" style="width:40px;height:40px;margin:5px;">';

  document.getElementById('4').innerHTML='<img src="figures/b.king.png" style="width:40px;height:40px;margin:5px;">';
  document.getElementById('60').innerHTML='<img src="figures/w.king.png" style="width:40px;height:40px;margin:5px;">';
}
var x=-1;

function move(par){
  if(x==-1)x=par;
  else {z=document.getElementById(x).innerHTML;
        document.getElementById(par).innerHTML=z;
        document.getElementById(x).innerHTML="";
        x=-1;}
}
