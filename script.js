// // Api -

// let userData = async ()=>{
//     let response = await fetch('https://randomuser.me/api/')
//     console.log(response);
//     let data = await response.json()
//     console.log(data);
// }
// userData();



// Step - 3
// -> select all things--

let displayUser = (user)=>{
    document.querySelector('#user-image').src = user.picture.large;
    // name - name hum [,] isliye write kiye kyuki ham apne naam , nhi kar sakte hai. example - harsh,sahu ,durg 😁.
    document.querySelector('#user-name').innerText = `Name: ${user.name.title} ${user.name.first} ${user.name.last}`
    document.querySelector('#user-email').innerText = `Email: ${user.email}`
    // location - isme [,] dena jaruri hai.
    document.querySelector('#user-location').innerText = `Location: ${user.location.city}, ${user.location.state}, ${user.location.country}`
}

// Step - 1
let URL = "https://randomuser.me/api/";

let fetchUser = async () => {
  try {
    let response = await fetch(URL);
    console.log(response);

// Step - 2

    // ---- jo bhi data hai vo pure console object ke form me aarha hai.use  json form me lane ke liye kiya.json method ko add kiya.matlab data ko pahle se aur acha clear lane ke liye. kiya.-

    let data = await response.json();
    console.log(data);

  
  // --- hamne results ko zero isliye kiya kyuki sabhi data 0 se other number index se aarhe the. vo clear data rhe karke hamne results zero kiya.

    let userInfo = data.results[0]
    console.log(userInfo);  
   
// Step - 3

    displayUser(userInfo);  

// Step - 1
  } catch (error) {
    console.log(error);
  }
};

// Step - 1

// fetchUser();

let btn = document.querySelector('#new-user')

btn.addEventListener('click',fetchUser)

// Step - 3

// -- window.onload = fetchUser; ka use reason...ki hum jab code ko run ko karte hai. to usme kuch output random user show nhi krta button dabane par hi show karta hai isliye hum chahte hai ki code run ke baad direct output dikhana start ho jaye. example - random user start ho jaye.

window.onload = fetchUser;