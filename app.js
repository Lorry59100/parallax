
/* controller = endroit où l'on va rajouter des scènes qui servent à animer nos éléments */
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

    triggerElement: '.box1',
    reverse : false

})

/* changer la class de box1 au scrolling */
.setClassToggle('.box1', 'fade-in')
.addIndicators({
    name: 'INDICATIONS',
    indent: 200,
    colorStart: '#fff'
})
.addTo(controller);

var scene2 = new ScrollMagic.Scene({

    triggerElement: '.box2',
    reverse : false

})

/* changer la class de box2 au scrolling */
.setClassToggle('.box2', 'fade-in')
.addIndicators({
    name: 'INDICATIONS',
    indent: 200,
    colorStart: '#fff'
})
.addTo(controller);

var scene3 = new ScrollMagic.Scene({

    triggerElement: '.box3',
    reverse : false

})

/* changer la class de box3 au scrolling */
.setClassToggle('.box3', 'fade-in')
.addIndicators({
    name: 'INDICATIONS',
    indent: 200,
    colorStart: '#fff'
})
.addTo(controller);

