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

  function headerNumber(postContentDivID) {
    var headerIndex = [0,0];  /*for h2,h3*/
    $('#'+postContentDivID).find('h2:not(blockquote h2),h3:not(blockquote h3)').each(function(index, el) {

      if ($(el).is('H2')) {
        $(el).text( (++headerIndex[0])+'. '+$(el).text());
        headerIndex[1]=0;
      }else if ($(el).is('H3')) {
        $(el).text( headerIndex[0]+'.'+ (++headerIndex[1])+'. '+$(el).text());
      }
    });
  }

  function toc(tocDivID){
    var headerIndex = new Array(0,0,0); 
    $('#'+tocDivID).toc({
          'selectors': 'h1:not(blockquote h1),h2:not(blockquote h2),h3:not(blockquote h3)', //elements to use as headings
          'prefix': 'toc', //prefix for anchor tags and class names
          'headerText': function(i, heading, $heading) { //custom function building the header-item text
            if ($heading.is("h2")){
              headerIndex[1]=0;
              return (++headerIndex[0])+'. '+$heading.text();          
            }else if ($heading.is("h3")) {
              return (headerIndex[0])+'.'+(++headerIndex[1])+'. '+$heading.text();
            }
            return  $heading.text();
          }
      });
  }


  $(document).ready(function(){
      $('#toc').toggleClass('hidden-xl-down');
      $('#sidebar-wrapper nav a').click(function (e) {
          e.preventDefault()
          $(this).tab('show')
      })
      toc('sidebar-toc-content');
      headerNumber('post-content');
      $('#toc').trigger('click');
  });
} ());