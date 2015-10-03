$(function(){
    var $toggleMenu = $('.toggle-menu');
    var $menu = $('.ed-menu');
    $toggleMenu.on('click',function(){
        $menu.toggleClass('mostrar');
    });
});
