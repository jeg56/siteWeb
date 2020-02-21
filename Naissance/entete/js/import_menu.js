
function load_menu_JSON(file,onglet_select){
$("#tabs").empty();
$("#navH").empty();
	$.each(file,function(index,noeud){
		var menu='';
		menu+='<li class="homeLink"> <a onclick="loadHTML(';
		menu+="'./presentation/presentation.html'";
		menu+=')"; > <img src="./entete/images/p_home.gif" width="31" height="30" alt="" border="0"/> </a> </li>';
		$("#tabs").append(menu);
		var menu='';
		var menu2='';

		for(var i=0;i<noeud.length;i++){
			if(noeud[i].nom==onglet_select){
					menu+='<li class="active"><a onclick="loadHTML(';
			}else{
					menu+='<li><a  onclick="loadHTML(';
			}
					menu+="'"+noeud[i].chemin+"')";
					menu+='">'+noeud[i].nom +' </a>';

if(noeud[i].nom==onglet_select)
{

			if(noeud[i].menu_niveau2){
				var menu_niveau2=noeud[i].menu_niveau2;
				for(var j=0;j<menu_niveau2.length;j++){

					menu2+='<li><a  onclick="loadHTML(';
					menu2+="'"+menu_niveau2[j].chemin+"')";
					menu2+='">'+menu_niveau2[j].nom +' </a>';	

					if(menu_niveau2[j].menu_niveau3){
						menu2+='<ul>';
						var menu_niveau3=menu_niveau2[j].menu_niveau3;
						for(var k=0; k<menu_niveau3.length;k++){
							menu2+='<li><a onclick="loadHTML(';
							menu2+="'"+menu_niveau3[k].chemin+"')";
							menu2+='">'+menu_niveau3[k].nom+'  </a> </li>';							


						}<!--Fin de la boucle k-->
						menu2+='</ul>';
					}
				}<!--Fin de la boucle j-->
				menu2+='</li>';
			}
menu2+='</li>';
		}<!--Fin de la boucle i-->
}
		$("#tabs").append(menu).bind("click",
								function(event){
									$('.active').removeClass('active');
									var onglet_select=trim(event.target.text);

									charge_Entete("./entete/json/menu.json",onglet_select);   
									$(event.target).parent().toggleClass('active');
								});
		$('#navH').append(menu2).bind("click",
								function(event){
									$('#navH li ul li.active').removeClass('active');
									$(event.target).parent().toggleClass('active');

								});
	})
}


function charge_Entete(fichier_Entete,onglet_select){
	$.ajax({
		type 	: "GET",
		url 	: fichier_Entete,
		async 	: false,
		dataType: 'json',
		success 	: function(json){
						load_menu_JSON(json,onglet_select);
				},
		error	: function(){
						alert('Probleme import de menu');
		}
	})

}


function trim(myString){
	return	myString.replace(/^\s+/g,'').replace(/\s+$/g,'');
}