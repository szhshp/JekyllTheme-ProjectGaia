jQuery(document).ready(function($) {
    $('#fullpage').fullpage({
        anchors:['about_me','about_music','about_design','about_game','ohfinalfantasy','about_writing','about_drawing','about_work','about_coding','about_thisintro'],
        navigationTooltips: ['about me', 'about music', 'about design','about game','oh final fantasy!','about writing','about drawing','about work','about coding','finale'],
        sectionsColor: ['#7B81FA','#425502','#0AC2D2','#2196F3','#60D7A9','#FDC162','#0AC2D2','#2196F3','#60D7A9','#425502'],
        navigation: true,
        navigationPosition: 'right',
        keyboardScrolling: false,
        recordHistory: false,
        scrollOverflow: true, /* for final slide*/
        scrollOverflowOptions: {
            click: true
        },
        normalScrollElements: '#aboutme',
        afterLoad: function(anchorLink, index){
            if (index==1) {
                /* if its first slide, hide loading icon*/
                $('.about_loadingicon').fadeOut(500);
            };
            /* show text */
            $($('.section')[index-1]).find('h1').fadeIn(500, function(){
                $($('.section')[index-1]).find('ul').fadeIn(500);
            });
        }
    });
});