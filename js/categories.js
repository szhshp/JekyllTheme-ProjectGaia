(function () {
  function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  }

  var id = "";
  var selected = ""
  if (getQueryString("cat") != null) {
    selected = 'c_' + getQueryString("cat");
    id = selected;
  }

  if (getQueryString("tag") != null) {
    selected = 't_' + getQueryString("tag");
    id = selected;
  }

  /*scroll to and open the panel*/
  $('a[aria-controls=' + selected + ']').click();
  $('html, body').animate({
    scrollTop: $('#' + id).offset().top
  }, 500);

})();

