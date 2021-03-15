 
 
 var slayt = document.getElementsByClassName("slayt"); 
 
 var slaytSayısı = slayt.length;
 
 var slaytNo = 0; 
 
   slaytGoster(slaytNo); 
   
   
   function onceki() {
	   
	   slaytNo--;
	   
	   slaytGoster(slaytNo);
	   
	   clearInterval(s);
	   
   }
   
    function sonraki() {
	   
	   slaytNo++;
	   
	   slaytGoster(slaytNo);
	    clearInterval(s);
   } 
   
  var s =  setInterval(function() {
	   
	   slaytNo++;
	   
	   slaytGoster(slaytNo);
	   
   },3000);
   
 
 
  function slaytGoster(slaytNumarası) {
	  
	    slaytNo = slaytNumarası;
		
		if(slaytNumarası >= slaytSayısı){
			
			slaytNo = 0;
			
		} 
		
		if(slaytNumarası < 0){
			
			slaytNo = slaytSayısı -1;
			
		}
	   
	    for(i = 0; i< slaytSayısı; i++) {
			
			slayt[i].style.display = "none";
			
			
		} 
		
		slayt[slaytNo].style.display = "block";
	   
	   
  }
   
   
   
   
   