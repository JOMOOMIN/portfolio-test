$(function(){

    $(window).on('scroll',function(){
        let num = $(window).scrollTop()

        let header = $('header')

        if(num >= 200){
            header.removeClass('up')
            header.addClass('down')
        }else{
            header.removeClass('down')
            header.addClass('up')
        }
    })

    $('.btn_menu').on('click',function(){
        $(this).toggleClass('on')
    })

    

})