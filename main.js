


// value=value%10;
// value=value/10;
function digits_count() {
    var n=document.getElementById("values").value;
    //n=Math.floor;
    var a=n;
    console.log(n);
    var count = 0;
    if (n >= 1) ++count;
  
    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }
  
    console.log("count:"+count);
     if(count==2)
     {
           n=n%10;
      
           alert("The Number You Thought is:"+Math.floor(n-1));
     }
     else if(count===3 ){
            alert("The Number You Thought is:"+Math.floor(a/10)-1);

     }
  }
  
  
  
   
  