$(function (){
    $('.sag .h6').on('click',function (){
        $('.sag ul ul').stop().slideUp();
        $(this).next('ul').stop().slideToggle();
    });
    
function formAlert (formID,txt) {
    $(formID).html('<div class="col p-2 alert-primary rounded">'+txt+'</div>');
};       
    
$('#loginForm form').on('submit',function (e) {
    e.preventDefault();
    var data=$('#loginForm form').serialize();
    $.ajax({
            url: 'ajx/login/oturumAc.php',type: 'POST',data: data,
            success: function (data) {
                if(data==1){
                    window.location.href='./';
                }else{
                    formAlert('#loginForm .modal-header',data);
                }
            } 
    });
    });    
  
  
  
});