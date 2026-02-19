
let cnt = 0 ;
document.getElementById("nature").addEventListener("click", function (e) {
 
    if(this.style.filter != "blur(5px)"){
        this.style.filter = "blur(5px)";
        console.log("someone blrued the nature image");
    }
    else{
        this.style.filter = "none";
       
         console.log("someone unblrued the nature image");
          
    }
});

document.getElementById("lists").addEventListener("click" , function(e)
{
    console.log("someone trying to access lists");
}  , false);

