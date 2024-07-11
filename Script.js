function insert(num){
$('.calc-disp').val($('.calc-disp').val() + num);
}
function eql(){
    $('.calc-disp').val (eval($('.calc-disp'). val()));
}
function c(){
    $('.calc-disp').val('');
}
function del(){
            value = $('.calc-disp').val();
            $('.calc-disp').val(value.substring(0, value.length -1))
}
$(document).ready(function() {
    $('.calc-disp').on('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});
