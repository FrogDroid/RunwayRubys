/**
 * Created by jeremiah on 11/12/15.
 */
$(function(){
   //todo: put the progress bar on a timer to increment by 25% every few seconds
    var line = new ProgressBar.Line('#progressTron', {
        //color: '#FCB03C',
        text: 'Scott is working on your order'
    });

    line.animate(1.0,{
        duration: 15000,
        from: {color: line.color},
        to: {color: '#5cb85c'}
    }, function(){
        $('#orderReady').removeClass('hidden');
    });  // Number from 0.0 to 1.0
});