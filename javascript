function initialize(){
  document.getElementById('board').innerHTML = '';
  var j = 0;
  for(i=0;i<64;i++){
    if(j%2==0)document.getElementById('board').innerHTML+=
   '<div id='+i+' style="width:50px;height:50px;display:inline-block;background-color:grey;"></div>';
    else document.getElementById('board').innerHTML+=
    '<div id='+i+' style="width:50px;height:50px;display:inline-block;background-color:white;"></div>';
    j++;if((i)%8==7)j++;
  }
};
