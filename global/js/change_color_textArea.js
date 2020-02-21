
function setMirrorSize(id_div) {
  var textarea_width  = document.getElementById('mirror_'+id_div).clientWidth ;
  var textarea_height = document.getElementById('mirror_'+id_div).clientHeight;
 /* document.getElementById('mirror_'+id_div).style.width  = 100+"%";
  document.getElementById('mirror_'+id_div).style.backgroundColor  = "rgb(10,10,10)";
  */
  document.getElementById('div_'+id_div).style.height= textarea_height+"px";
  document.getElementById('code_'+id_div).style.height= 0+"px";
 
}



function refreshMirrorCode(mirror,code) {

  var script_in  = document.getElementById(code).value;
      script_in  = script_in.replace(/&/g, '&amp;'); 
      script_in  = script_in.replace(/\//g, '&#47;');
      script_in  = script_in.replace(/</g, '&lt;');
      script_in  = script_in.replace(/>/g, '&gt;');
      script_in  = script_in.replace(/"/g, '&quot;');
      script_in  = script_in.replace(/\*/g, '&#42;');
      script_in  = script_in.replace(/'/g, '&apos;');

      script_in  = script_in.replace(/!/g, '&#33;');


//      script_in  = script_in.replace(/(data)/gi, '<span style="color:navy;">$1</span>'); // data en bleu foncé
//      script_in  = script_in.replace(/(run)/g, '<span style="color:navy;">$1</span>'); // run en bleu foncé
//      script_in  = script_in.replace(/(proc)/g, '<span style="color:navy;">$1</span>'); // proc en bleu foncé
//      script_in  = script_in.replace(/(sort)/g, '<span style="color:navy;">$1</span>'); // sort en bleu foncé

//      script_in  = script_in.replace(/(set)/g, '<span style="color:blue;">$1</span>'); // set en bleu  
 //     script_in  = script_in.replace(/(input)/g, '<span style="color:blue;">$1</span>'); // input en bleu
 //     script_in  = script_in.replace(/(cards)/g, '<span style="color:blue;">$1</span>'); // cards en bleu
 //     script_in  = script_in.replace(/(input)/g, '<span style="color:blue;">$1</span>'); // format en bleu
 //     script_in  = script_in.replace(/(informat)/g, '<span style="color:blue;">$1</span>'); // format en bleu
 //     script_in  = script_in.replace(/(format)/g, '<span style="color:blue;">$1</span>'); // format en bleu

  //    script_in  = script_in.replace(/cards.*?+run/g, '<span style="color:red;">$1</span>'); // format en bleu


      script_in  = script_in.replace(/(&lt;[a-zA-Z](.*?)&gt;)/g, '<span style="color:#12EA4B;">$1</span>'); // balises en vert
      script_in  = script_in.replace(/(&lt;&#47;[a-zA-Z](.*?)&gt;)/g, '<span style="color:#12EA4B;">$1</span>'); // balises en vert
      script_in  = script_in.replace(/(&lt;!--(.+?)--&gt;)/g, '<span style="color:red;">$1</span>'); // commentaires en gris
      script_in  = script_in.replace(/(&#47;&#42;&#42;(.+?)&#42;&#42;&#47;)/g, '<span style="color:#12EA4B;">$1</span>'); // commentaires SAS en vert  
      script_in  = script_in.replace(/(&#33;--(.+?)--)/g, '<span style="color:#998;">$1</span>'); // commentaires SAS en vert          
      script_in  = script_in.replace(/(&quot;(.+?)&quot;)/g, '<span style="color:#0000FF;">$1</span>'); // guillements en purple
      script_in  = script_in.replace(/(&apos;(.+?)&apos;)/g, '<span style="color:#0000FF;">$1</span>'); // quote en purple

      script_in  = script_in.replace(/(&apos;(.+?)&apos;)/g, '<span style="color:#0000FF;">$1</span>'); // quote en purple       
      script_in  = script_in.replace(/^set$/g, '<span style="color:red;">$1</span>'); // quote en purple


        var script_out = script_in.replace(/(?:\r\n|\r|\n)/g, '<br />');
  document.getElementById(mirror).innerHTML = '<pre>'+script_out + '</pre>';
}


