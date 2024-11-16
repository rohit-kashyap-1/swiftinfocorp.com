document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript file is working!');
  });
$(".dropdown").mouseenter(function(){
  $(this).parentsUntil("body").addClass("active")
})
$(".dropdown").mouseleave(function(){
  $(this).parentsUntil("body").removeClass("active")
})
$(".indus h4").hover(function(){
  let type = $(this).attr("data-id")
  $(`.drop-images`).removeClass('active')
  $(`[data-type='${type}']`).addClass('active')
})