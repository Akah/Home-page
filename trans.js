(function(){
  console.log('trans.js');
  var ruUp=["А","Б","В","Г","Д","И","Л","М","Н","О","П","Р","У","Ф","Ы","Ь","Э","Ю"," "];
  var enUp=["A","B","V","G","D","I","L","M","N","O","P","R","U","F", "","'","E", ""," "];
  document.getElementById("in").addEventListener("input", update);
  function update() {
      var en = document.getElementById('in').value.split("");
      var ru = [];
      for(i=0;i<en.length;i++){
        // YE YO YA Y
        if(en[i]==="Y"){
          if(en[i+1]=="E"){
            ru.push("Е");
            i=i+2;
          }
          else if(en[i+1]=="O"){
            ru.push("Ё");
            i=i+2;
          }
          else if(en[i+1]=="A"){
            ru.push("Я");
            i=i+2;
          }else{
            ru.push("Й");
          }
        }

        if(en[i]==="C"&&en[i+1==="H"]){
          ru.push("Ч");
        }
        // ZH Z
        if(en[i]==="Z"){
          if(en[i+1]==="H"){
            ru.push("Ж");
            i=i+2;
          }else{
            ru.push("З");
          }
        }
        // KH K
        if(en[i]==="K"){
          if(en[i+1]==="H"){
            ru.push("Х");
            i=i+2;
          }else{
            ru.push("К");
          }
        }
        // TS T
        if(en[i]==="T"){
          if(en[i+1]==="S"){
            ru.push("Ц");
            i=i+2;
          }else{
            ru.push("Т");
          }
        }

        // SH SHCH S
        if(en[i]==="S"){
          if(en[i+1]==="H"){
            if(en[+2]==="C"&&en[+3]==="H"){
              ru.push("Щ");
              i=i+4;
            }else{
              ru.push("Ш");
              i=i+2;
            }
          }else{
            ru.push('С');
          }
        }else{
          for(j=0;j<enUp.length;j++){
            if(en[i]==enUp[j]){
              ru.push(ruUp[j]);
            }
          }
        }
      }
      document.getElementById('out').innerHTML = ru.join("");
  }
})();
