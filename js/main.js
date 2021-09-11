$(function () {
  /* Filter 
  ===========================*/
  const filter = $("[data-filter]");

  filter.on("click", function (event) {
    event.preventDefault();

    let cat = $(this).data("filter");

    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function () {
        let workCat = $(this).data("cat");

        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });

  /* Modal
  ===========================*/

  const modalCall = $("[data-modal]");
  const mdl2 = $("[data-modal2]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data("modal");

    $(modalId).addClass("show");
    $("body").addClass("no-scroll");

    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "scale(1)",
      });
    }, 200);

    $("[data-slider='slick']").slick("setPosition");
  });

  modalClose.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents(".modal");

    modalParent.find(".modal__dialog").css({
      transform: "scale(0)",
    });
    setTimeout(function () {
      modalParent.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal").on("click", function (event) {
    let $this = $(this);
    $this.find(".modal__dialog").css({
      transform: "scale(0)",
    });
    setTimeout(function () {
      $this.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });

  mdl2.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalId2 = $this.data("modal2");

    $(modalId2).addClass("show");
    $("body").addClass("no-scroll");

    setTimeout(function () {
      $(modalId2).find(".modal__dialog").css({
        transform: "scale(1)",
      });
    }, 200);

    modalClose.on("click", function (event) {
      setTimeout(function () {
        $("body").addClass("no-scroll");
      }, 200);
    });

    $(".modal2").on("click", function (event) {
      setTimeout(function () {
        $("body").addClass("no-scroll");
      }, 200);
    });
  });

  /* Slider: https://kenwheeler.github.io/slick/
  ===========================*/

  $("[data-slider='slick']").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });

  $(".slickPrev").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents(".modal").find("[data-slider='slick']");

    currentSlider.slick("slickPrev");
  });

  $(".slickNext").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents(".modal").find("[data-slider='slick']");

    currentSlider.slick("slickNext");
  });

  $("[data-reviewsSlider='reviewsSlider']").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: false,
  });

  $(".reviews-slider__arrow_prev").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this)
      .parents(".reviews-slider")
      .find("[data-reviewsSlider='reviewsSlider']");

    currentSlider.slick("slickPrev");
  });

  $(".reviews-slider__arrow_next").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this)
      .parents(".reviews-slider")
      .find("[data-reviewsSlider='reviewsSlider']");

    currentSlider.slick("slickNext");
  });

  /* Mobile nav
  ================================= */
  const navToggle = $("#navToggle");
  const nav = $("#nav");
  var header = $("#header");

  navToggle.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
    header.toggleClass("bg-header");
    $(this).toggleClass("show");
  });

  /* Scroll down
  ================================= */
  // document.getElementById("scrollButton").addEventListener("click", scrollToElement);
  // function scrollToElement(e) {
  //   element = document.getElementById("works");
  //   element.scrollIntoView(true);
  // }

  var scrollButton = $("#scrollButton");
  scrollButton.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 757,
      },
      1000
    );
  });

  // var header = document.getElementById("header");
  // window.addEventListener("scroll", () => {
  //   if ($(window).scrollTop() > 150) {
  //     header.addClass = "bg-header";
  //   }
  // });

  var $header = $(".header");
  var scroll = 750;
  var active = "bg-header";
  $(window).scroll(function () {
    if ($(window).scrollTop() > scroll) {
      $header.addClass(active);
    } else {
      $header.removeClass(active);
    }
  });
});

const panelHeading = document.querySelectorAll(".panel-heading");
const panelCollapse = document.querySelectorAll(".panel-collapse");
// const panelTitle = document.querySelectorAll(".panel-title");

for (let i = 0; i < panelHeading.length; i++) {
  panelHeading[i].addEventListener("click", () => {
    panelHeading[i].classList.toggle("in");
    panelCollapse[i].classList.toggle("in");
  });
}

//<slider>===================================================================================================================================

$(document).ready(function () {
  var btn = $(".to-top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 700) {
      $(btn).addClass("show");
    } else {
      $(btn).removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});
