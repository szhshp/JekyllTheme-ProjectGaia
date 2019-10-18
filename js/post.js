(function () {
  let config = {
    activeHighlight: true,
    activeHeaderCollapse: true,
    activeHeaderNumber: true,
    activeLightbox: true,
    activeReadingProgressBar: true,
  }

  function initHighlighter() {
    hljs.initHighlightingOnLoad()
  }

  function headerCollapse() {
    $.headerCollapseRobot('#page-content', ['h1', 'h2', 'h3'], ['blockquote']);
  }

  function headerNumber(postContentDivID) {
    var headerIndex = [0, 0, 0, 0, 0]; /*for h2~h6*/
    $('#' + postContentDivID).find('h2:not(blockquote h2),h3:not(blockquote h3),h4:not(blockquote h4),h5:not(blockquote h5),h6:not(blockquote h6)').each(function (index, el) {

      if ($(el).is('H2')) {
        $(el).text((++headerIndex[0]) + '. ' + $(el).text());
        headerIndex[1] = 0;
      } else if ($(el).is('H3')) {
        $(el).text(headerIndex[0] + '.' + (++headerIndex[1]) + '. ' + $(el).text());
        headerIndex[2] = 0;
      } else if ($(el).is('H4')) {
        $(el).text(headerIndex[0] + '.' + (headerIndex[1]) + '.' + (++headerIndex[2]) + '. ' + $(el).text());
        headerIndex[3] = 0;
      }
    });
  }

  function toc(tocDivID, contentID) {
    tocbot.init({
      tocSelector: '#' + tocDivID,
      contentSelector: '#' + contentID,
      headingSelector: 'h1, h2, h3',
      smoothScroll: true,
      smoothScrollDuration: 420
    });
  }

  /* init pic lightbox*/
  function lightbox() {
    $('#page-content img').each(function (index, val) {

      var link = $('<a></a>').attr({
        'href': $(val).attr('src'),
        'data-lightbox': "image"
      });

      /* if image has title */
      if ($(val).siblings('em') != null) {
        link.data('title', $(val).next('em').html());
      }

      $(val).parent().prepend(link);
      link.append($(val)); /* move img inside link */

      $(val).addClass('img-fluid'); /* add BS4 image fluid class */
    });
  }

  function initReadingProgressBar() {
    $(window).bind('scroll', function () {
      var percent = $(window).scrollTop() / ($('body').height() - $(window).height())
      $('div#reading-progress').find('.progress-bar').css('width', percent * 100 + '%')
    });
  }

  $(document).ready(function () {
    $('#toc').toggleClass('d-none');
    $('#sidebar-wrapper nav a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
    if(config.activeHeaderNumber) headerNumber('page-content');
    if (config.activeLightbox) lightbox();

    if(config.activeHighlight) initHighlighter();
    if(config.activeHeaderCollapse) headerCollapse();

    $('#toc').trigger('click');
    toc('sidebar-toc-content', 'page-content-wrapper');

    if (config.activeReadingProgressBar) initReadingProgressBar();
  });
}());