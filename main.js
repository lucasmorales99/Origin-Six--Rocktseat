//Bre e fecha o menu quando clicar no icone: hamburgue e x
//queryselector ele pega a semelhança de header e nav
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show') //ele está pegando o nav e olhando a lista de classes se tiver o show vc tira , se não tiver vc coloca
    //toggle literalmente add na class um show
  })
}

//QUANDO CLICAR EM QUALQUER ITEM DO MENU, ESCONDER MENU
const link = document.querySelectorAll('nav ul li a')

for (const links of link) {
  links.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//MUDAR O HEADER DA PAGINA QUANDO ROLAR O SCROLL(ADICIONANDO UMA SOMBRA)
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (this.window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
})

/*  Testimonioals carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/*ScrollReveal: Mostra elementos quando der scroll na página*/
const scrollRevel = scrollRevel({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollRevel.reveal(
  `#home .image,#home .text,
  #about .image, #about .text,
  #services header,#services .card,
  #testimonial header, #testimonials .testimonials,
  #contact .text, #contact .links
  `,
  { interval: 100 }
)

/*Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})
