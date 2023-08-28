const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')



jokeBtn.addEventListener('click', generateJoke)
jokeBtn.addEventListener('click',generateQuote)
generateJoke()
generateVerse()
generateQuote()
async function generateJoke() {
    const config =  {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
    
}

// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept' : 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config).then(response => response.json()).then(data => {
//         jokeEl.innerHTML = data.joke
//     })
// }

const fourGospels = ['matthew', 'john', 'mark', 'luke']

function generateVerse() {
    const config = {
        headers: {
            'Accept' : 'application/json'
        }
    }
    const fourGospels = ['matthew', 'john', 'mark', 'luke']
    var gospel = fourGospels[Math.floor(Math.random()*DataTransferItemList.length)];
    fetch('https://bible-api.com/luke+3:16', config).then(response => response.json()).then(data => {
        console.log(data.text)
    })
}

function generateQuote() {
    const config = {
        headers: {
            'X-Api-Key': '8+p00rIWsaKpLcIqNzk+ZA==UlqRUheWrCP70YmO'
        }
    }

    fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', config).then(response => response.json()).then(data => {
        console.log(data[0].quote)
        jokeEl.innerHTML = data[0].quote
    })

}

var category = 'happiness'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': '8+p00rIWsaKpLcIqNzk+ZA==UlqRUheWrCP70YmO'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

console.log(category)