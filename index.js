


let c=0;

function Indexone(){
        c++;
       console.log(c);
       if(c===1){
        document.getElementById('idone').style.zIndex="4";
        document.getElementById('idfive').style.zIndex="3";
      }else if(c===2){
        document.getElementById('idone').style.zIndex="2";
        c=0;
      }
   }

   

  let c1=0;
   function Indextwo(){
    ++c1;
    if(c1===1){
    document.getElementById('idtwo').style.zIndex="4";
    document.getElementById('idfive').style.zIndex="3";
  }else if(c1===2){
    document.getElementById('idtwo').style.zIndex="2";
    c1=0;
  }
    
   }

   

   let c2=0;
   function Indexthree(){
      ++c2;
     if(c2===1){
      document.getElementById('idthree').style.zIndex="4";
    document.getElementById('idfive').style.zIndex="3";

     }else if(c2===2){
      document.getElementById('idthree').style.zIndex="2"; 
      c2=0;
     }
    
    
   }

   
  let c3=0;
   function Indexfour(){
     ++c3;
     if(c3===1){
    document.getElementById('idfour').style.zIndex="4";
    document.getElementById('idfive').style.zIndex="3";
  }else if(c3===2){
    document.getElementById('idfour').style.zIndex="2";
    c3=0;
  }
   
   }
  
  let c4=0;
   function Indexfive(){
    ++c4;
    if(c4===1){
    document.getElementById('idfive').style.zIndex="1";
  }else  if(c4===2){
    document.getElementById('idfive').style.zIndex="5";
    c4=0;
  }
    
   }
