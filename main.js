let random_rgb = () => {
    let o = Math.round, r = Math.random, s = 255
    return `rgb(${o(r()*s)},${o(r()*s)},${o(r()*s)})`
}

console.log(random_rgb())
const button = document.querySelector('.btn-changer')

const Bg_changer = button.addEventListener("click", (e) => {

    document.body.style.backgroundColor = random_rgb()
})
