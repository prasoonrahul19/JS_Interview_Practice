// const tile = document.getElementById("title").innerHTML = "<h1>Changing the h1 using js </h1>";


//  it will overwrie the class name to test or if class is not there it will add the class name test
// document.getElementById("title").setAttribute("class" , "test"); 

const title = document.getElementById("title");

title.style.backgroundColor = "red";
title.style.padding = "20px";
title.style.borderRadius = "50px";
// console.log(title.innerText); 
// nhi run hoga kyo i node js is server side language hai aur ye browser ke document object model ko access nahi kar sakta. 
// Ye code sirf browser me run hoga jaha DOM available hota hai.

// title.innerText ----> 'Dom Interview Practice'

// title.textContent -----> 'Dom Interview Practice  I am Rahul '

//  yeh dono same output denge but textContent me agar humne koi extra space diya hai ya fir span style display none kia hai to wo bhi show karega jabki innerText me extra space
//  ya none wali chese ignore kar dega.

// title.innerHTML --------> 'Dom Interview Practice <span style="display:none"> I am Rahul </span>'

// title.innerHTML = 'Dom Interview Practice <span style="display:block"> I am Rahul </span>';

// yeh code run karne ke baad h1 ke andar jo span hai wo display block ho jayega aur visible ho jayega


document.querySelectorAll("h1")

// ul li templist phir color change krna querselectorall .

function applystyle() {
const MyUl = document.querySelector("ul");
const MyLiList = MyUl.querySelectorAll("li");
// querySelectorAll se hume ek node list milta hai jisme hum index ke through access kar sakte hai aur uske style ko change kar sakte hai.
MyLiList[1].style.color = "green";


const MyLi = MyUl.querySelector("li");
MyLi.innerText = "This is the first item which is changed using querySelector";


MyLiList.forEach((li,index)=>{

    if(index%2 == 0 ){
        li.style.backgroundColor = "darkblue";
        li.style.color = "orange";
    }
    else{
        li.style.backgroundColor = "orange";
        li.style.color = "purple";
    }
});


const h2 = document.getElementsByClassName("item");
// we can't use forEach loop on HTML collection so we need to convert it into an array first using Array.from() method.
const Arraylistforh2 = Array.from(h2);
Arraylistforh2.forEach((item , index)=>{
    // lets say we want alternative li to be in different color then we can use index to check if it's even or odd and then apply different styles accordingly.
   if(index%2 == 0 ){
        item.style.backgroundColor = "green";
        item.style.color = "blue";
    }
    else{
        item.style.backgroundColor = "Yellow";
        item.style.color = "red";
    }
    

})

}


// adding a element to list 

function addNumber(num)
{
    // #####METHOD1#################
    // const Li = document.createElement('li');
    // Li.innerHTML = `${num}`;
    // document.querySelector('.Item-List').appendChild(Li);


    // ############# Method2 == optimized one ###############
    const Li  =  document.createElement('li');
    Li.appendChild(document.createTextNode(num));
    document.querySelector('.Item-List').appendChild(Li);

}

addNumber('SIX');
addNumber('Seven');
applystyle();

// edit and  remove the value

const editing = document.querySelector("li:nth-child(2)");
// editing.innerHTML = "We trying to editing value using child property"; non optemize approch
const newLi = document.createElement('li');
newLi.textContent = "Mojo-Pizza";
editing.replaceWith(newLi);


const third = document.querySelector("li:last-child");
third.outerHTML = '<li>Edited this using last-child property</li>';
applystyle();