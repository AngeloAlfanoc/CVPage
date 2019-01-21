$(window).ready(function () {
  $('.preloader').hide();
  $('.bodyload').removeClass();
});



$(function () {

//DOM Containers
$mLess = $('#moreLess')
$list = $('#listTraject')
$resum = $('.resume-body')
$edu = $('#education')
$acc = $('.accordion');
$portSect = $('#portfolioSection')
$portLink = $('#portfolioLink')
$sliding = $('.slides')
$modalContact = $('#contact-area')
$contact = $('#contact')
$closeButton = $('#closeButton')

$modalContact.toggle()
$contact.click(function (e) { 
  $modalContact.fadeToggle()
  e.preventDefault();
  
});
$closeButton.click(function (e) { 
  $modalContact.fadeToggle()
  e.preventDefault();
  
});


  //Als er geklikt wordt op educatie of meer dan opent er zich een submenu

  function lijstSubMenuItem() {

    if ($mLess.text() == "meer") {
      $mLess.text("minder")
    } else {
      $mLess.text("meer");

    }
    $list.toggleClass('hidden')
    $resum.get(0).scrollIntoView('slow');
    event.preventDefault()
  }
  //Click event met verwijzing naar submenu items
  $mLess.click(lijstSubMenuItem);
  $edu.click(lijstSubMenuItem);


  //function als menu item active is dan kan div open gaan.
  let subMenuList = $('.submenuList li')
  subMenuList.click(function () {
    itemActiveMenu()
  });

  function itemActiveMenu() {
    $(this).toggleClass('active').siblings().removeClass('active')
    $(this).children().toggleClass('hidden')
  }




  //Vanilla 
  let i;
  for (i = 0; i < $acc.length; i++) {

    $acc[i].addEventListener("click", function () {
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
});