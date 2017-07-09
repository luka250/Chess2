function initialize(){alert("fffffffff");
  for(i=0;i<64;i++){
    if(i%2==0)doucument.getElementById('big').innerHTML+=
   '<div id='+i+' style="width:50px;height=50px;display:inline-block;background-color:grey;border:solid;position:absolute;"></div>';
    else doucument.getElementById('big').innerHTML+=
    '<div id='+i+' style="width:50px;height=50px;display:inline-block;background-color:white;border:solid;position:absolute;"></div>';
  }
};
