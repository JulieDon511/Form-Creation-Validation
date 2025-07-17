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

    }catch (error){
        console.log("there is an error :", error);
    }

    // clearing the loading user data

    dataContainer.innerHTML= '';
    // creating new list usiing the creat element and appending it to users
    const userList = document.createElement("ul");
    

}