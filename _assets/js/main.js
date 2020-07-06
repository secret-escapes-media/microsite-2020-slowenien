// general js for the project that wouldn't be a reuseable component

$('.js-image-attribution').each(function() {
  var $this = $(this);
  var contents = $this.html();
  $this.css('cursor', 'pointer');
  $this.html("<img style=\"width: 15px; height: 15px;\" src=\"_assets/img/icons/info.svg\" alt=\"picture information\">");
  $this.on('click',function(){
    $this.html(contents);
    $this.css('cursor', 'auto');
  });
});



var coll = document.getElementsByClassName("bv-collapsible");

var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("bv-active");
    var content = this.previousElementSibling;
    //alert(content);
    if (content.style.maxHeight){
      content.style.maxHeight = null;

    } else {
      content.style.maxHeight = "500px";
      content.style.overflow = "auto";
    }
  });
}
