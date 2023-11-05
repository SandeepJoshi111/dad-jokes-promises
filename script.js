// Promises 
// -2 condition -> either success or fail
// -uses fetch()

// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateJokes =() =>{

    //api is shown in html format so to convert it into json we keep header
    const setHeader={
        headers:{
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com/',setHeader)
    .then((res)=> res.json())
    .then((data)=>{
        jokes.innerHTML = data.joke;
    }).catch((err)=>{
        console.log(err);
    })
}


jokeBtn.addEventListener('click',generateJokes);
generateJokes();