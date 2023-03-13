$(function ($) {
  $('.product-single__description h4').each(function(){ 
    var $set = $(this).nextUntil("h4");
    $set.wrapAll('<div class="panel" />');
  });

  $(".product-single__description h4").addClass('accordion');
  $('.panel').hide();

  $(".rte.product-single__description > .accordion:nth-child(1)").addClass('open').next('.panel').show();  
  $('.product-single__description .accordion').on('click', function(){
    // $('.panel').hide();
    //$('.accordion').removeClass('active');
    $(this).toggleClass('open');
    var isVisible = $(this).next().is(':visible');
    console.log(isVisible);
    if(isVisible == true){
      $(this).next().hide(300);
    }else{
      $(this).next().show(300);
    }
  });
});



$(function(){
    $('#create_customer').submit(function(e) {     
      if ( $('input[name="customer[password]"]').val() != $('input[name="customer[password_confirmation]"]').val()) {
        e.preventDefault();
        alert('Passwords do not match.');
      }
    });
  });



/*start slick slider*/
jQuery(document).ready(function(){
jQuery('.hvac_coll_list .slick-carousel').slick({
  infinite: true,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1, 
  arrows: true, 
  dots: false,
  responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
        }
      }	
    ]
});



//Get currnet month

var sk_today = new Date();
var month = sk_today.toLocaleString('default', { month: 'long' });

$(".current_month").html(month + " ");
  

jQuery('.slick_menus').slicknav({
  allowParentLinks: false,
  prependTo: '#sk_slick_menu',
  label: ''
});


jQuery('.slick_menus_tab').slicknav({
  allowParentLinks: false,
  prependTo: '#sk_slick_menu_tab',
  label: ''
});

jQuery(".menu_sl_close_tab").on("click", function() {
  jQuery('.slick_menus_tab').slicknav('close');  
});
  
  
jQuery(".menu_sl_close").on("click", function() {
  jQuery('.slick_menus').slicknav('close');  
});

  jQuery(".sticky_icon, .close_sticky_form, .close_form, .open_stky_form").on("click", function() {
    jQuery(".stickr_form").toggleClass("active");
  });


$(window).scroll(function() {
    
    const footerToTop = $('.ft_copyright').position().top;
    const scrollTop = $(document).scrollTop() + $(window).height();

    const difference = scrollTop - footerToTop;
    const bottomValue = scrollTop > (footerToTop + 60) ? difference : 60;

    //console.log(difference)

    $('.sticky_form_wrap').css('bottom', bottomValue + "px");
    
});


  

});

/*end slick slider*/