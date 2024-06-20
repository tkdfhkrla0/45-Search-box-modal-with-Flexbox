$(function(){
    $('.search .field input[type=search]').focus(function(){
        $(this).parent().next().css('display', 'block')
    }).blur(function(){
        $(this).parent().next().css('display', 'none')
    })
    $('.open-search').click(function(){
        $('.modal-search').addClass('active')
    })
    $('.close-search').click(function(){
        $('.modal-search').removeClass('active')
    })
})