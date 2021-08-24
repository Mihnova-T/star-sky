document.body.style.background = '#005'
document.body.addEventListener('star', function(event){
    var x = Math.random() * window.innerWidth
    var y = Math.random() * window.innerHeight
    var size = 14 + Math.round(Math.random() * 10)
    var elem = document.body.appendChild(document.createElement('div'))
    elem.innerText = '.'
    elem.style = `
      position: absolute;
      top: ${y}px;
      left: ${x}px;
      color: #fff;
      font-size: ${size}px;
    `
})

var counter = 10000
function fireStar() {
    setTimeout(() => {
    document.body.dispatchEvent(new Event('star'))
}, Math.random() * 1500 * counter)
    counter-- > 0 && fireStar()
}
fireStar()
