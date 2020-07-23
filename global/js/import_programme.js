
function import_Programme(id,type_programme) {
	var etat='OK';

			$.ajax({
				type 	: "GET",
				url 	: "./applications/"+type_programme+"/liste_programmes.json",
				async 	: false,
				dataType: 'json',
				contentType :"application/x-www-form-urlencoded;charset=UTF-8",
				success 	: function(json){
								/* load_programme(id,xml); */
								load_programme_JSON(id,json);
						},
				error	: function(){
								etat='STOP';
						}
			});

}

function load_programme_JSON(id,file){



	$.each(file,function(index,noeud){
		for(var i=0;i<noeud.length;i++){
	var titre_value="";
	var description_value="";
	var code_value="";
			
				if(noeud[i].titre){
					/*** Ajout d'un titre ***/
					titre_value+= '<div class="titre_programme"> '+noeud[i].titre+'<br>';
			        titre_value+='<img alt="" src="./global/images/barre_bleue.png" style="border:none;"/> </div>';
			       
			     	$('#'+id).append(titre_value);

				}

				if(noeud[i].description){
					description_value+='<div class="detail_caracteristique">'+noeud[i].description+'</div>';
					$('#'+id).append(description_value);
				}

				if(noeud[i].chemin){	
					code_value+='<div class="programme" id="div_'+id+'_'+i+'" >';
					code_value+='<textarea class="col_code"  id="code_'+id+'_'+i+'" > ';
					code_value+='</textarea> ';
					code_value+='<div class="col_code" id="mirror_'+id+'_'+i+'"></div> ';
					code_value+='</div> ';
		    		$('#'+id).append(code_value);

		    		loadProgramme(noeud[i].chemin,id,id+'_'+i);
		      }
				if(noeud[i].video){
					code_value+='<div id="div_'+id+'_'+i+'" >';
					code_value+='<video class="video" controls preload="true" poster="'+noeud[i].video+'.png">';
					code_value+='<source src="'+noeud[i].video+'.mp4" type="video/mp4"> ';
					code_value+='<source src="'+noeud[i].video+'.ogv" type="video/ogv"> ';
					code_value+='<source src="'+noeud[i].video+'.webm" type="video/webm"> ';
					code_value+='Désolé, votre navigateur ne supporte pas les videos... :-(';
					code_value+='mais accédez a ce site via chrome ou firefox ca fonctionnera ! ';
					code_value+='Ou téléchargez directement la video! <a href ="'+noeud[i].video+'.mp4" download="video">télécharger </a>';
					code_value+='</video></div> ';
		    		$('#'+id).append(code_value);

		    		loadProgramme(noeud[i].chemin,id,id+'_'+i);
		      }
		}
		
	})
}

function  loadHTML(page){
    request = $.ajax({
        url: "./applications/Connexion/php/suiviPage.php",
        type: "post",
        data: { id: window.id, page : page }
    });
                   
	request.done(function (response, textStatus){
		console.log(response)
	})

    $("#application").load(page); 
};

function loadProgramme(file,id,id_div) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       document.getElementById('code_'+id_div).value=xhttp.responseText;
       $('#'+id).append(' <script type="text/javascript">refreshMirrorCode("mirror_'+id_div+'","code_'+id_div+'");</script>');
        $('#'+id).append(' <script type="text/javascript">setMirrorSize("'+id_div+'");</script>');
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
} 