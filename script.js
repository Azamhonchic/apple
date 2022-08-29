// Apple site
let screen2 = document.querySelector('.screen2');
let box = document.querySelector('.box');
let box1 = document.querySelector('.box1');
let iphone = document.querySelector('.iphone')

let box_color = document.querySelector('.box_color')
let box_color1 = document.querySelector('.box_color1')
let box_color2 = document.querySelector('.box_color2')
let box_color3 = document.querySelector('.box_color3')
let box_color4 = document.querySelector('.box_color4')

box.onclick = () => {
    iphone.style.width = "86%"
    iphone.style.height = "640px"
    box.style.transition = ".4s"
}
box_color.onclick = () => {
    iphone.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-green-select?wid=470&hei=556&fmt=png-alpha&.v=1644969385505"
}
box_color1.onclick = () => {
    iphone.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-silver-select?wid=470&hei=556&fmt=png-alpha&.v=1645552345849"
}
box_color2.onclick = () => {
    iphone.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-gold-select?wid=470&hei=556&fmt=png-alpha&.v=1645552345862"
}
box_color3.onclick = () => {
    iphone.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1645552346276"
}
box_color4.onclick = () => {
    iphone.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=png-alpha&.v=1645552346275"
}