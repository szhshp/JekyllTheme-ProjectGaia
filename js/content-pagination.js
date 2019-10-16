(function () {
  function pagination(){
    $("div.pagination").jPages({
      containerID : "archivelist",
      previous: "Preivous",
      next: "Next",
      perPage: 8
    });
  }
  function initSearchBar(){
    $('input#post-search').on('change', function(event) {
      var keyword = $('input#post-search').val();
      if (keyword.length==0) {
        $.when(
          $('ul#archivelist li').removeClass('jp-hidden').show(400)
        ).done(function() {
          pagination();
        });
      }else{
        $.when(
          $('ul#archivelist li').each(function(index, el) {
            var postTitle = $(el).find('a.post-link').text().toLowerCase();
            if (postTitle.indexOf(keyword.toLowerCase())==-1){
              $(el).hide(400);
            } 
            else $(el).removeClass('jp-hidden').show(400)
          })
          ).done(function() {
            pagination();
          });
       }
    });
  }
  pagination();
  initSearchBar();
} ());