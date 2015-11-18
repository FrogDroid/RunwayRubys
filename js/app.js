/**
 * Created by jeremiah on 11/3/15.
 */
$(function(){
    $('.multi-select').multiselect();
})

function showCombo(elem){
    $(elem).next('ul').removeClass('hide')
}