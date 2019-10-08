$(function(){
    //открытие второго уровня меню
    $('.page').click(function(event){
        const selectedMenuItem = $(`#secondLevel-${event.target.id}`);
        selectedMenuItem.css('left','300px');
        $('.home-screen').click(function(event){
            if ((event.target.classList.contains('home-screen'))) {
                selectedMenuItem.css('left','0px');
            }
        });
        
        // открытие страницы
        if (event.target.id.includes('secondLevel-point')){
            // console.log($('#secondLevel-ocenka').attr('id'))
            $('.home-screen').empty();
            const header = $('<h2></h2>').text('тест');
            const text = $('<p></p>').text('some text');
            $('.home-screen').html(header);
            $('.home-screen').append(text);
            closeMenu();
        }
    });
    console.log($('#secondLevel-ocenka').attr("id").includes('secondLevel'))
    

    //кнопка 'написать нам'
    $('.write-to-us-button').click(function() {
        $('.write-to-us-screen').css({'top': '0px', 'backgroundColor': 'rgba(255,255,255,.84'});
        $('.write-to-us').css('right', '0px');
    });
    $('.write-to-us-screen').click((event)=> {
        if (event.target.classList.contains('write-to-us-screen') || event.target.classList.contains('close-icon')) {
            $('.write-to-us-screen').css('backgroundColor','rgba(255,255,255,.0');
            $('.write-to-us').css('right', '-480px');
            setTimeout(function () {
                $('.write-to-us-screen').css("top",'-100vh');
            }, 600)
        }
    });

    function closeMenu(){
        $('.navi').addClass('close-navi');
        $('.main-screen').css('width', 'calc(100vw - 40px)');
        $('.home-screen').css('width', 'calc(100vw - 40px)');
        $('.menu-button_close').css('zIndex', '1');
    }










});
