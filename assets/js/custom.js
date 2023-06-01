
window.onscroll = function() {myFunction()};


var header = document.getElementById("header");


var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}





    $('.inlinebtn .btn').on('click', function() {
        $(this).addClass('classOne');
        $(this).siblings().removeClass('classOne');
    });

    $('.approached2').hide();
    $('.approached3').hide();
    $('.approached4').hide();
    $('.approached5').hide();
    $('.approached6').hide();

    $('.class1').on('click', function() {
        $('.approached').show();
        $('.approached2').hide();
        $('.approached3').hide();
        $('.approached4').hide();
        $('.approached5').hide();
        $('.approached6').hide();

    });
    $('.class2').on('click', function() {
        $('.approached').hide();
        $('.approached2').show();
        $('.approached3').hide();
        $('.approached4').hide();
        $('.approached5').hide();
        $('.approached6').hide();

    });
    $('.class3').on('click', function() {
        $('.approached').hide();
        $('.approached2').hide();
        $('.approached3').show();
        $('.approached4').hide();
        $('.approached5').hide();
        $('.approached6').hide();

    });
    $('.class4').on('click', function() {
        $('.approached').hide();
        $('.approached2').hide();
        $('.approached3').hide();
        $('.approached4').show();
        $('.approached5').hide();
        $('.approached6').hide();

    });
    $('.class5').on('click', function() {
        $('.approached').hide();
        $('.approached2').hide();
        $('.approached3').hide();
        $('.approached4').hide();
        $('.approached5').show();
        $('.approached6').hide();

    });
    $('.class6').on('click', function() {
        $('.approached').hide();
        $('.approached2').hide();
        $('.approached3').hide();
        $('.approached4').hide();
        $('.approached5').hide();
        $('.approached6').show();

    });




    