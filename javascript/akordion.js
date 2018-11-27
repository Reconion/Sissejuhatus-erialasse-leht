$(document).ready(function() {
            $(".title").click(function() {
                console.log('click');
                $(this).nextAll('p').slideToggle();
            });
        });