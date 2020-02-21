function changeAsterix (attibut){
    document.getElementById('asterix1').style.display = attibut;
    document.getElementById('asterix2').style.display = attibut;
    document.getElementById('asterix3').style.display = attibut;
}
function saveGame(adresse,pseudo,datenaisssance,sexe,prenom){


  request = $.ajax({
      url: "./php/jeux.php",
      type: "post",
      data: { adresse: adresse.replace(/\s/g,"").replace(/,/g,"."), pseudo: pseudo, datenaisssance:datenaisssance,sexe:sexe,prenom:prenom}
  });

  request.done(function (response, textStatus){
    console.log(response)
    })


    changeAsterix('none');
  $('#dlg').dialog('open');
  
 
 
  document.getElementById('valNais').innerHTML=	"Date de nassance : " + datenaisssance
  document.getElementById('valSex').innerHTML=	"Sexe : " + sexe
  document.getElementById('valPrenom').innerHTML=	"Prénom : " + prenom
  document.getElementById('valPseudo').innerHTML= pseudo

  request = $.ajax({
      url: "./php/mail.php",
      type: "post",
      data: { adresse: adresse.replace(/\s/g,"").replace(/,/g,"."), pseudo: pseudo, datenaisssance:datenaisssance,sexe:sexe,prenom:prenom}
  });

  request.done(function (response, textStatus){
    console.log(response)
    })


}


