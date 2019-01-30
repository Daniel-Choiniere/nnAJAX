window.onload = function(){
    
    // vanilla javaScript method
  let http = new XMLHttpRequest();  
  
  http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200){
        //   console.log(JSON.parse(http.response));
      }
  };
  
  http.open("GET", "tweets.json", true);
  http.send();
  
//   Jquery method
    $.get("tweets.json", function(data){
        console.log(data);
    });
    
};