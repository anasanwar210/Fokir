// Navigation Variable
  let helloOffset     = $("#hello").offset().top,
      servicesOffset  = $("#services").offset().top,
      portfolioOffset = $("#portfolio").offset().top,
      feedbackOffset  = $("#feedback").offset().top,
      blogOffset      = $("#blog").offset().top,
      contactOffset   = $("#contact").offset().top,
      headDescOffset  = $(".head-desc").offset().top,
      navHeight       = $(".up-nav").outerHeight();

/* Start Count */

  $(function(){
    $(".count").countTo("stop");
  });

/* End Count */

// Get Counter Offset
  let portfolioIMGOffset = $(".child").offset().top,
      numOfCountOffset   = $(".count").offset().top;

  $(window).scroll(function(){
    let secWscroll = $(window).scrollTop();

    if(secWscroll >= portfolioOffset + 290){
      $(function(){
        $(".count").countTo("start");
      })
    }else{
      $(function(){
        $(".count").countTo("stop");
      })
    }
  });

  // console.log(numOfCountOffset - portfolioOffset + 200);
  // console.log(secWscroll);

/* Start Changing Navigation */

  $(window).scroll(function(){
    let wScroll = $(window).scrollTop();

    if(wScroll >= headDescOffset){
      $(".up-nav").css("background-color" , "#000 ");
    }else{
      $(".up-nav").css("background-color" , "#0004")
    }
  });

  $(".home, .about, .services, .portfolio, .testimonial, .blog").click(
    function () {
      $(".home").attr("href", "#header");
      $(".about").attr("href", "#hello");
      $(".services").attr("href", "#services");
      $(".portfolio").attr("href", "#portfolio");
      $(".testimonial").attr("href", "#feedback");
      $(".blog").attr("href", "#blog");
      $(".contact").attr("href", "#contact");
    }
  );

    $(".home").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  $(".about").click(function () {
    $("html,body").animate({ scrollTop: helloOffset - navHeight }, 1000);
  });

  $(".services").click(function () {
    $("html,body").animate({ scrollTop: servicesOffset - navHeight }, 1000);
  });

  $(".portfolio").click(function () {
    $("html,body").animate({ scrollTop: portfolioOffset - navHeight }, 1000);
  });

  $(".testimonial").click(function () {
    $("html,body").animate({ scrollTop: feedbackOffset - navHeight }, 1000);
  });

  $(".blog").click(function () {
    $("html,body").animate({ scrollTop: blogOffset - navHeight }, 1000);
  });

  $(".contact").click(function () {
    $("html,body").animate({ scrollTop: contactOffset - navHeight }, 1000);
  });

/* End Changing Navigation */

/* Start Type */

  let typed = new Typed(".type",{
      strings:[
        "Designer",
        "Developer",
        "Front-End"
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
  })

/* Start Type */