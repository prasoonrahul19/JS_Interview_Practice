const Promiseone = new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("Promiseone is resolved");
        resolve();
    },2000);
});


Promiseone.then(function(){
    console.log("Promiseone is consumed");  
});


const Promisetwo = new Promise((Resolve,reject)=>{
    setTimeout(function(){
        console.log("Promisetwo is resolved");
        Resolve();
    },3000);
}).then(function(){
    console.log("Promisetwo is consumed");
});
   
