(function($){
    $.fn.serializeObject=function(){var e={},i=this.serializeArray();return $.each(i,function(){e[this.name]?(e[this.name].push||(e[this.name]=[e[this.name]]),e[this.name].push(this.value||"")):e[this.name]=this.value||""}),e};$.fn.loading=function(display){if(display)
    return this.addClass('spinner spinner-white spinner-right').prop('disabled',!0);else return this.removeClass('spinner spinner-white spinner-right').prop('disabled',!1)};$.fn.json_beautify=function(){var obj=JSON.parse(this.val());var pretty=JSON.stringify(obj,undefined,2);this.val(pretty)}})(jQuery);function GetDisplayFormattedDate(dates){return dates.substring(8,10)+"/"+dates.substring(5,7)+"/"+dates.substring(0,4)}
    function GetDisplayFormattedDateDefault(dates){return dates.substring(6,10)+"-"+dates.substring(3,5)+"-"+dates.substring(0,2)}
    const DATE_FORMAT='dd/mm/yyyy';$('.selectpicker').selectpicker();$('.select2').select2();$.fn.datepicker.defaults.format=DATE_FORMAT;$('.date').datepicker({todayHighlight:!0,orientation:"bottom left",});$('.daterange-start').on('change',function(){$('.daterange-end').val($(this).val());$('.daterange-end').datepicker('setStartDate',$(this).val())})
    $('input','.date').attr('autocomplete','off');var swalError=function(e,message){var _message='';if(message!=undefined){_message=message}
    if(e!=undefined&&e.responseJSON){_message=e.responseJSON.message}
    if(_message=='abort'){return}
    swal.fire({icon:'error',text:_message})}
    $.ajaxSetup({headers:{'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')},error:swalError});var exportDataTable=function(url){window.open(url,'_blank')}
    var substringMatcher=function(strs,field){return function findMatches(q,cb){var matches,substringRegex;matches=[];substrRegex=new RegExp(q,'i');$.each(strs,function(i,str){if(substrRegex.test(str[field])){matches.push(str)}});cb(matches)}};const camelToSnakeCase=str=>str.replace(/[A-Z]/g,letter=>`_${letter.toLowerCase()}`);const localeTimeFormat=date=>`${date.toLocaleDateString()} ${(date.getHours()<10?'0':'') + date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}`;let serializeForm=(form)=>{var obj={};var formData=new FormData(form);for(var key of formData.keys()){obj[key]=formData.get(key)}
    return obj}
    let getProperty=(t,r)=>{var e,l=t.split("."),g=l.length,h=r||this;for(e=0;e<g;e++)h=h[l[e]];return h};let combinePostcode=(e,r)=>{var s;return $.each(["address_1","address_2","address_3","postcode","city","state"],function(t,a){var c;try{c=getProperty(e.replace("address_1",a),r)}catch(e){console.error(e)}c&&(s||(s=""),s=s+" "+c)}),s};
    let fetchForm=(url,{method,headers,body,onSuccess,onFailed,buttonId})=>{$(buttonId).loading(!0);fetch(url,{method:method!=null?method:'POST',headers:headers!=null?headers:{'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')},body:body}).then((response)=>response.json()).then((response)=>{if(!0===response.status){onSuccess!=null?onSuccess(response):swal.fire("Success!",response.message,"success")}else{onFailed!=null?onFailed(response):swal.fire("Failed!",response.message,"error")}
    $(buttonId).loading(!1)}).catch((err)=>{swal.fire("Failed!",err,"error");$(buttonId).loading(!1)})}
    let ajaxForm=(url,{method,headers,body,onSuccess,onFailed,buttonId})=>{$(buttonId).loading(!0);$.ajax({url:url,method:method!=null?method:'POST',headers:headers!=null?headers:{'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')},data:body,success:(response)=>{if(!0===response.status){onSuccess!=null?onSuccess(response):swal.fire("Success!",response.message,"success")}else{onFailed!=null?onFailed(response):swal.fire("Failed!",response.message,"error")}
    $(buttonId).loading(!1)},error:(xhr,status,err)=>{onFailed!=null?onFailed(xhr.responseJSON):swal.fire("Failed!",xhr.responseJSON.message!=null?xhr.responseJSON.message:err.toString(),"error");$(buttonId).loading(!1)}})}