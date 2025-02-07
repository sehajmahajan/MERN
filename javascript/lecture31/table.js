function createTable(){
    let num=parseInt(document.getElementById("num").value) 
 //    console.log(num);
    for(let i=1;i<=10;i++){
     console.log(num+"*"+i+"="+ num*i );
     document.getElementById("output").innerHTML=num+"*"+i+"="+ num*i +"<br>"
    }
 }