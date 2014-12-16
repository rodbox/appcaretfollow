(function($){
    $.fn.appcaret=function(options){

        //On définit nos paramètres par défaut
      var defauts=
           {
              top    : 30,
              left    : 20
           };

      var param=$.extend(defauts, options);

        $(document).on("keyup keydown keypress",this.selector , function (){
          var t=$(this);
          var tracer = $('<span>',{"id":"tracer"}).html("x");
          var val = t.val().substr(0,t.getSelectionStart()).replace(/\n/g,"<br>");
          var val = val.replace(/\s/g,"&nbsp;");

          $('#hidecloner')
            .html(val)
            .append(tracer);
          var tracerPos = tracer.position();
          var tPos = t.position();

          param.follower.css({
            top   : tracerPos.top + tPos.top + param.top,
            left  : tracerPos.left + + param.left
          });
         
        })
      
      $(document).on("mouseleave mouseenter",this.selector , function (e){
          // if(e.type=="mouseenter")
          //   param.follower.show();
          // else
          //   param.follower.hide();
      })

      function init(selector){
        param.follower = $($(selector).data("follower"));
        var output = $("<div>",{id:"hidecloner"});
        $(selector).after(output);
      }

      init(this.selector);
    }
})(jQuery);

/* Source : http://www.sitepoint.com/6-jquery-cursor-functions/ */
jQuery.fn.getSelectionStart = function(){
    if(this.lengh == 0) return -1;
    input = this[0];
 
    var pos = input.value.length;
 
    if (input.createTextRange) {
        var r = document.selection.createRange().duplicate();
        r.moveEnd('character', input.value.length);
        if (r.text == '')
        pos = input.value.length;
        pos = input.value.lastIndexOf(r.text);
    } else if(typeof(input.selectionStart)!="undefined")
    pos = input.selectionStart;
 
    return pos;
}
