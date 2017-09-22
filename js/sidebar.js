(function () {
    $("a#menu-toggle").on('click', sidebarToggle);
    /*$(document).ready(function(){
        sidebarToggle();
    })*/

    function sidebarToggle(){
        $("div#wrapper").toggleClass("toggled");
        $('a#menu-toggle').find('i.fa').toggleClass('fa-bars').toggleClass('fa-times');
        $('a#menu-toggle').toggleClass('toggled');
    }
} ());