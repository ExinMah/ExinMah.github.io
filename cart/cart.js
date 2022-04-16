$('.product-price').change(function(){
    var s = $('.quantity').text().substr(1);
    $('.total-price').text('$'+(Number(s)+Number($(this).val())));
});
$('.product-price').trigger('change');

function ik(val){
    result = document.getElementsByClassName('quantity');
    result.value = result.value? parseInt(result.value) + parseInt(val) : parseInt(val);  
}