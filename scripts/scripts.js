$( document ).ready(function() {

    // Sicky in the middle of the screen
    $('.sticky').innerHeight();
    $('.sticky').css('margin-top', -parseInt( $('.sticky').innerHeight()) / 2 + 'px');

    var isComplete = true;

    $( ".item-box" ).each(function( index ) {

        // Remove the info by default
        $(this).css('margin-right', -$( this ).find('.item-info').innerWidth() );

        $( this ).find('.item-button').click(function(){
            
            var selectedItem = $($('.item-box')[index]);

            if (isComplete) {

                isComplete = false;

                if( parseInt(selectedItem.css('margin-right')) < 0 ) {
        
                    if( $('.item-box').hasClass('open') ) {

                        $('.item-box.open').animate({
                            marginRight: -$('.item-box.open .item-info').innerWidth()
                        }, 500, function() {
                            
                            $('.item-box.open').find('.return').css('display', 'none');
                            $('.item-box.open').find('.icon').css('display', 'block');
                            
                            $('.item-box').removeClass('open');
                            selectedItem.addClass('open');

                            selectedItem.find('.icon').css('display', 'none');
                            selectedItem.find('.return').css('display', 'block');
                            
                            selectedItem.animate({
                                marginRight: 0
                            }, 500, function(){

                                isComplete = true;

                            });

                        });

                    } else {

                        selectedItem.addClass('open');
                    
                        selectedItem.animate({
                            marginRight: 0
                        }, 500, function(){

                            selectedItem.find('.icon').css('display', 'none');
                            selectedItem.find('.return').css('display', 'block');

                            isComplete = true;

                        });

                    }
        
                } else {

                    $('.item-box').removeClass('open');
        
                    selectedItem.animate({
                        marginRight: -selectedItem.find('.item-info').innerWidth()
                    }, 500, function(){

                        selectedItem.find('.return').css('display', 'none');
                        selectedItem.find('.icon').css('display', 'block');

                        
                        isComplete = true;
                    });
        
                }

            }
    
        });

    });

});