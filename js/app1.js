$(function(){
    
    var header = $("#header"),
        introH =  $("#wrapper").innerHeight();
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);
    $(window).on("scroll",function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){ 
        
        if(scrollOffset>= introH){
            header.addClass("fixed")
        }else{
            header.removeClass("fixed")
        }
    }
    // smoth scroll обращение к data-scroll
    $("[data-scroll]").on("click",function(event){
        event.preventDefault(); 

        var $this =  $(this),
            blockid =$this.data('scroll'); 
            blockoffset =$(blockid).offset().top; 
        // добавление класса актив для ссылок
        $("#nav a").removeClass("active");
        // $("grid_text").removeClass("active");
        $this.addClass("active");
        // плавная анимация 
        $("html, body").animate({
            scrollTop:blockoffset
        },1000)
    });

    // burger
    $("#nav_burger").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        
    });

    // свое
    $("#nav").on("click", function(event){
        event.preventDefault();
        $("#nav_burger").removeClass("active");
        $("#nav").removeClass("active");
    });

    $("[data-collapse]").on("click", function(event){
        event.preventDefault();
        var $this =  $(this),
            blockid =$this.data('collapse'); 

        // $this.toggleClass("active");
        // не плавно
        
        $(blockid).slideToggle(500); 
        // в скобках скорость открытия в мл      
    });
    // слайдер, нужно подключать скрипты CDN и добавлять атрибуты по тиупу
    // data-slider
    $("[data-slider]").slick({
        isFinite:false,
        fade:false,
        slideToShow:1,
        slideToScroll:1,
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000

    });

    $("[data-slid]").slick({
        arrows:false,
        dots:true,
    })

    // $("#nav_burger").on("click", function(event){
    //     event.preventDefault();
    //     $(this).toggleClass("active");
    //     $("#nav").toggleClass("active");
        
    // });  
    new WOW().init();

});