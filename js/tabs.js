// Tab Panels
$(document).ready(function() {
    // grab all container panel DIVs
    var tabContainers = $('div.tabs > div');
    // hide them all, then show the first one
    tabContainers.hide().filter(':first').show();
    // set the first tab to class="selected"
    $('div.tabs ul.tabNavigation a:first').addClass('selected');
    // add onclick handlers to all tabs

    $('div.tabs ul.tabNavigation a').click(function() {
        // hide all tabContainers
        tabContainers.hide();
        // show only the tabContainer with the ID that matches the href for the A that was clicked
        //alert(this.hash);
        tabContainers.filter(this.hash).show();
        // remove class="selected" from all tabs
        $('div.tabs ul.tabNavigation a').removeClass('selected');
        // set class="selected" on the tab that was just clicked
        $(this).addClass('selected');


        //animate selected tab by changing font size and opacity
        $(".selected").animate({ 'font-size': '2em', opacity: '0.4' }, "slow");
        $(".selected").animate({ 'font-size': '1em', opacity: 'none' }, "slow");
        //    $(".selected").animate({color: 'blue'}, 500);
        // $(".selected").animate({top: '-250px'}, 1000, "easeOutElastic");
        // $(".selected").animate({top: '-250px'}, 1000, "easeOutElastic");

        // stop following links
        return false;



    });





});