$(function (){
    $('.kategoriMenu h5').on('click',function (){
        $('.kategoriMenu ul ul').stop().slideUp();
        $(this).next('ul').stop().slideToggle();
    });
  
  
});