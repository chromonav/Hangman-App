


$.fn.maker = function(word){

status= word.replace(/\s/g,"- ");
status = status.replace(/[a-z]/g,"_ ");
return this.text(status);

};
