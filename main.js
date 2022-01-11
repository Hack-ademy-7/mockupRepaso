
document.addEventListener('scroll', () => {
  let nav = document.querySelector('#nav')
  if (window.scrollY > 150) {
    nav.classList.add('bg-nav-custom')
  } else {
    nav.classList.remove('bg-nav-custom')
  }
})




