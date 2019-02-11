
// slick slider

    $(document).ready(function(){
        $(".slideshow").slick({
            dots: false,
            arrows: false
        });
        $(".menu-slider a").click(function(e){
            e.preventDefault();
            slideIndex = $(this).index();
            $( '.slideshow' ).slickGoTo( parseInt(slideIndex) );
        });
    });


// counter

function catalogItemCounter(field){
    var fieldCount = function(el) {
        var
            // Мин. значение
            min = el.data('min') || false,

            // Макс. значение
            max = el.data('max') || false,

            // Кнопка уменьшения кол-ва
            dec = el.next('.dec'),

            // Кнопка увеличения кол-ва
            inc = el.prev('.inc');

        function init(el) {
            if(!el.attr('disabled')){
                dec.on('click', decrement);
                inc.on('click', increment);
            }

            // Уменьшим значение
            function decrement() {
                var value = parseInt(el[0].value);
                value--;

                if(!min || value >= min) {
                    el[0].value = value;
                }
            };

            // Увеличим значение
            function increment() {
                var value = parseInt(el[0].value);

                value++;

                if(!max || value <= max) {
                    el[0].value = value++;
                }
            };

        }

        el.each(function() {
            init($(this));
        });
    };

    $(field).each(function(){
        fieldCount($(this));
    });
}

catalogItemCounter('.fieldCount');


