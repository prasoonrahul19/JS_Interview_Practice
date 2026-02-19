const Hello = function()
{
    console.log("hello from rahul");
    
}

// const greet = function()
// {
//     document.querySelector('h1').innerHTML = 
//     "Congrats on being selected";

//     console.log("H1 is being changed");
    
    
// }

// setTimeout(greet , 15000)


const Color1 =[{
  "Color": "Teal"
}, {
  "Color": "Maroon"
}, {
  "Color": "Red"
}, {
  "Color": "Turquoise"
}, {
  "Color": "Purple"
}, {
  "Color": "Orange"
}, {
  "Color": "Mauv"
}, {
  "Color": "Green"
}, {
  "Color": "Red"
}, {
  "Color": "Fuscia"
}, {
  "Color": "Goldenrod"
}, {
  "Color": "Indigo"
}, {
  "Color": "Crimson"
}, {
  "Color": "Indigo"
}, {
  "Color": "Crimson"
}, {
  "Color": "Yellow"
}, {
  "Color": "Blue"
}, {
  "Color": "Blue"
}, {
  "Color": "Pink"
}, {
  "Color": "Teal"
}, {
  "Color": "Red"
}, {
  "Color": "Yellow"
}, {
  "Color": "Violet"
}, {
  "Color": "Fuscia"
}, {
  "Color": "Puce"
}, {
  "Color": "Maroon"
}, {
  "Color": "Maroon"
}, {
  "Color": "Green"
}, {
  "Color": "Green"
}, {
  "Color": "Crimson"
}, {
  "Color": "Aquamarine"
}, {
  "Color": "Goldenrod"
}, {
  "Color": "Orange"
}, {
  "Color": "Orange"
}, {
  "Color": "Blue"
}, {
  "Color": "Turquoise"
}, {
  "Color": "Red"
}, {
  "Color": "Orange"
}, {
  "Color": "Mauv"
}, {
  "Color": "Teal"
}, {
  "Color": "Maroon"
}, {
  "Color": "Green"
}, {
  "Color": "Pink"
}, {
  "Color": "Yellow"
}, {
  "Color": "Orange"
}, {
  "Color": "Indigo"
}, {
  "Color": "Crimson"
}, {
  "Color": "Puce"
}, {
  "Color": "Indigo"
}, {
  "Color": "Teal"
}, {
  "Color": "Maroon"
}, {
  "Color": "Pink"
}, {
  "Color": "Indigo"
}, {
  "Color": "Yellow"
}, {
  "Color": "Green"
}, {
  "Color": "Goldenrod"
}, {
  "Color": "Orange"
}, {
  "Color": "Pink"
}, {
  "Color": "Maroon"
}, {
  "Color": "Maroon"
}, {
  "Color": "Crimson"
}, {
  "Color": "Violet"
}, {
  "Color": "Blue"
}, {
  "Color": "Teal"
}, {
  "Color": "Puce"
}, {
  "Color": "Puce"
}, {
  "Color": "Turquoise"
}, {
  "Color": "Fuscia"
}, {
  "Color": "Red"
}, {
  "Color": "Maroon"
}, {
  "Color": "Teal"
}, {
  "Color": "Goldenrod"
}, {
  "Color": "Violet"
}, {
  "Color": "Yellow"
}, {
  "Color": "Purple"
}, {
  "Color": "Orange"
}, {
  "Color": "Puce"
}, {
  "Color": "Pink"
}, {
  "Color": "Red"
}, {
  "Color": "Turquoise"
}, {
  "Color": "Turquoise"
}, {
  "Color": "Orange"
}, {
  "Color": "Indigo"
}, {
  "Color": "Teal"
}, {
  "Color": "Blue"
}, {
  "Color": "Maroon"
}, {
  "Color": "Puce"
}, {
  "Color": "Purple"
}, {
  "Color": "Turquoise"
}, {
  "Color": "Mauv"
}, {
  "Color": "Yellow"
}, {
  "Color": "Puce"
}, {
  "Color": "Indigo"
}, {
  "Color": "Teal"
}, {
  "Color": "Fuscia"
}, {
  "Color": "Yellow"
}, {
  "Color": "Red"
}, {
  "Color": "Mauv"
}, {
  "Color": "Red"
}, {
  "Color": "Green"
}];
index = 0 ;
 let interval = null;

const start_change_color = document.getElementById("Start").addEventListener("click" , function()
{
    if(interval !=null)
    {
        return;
    }
    interval =  setInterval(() => {
         if(index == Color1.length)
        {
            index = 0 ;
        }
       document.getElementById('main').style.backgroundColor = Color1[index].Color;
        index++;
       
    }, 1000);
    
})


const stop_change_Color = document.getElementById("Stop").addEventListener("click" , function(){
    clearInterval(interval);
    interval = null;
})