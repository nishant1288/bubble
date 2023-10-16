let bubbleDiv = document.getElementById('bubble-div');
let cardDiv = document.getElementById('card-div');
let closeBtn = document.getElementById('close-btn');

bubbleDiv.addEventListener('click', function()
{
    cardDiv.style.display = 'inline-block';
    bubbleDiv.style.animationPlayState = "paused"
})

closeBtn.addEventListener('click', function() {
    bubbleDiv.style.display = 'none';
})

function getRandomInt() {
    let randomNum = Math.floor(Math.random() * 200);
    let x = `translateX(${randomNum})`
    bubbleDiv.style.transform =  `translateX(${randomNum}px)`;
    console.log(x)
  }

// setInterval(() => {
//     getRandomInt()
//     console.log('hello')
// }, 10000 )


  