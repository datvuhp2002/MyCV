var state = [
    card1 = {
        id: 1,
        img:`assets/img/introduce-background.png`,
        Heading: `Project title go here`,
        content: `sit amet consectetur adipisicing elit. Iste sunt, atque fuga pariatur consequatur magni dolorum blanditiis, fugiat temporibus sed id incidunt iusto quo tempora numquam officiis possimus, voluptates magnam.`,
        tech:`html, css, javascript, bootstrap`,
        link: `123`
    },
    card2 = {
        id: 2,
        img:`assets/img/introduce-background.png`,
        Heading: `Project title go here`,
        content: `sit amet consectetur adipisicing elit. Iste sunt, atque fuga pariatur consequatur magni dolorum blanditiis, fugiat temporibus sed id incidunt iusto quo tempora numquam officiis possimus, voluptates magnam.`,
        tech:`html, css, javascript, bootstrap`,

        link: `123`
    },
    card3 = {
        id: 3,
        img:`assets/img/introduce-background.png`,
        Heading: `Project title go here`,
        content: `sit amet consectetur adipisicing elit. Iste sunt, atque fuga pariatur consequatur magni dolorum blanditiis, fugiat temporibus sed id incidunt iusto quo tempora numquam officiis possimus, voluptates magnam.`,
        tech:`html, css, javascript, bootstrap`,
        link: `123`
    },
    
]
var cards = document.getElementById('project__content-cards');
for(var i = 0; i <= state.length;i++){
    let card = document.createElement('div')
    card.className = 'card mb-5'
    card.innerHTML = `
            <img src="${state[i]['img']}"  class="card-img-top" alt="...">
            <div class="card-body">
              <h1 class="card-title text-white">${state[i].Heading}</h1>
              <p class="card-text">${state[i].content}</p>
              <p class="card-text">${state[i].tech}</p>
              <div class = "card-linkrow justify-content-between row">
                <a href="#" class="col-5 text-decoration-none ">
                    <i class="fa-solid fa-link"></i>
                    ${state[i]['link']}
                </a>
                <a href="#" class="col-5 text-decoration-none ">
                    <i class="fa-brands fa-github"></i>
                    view code
                </a>
              </div>
            </div>
    `
    cards.appendChild(card)

};

// Hiệu ứng typing 
var i = 0;
var txt = 'lập trình viên front-end';
var speed = 50;
var strings = document.getElementById("autotype")
var auto_typing = document.createElement("h1")
strings.appendChild(auto_typing);
function typeWriter() {
    if (i < txt.length) {
      auto_typing.innerText += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
typeWriter();

// var typed = new Typed('#auto-type', {
//     strings: ['lập trình viên front-end'],
// typeSpeed: 150,
// backSpeed: 150,
// loop: true
// });