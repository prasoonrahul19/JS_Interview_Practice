function SetUsername(username){
    this.username = username;

    console.log("Username set to: " + this.username);
}
// ############## method1 : without call method ##############
// function User(name, email , password){
//     SetUsername(name);
//     this.email = email;
//     this.password = password;   
// }
// ############### method 2 : with call method ##############

// function User(name, email , password){
//     SetUsername.call(user1, name);SetUsername.call(user1, name);
//     this.email = email;
//     this.password = password;
// }

// ###################  Correct method : with call method and creating user1 object before calling SetUsername function ##############

function User(name, email , password){
    SetUsername.call(this, name);
    this.email = email;
    this.password = password;
}


const user1 = new User("Ron","ron@xyz.com" , "roNTHEBOMB");
console.log(user1);  //why is username not set in user1 object?
//because SetUsername is not being called with the context of user1, 
// it is being called with the context of the global object (window in browsers).
// To fix this, we can use the call method to set the context of SetUsername to user1.


// method 2 : with just call method explanation:
// why is username not set in user1 object even after using call method?
//  asan bhasa me samjhaun toh, jab hum call method ka use karte hain, toh hume pehle argument me us object ko dena hota hai jiske 
// context me function ko execute karna hai. Is case me, humne call method me user1 ko pass kiya hai, lekin user1 abhi tak create nahi
//  hua hai jab SetUsername function call ho raha hai. Isliye, SetUsername function global object ke context me execute ho raha hai, 
// aur username property global object par set ho rahi hai, na ki user1 object par. call method ka use karne ke liye, hume pehle user1 
// object ko create karna hoga, aur phir call method ka use karke SetUsername function ko user1 ke context me execute karna hoga.iske liye hum
//  user1 object ko pehle create karenge, aur phir call method ka use karke SetUsername function ko user1 ke context me execute karenge.wo ham asa 
// kar sakte hain: setUsername.call(this, name); isse SetUsername function user1 ke context me execute hoga, aur username property user1 object par
//  set ho jayegi. isko english me samjhaun toh, when we use the call method, we need to pass the object as the first argument that we want to set 
// as the context of the function. In this case, we passed user1 in the call method, but user1 is not yet created when the SetUsername function is
//  being called. Therefore, the SetUsername function is being executed in the context of the global object, and the username property is being set on the global object instead of the user1 object. To use the call method correctly, we need to first create the user1 object and then use the call method to execute the SetUsername function in the context of user1. We can do this by using setUsername.call(this, name); this will execute the SetUsername function in the context of user1, and the username property will be set on the user1 object.