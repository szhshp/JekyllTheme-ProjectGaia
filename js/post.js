(function () {

  /*HighLighter: we can't put these in onReady */
  var count = SyntaxHighlighter.findElements().length,
  now = 0;
  SyntaxHighlighter.complete = function(callback){
      (function wait() {
          setTimeout(function () {
              now = $('.syntaxhighlighter');
              if (now.length < count) {
                  wait();
              } else {
                  callback();
              }
          }, 200);
      })();
  };
  SyntaxHighlighter.all();
  /* Highlighter callback: run headerCollapsible()*/
  SyntaxHighlighter.complete(function(){
    $.headerCollapseRobot(
        arr_Id_CollapseEnds =  new Array("content-end"),                       
        arr_Collapsible_Tag = new Array("H1","H2","H3"),                       
        arr_ExcludeElemPrefix_InCollapsible  = new Array("comment-"),      
        arr_ExcludeElemPrefix_InCollapsing = new Array("sidebar-toc-Ik4D-")
        )
  });


  $(document).ready(function(){
      $('#toc').toggleClass('hidden-xl-down');
      $('#sidebar-wrapper nav a').click(function (e) {
          e.preventDefault()
          $(this).tab('show')
      })
  });
} ());