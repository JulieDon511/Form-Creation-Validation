async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById("api-data");

    // fetching data using the try and catch function
    try{
        const response = await fetch(apiUrl);
        if (!response.ok){
            throw new Error("The web browser is not responding");
        }
        const users = await response.json();
        console.log("It was a success");
        // clearing the loading user data

        dataContainer.innerHTML= '';
        // creating new list usiing the creat element and appending it to users
        const userList = document.createElement("ul");
        users.array.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent= user.name;
        userList.appendChild(listItem);
    });

    // APPENDING TO THE PARENT NODE
    dataContainer.appendChild(userList);

    }catch (error){
        dataContainer.innerHTML='';
        dataContainer.textContent="Failed to load user data.";
        console.log("there is an error :", error);

    } 
}
document.addEventListener("DOMContentLoaded" , ()=>{
    fetchUserData();
});