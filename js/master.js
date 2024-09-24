// console.log ($(window).width() <=480)

// let isMobile

// if($(window).width() <=480){
//     isMobile=true
// }else {
//     isMobile=false
// }

// console.log(isMobile);

// console.log(1 == '1') //true
// console.log(1 === '1') //false

const isMobile = $(window).width() <= 480
const $grid = $('#Grid')

function setGrid() {
    if (isMobile === true) {
        $grid.addClass('grid-2')
    } else {
        $grid.addClass('grid-3')
    }
}

function setInit(){
    setGrid()
}

setInit()
