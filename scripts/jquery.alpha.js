var alpha = function (word){

var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var puzzle = word;
var current = status.split('');
var wrongguess = 0;
var rightguess = 0;




$.fn.checker = function(word,key){

$('#' + key).click(function(){

 
 for(var i = 0; i<word.length ; i++){
 

	if (  word[i] == key )
	{
	a = 1;
	current[2*i] = key ; 
	$('#' + key).unbind("click"); 
	
	rightguess++;			
	$('#' + key).css( "backgroundColor","green");	
	}								}

 status = current.toString();

 status = status.replace(/\,/g,"");
 
 if(word.indexOf(key) == -1){ 
	wrongguess++;
		$('#' + key).unbind("click"); 
	$('#' + key).css( "backgroundColor","red");
	if(wrongguess == 1)
	{
	   $(".hangman_image").html("1").slideDown('slow'); 
	}
	if(wrongguess == 2)
	{
	  $(".hangman_image").html("2");
	}
	if(wrongguess == 3)
	{
	   $(".hangman_image").html("3"); 	   
	}
	if(wrongguess == 4)
	{
	   $(".hangman_image").html("4");
 	   
	}
	if(wrongguess == 5)
	{
	   $(".hangman_image").html("5");
 	   
	}
	
	
	
  
							}

							
 $(".mainpuzzle").text(status);

    
  if (word.length == rightguess){ 
  
	$("table").fadeOut("slow",function(){ $(".mainpuzzle").html("<a style='color:green;'> You Win</a>" );})

 
  }

  if(wrongguess > 5){	
	 $(".hangman_image").html("6");
	
	$("table").fadeOut("slow",function(){ $(".mainpuzzle").html("<a style='color:red;'> You Lose</a><br>"+word );})
  
	}    
 
 
 
 
 
 
 
 
 


});
};


for(var i=0;i<26;i++){$('#'+ abc[i]).checker(puzzle,abc[i]);}


};










