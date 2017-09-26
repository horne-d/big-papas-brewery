// $('.accordion').on('click', '.accordion-control', function(e){ // When clicked
//   e.preventDefault();                    // Prevent default action of button
//   $(this)                                // Get the element the user clicked on
//     .next('.accordion-panel')            // Select following panel 
//     .not(':animated')                    // If it is not currently animating
//     .slideToggle();                      // Use slide toggle to show or hide it
// });

$(document).ready(function () {
            $('.collapse').on('shown.bs.collapse', function () {
                $(this).parent().find('.fa-caret-right')
                                .removeClass('fa-caret-right')
                                .addClass('fa-caret-down');
            }).on('hidden.bs.collapse', function () {
                $(this).parent().find(".fa-caret-down")
                                .removeClass("fa-caret-right")
                                .addClass("fa-caret-right");
            });
        });

function submitForm() {
   var frm = document.getElementsByName('contact')[0];
   frm.submit();
   frm.reset();
   return false;
}