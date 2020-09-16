
/* controller = endroit où l'on va rajouter des scènes qui servent à animer nos éléments */
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

    triggerElement: '.box1'

})

/* changer la class de box1 au scrolling */
.setClassToggle('.box1', 'fade-in')
.addIndicators({
    name: 'INDICATIONS',
    indent: 200,
    colorStart: '#fff'
})
.addTo(controller);

