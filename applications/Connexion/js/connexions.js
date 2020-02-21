function detectCookies(){

	var infosCookie = document.cookie;

    if (infosCookie && infosCookie.split(';')[0].split('=')[1] !='undefined'){
        var id = infosCookie.split(';')[0].split('=')[0];
        var id_value = infosCookie.split(';')[0].split('=')[1] ;
    }else{
        var id_value=-1;
    }


    var browser=detectBrowser()
  
    request = $.ajax({
        url: "./applications/Connexion/php/connexions.php",
        type: "post",
        data: { id: id_value, Browser : browser}
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus){

        if(textStatus=='success'){
            var obj = JSON.parse(response);
            count=Object.keys( obj).length;
            
            for(var i=0; i<count; i++){
                //$(".the-return").append(obj[i].ID );
                document.cookie = "id="+obj[i].ID+"; expires=Fri, 31 Dec 9999 23:59:59 GMT;" ;
                Localisation(obj[i].ID)
                window.id=obj[i].ID;
            }
        }else{
           // $(".the-return").html( 'ERREUR AJAX');
        }
    });

}; 




function Localisation(id_value){
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: Infinity
    };

    autorisationGeolocalisation=0;
    lat=0;
    long=0;
    if (navigator.geolocation) {
        
          navigator.geolocation.getCurrentPosition(function(position) {
            autorisationGeolocalisation=1;
                lat=position.coords.latitude;
                long=position.coords.longitude;
              request = $.ajax({
                            url: "./applications/Connexion/php/majLocalisation.php",
                            type: "post",
                            data: { id: id_value,
                                    latitude: position.coords.latitude, 
                                    longitude: position.coords.longitude
                                }
                 });

                // on recupere un retour
                request.done(function (response, textStatus){

                })
          }, function(error) {
              switch(error.code){
                    case error.PERMISSION_DENIED:
                                request = $.ajax({
                                    url: "./applications/Connexion/php/erreurLocalisation.php",
                                    type: "post",
                                    data: { id: id_value,message:"L''utilisateur n''a pas autorisé l''accès à sa position"}
                                });
                                autorisationGeolocalisation=2;
                        break;          
                    case error.POSITION_UNAVAILABLE:
                                request = $.ajax({
                                    url: "./applications/Connexion/php/erreurLocalisation.php",
                                    type: "post",
                                    data: { id: id_value,message:"L''emplacement de l''utilisateur n''a pas pu être déterminé"}
                                });
                                autorisationGeolocalisation=3;
                        break;
                    case error.TIMEOUT:
                                request = $.ajax({
                                    url: "./applications/Connexion/php/erreurLocalisation.php",
                                    type: "post",
                                    data: { id: id_value,message:"Le service n''a pas répondu à temps"}
                                });
                                autorisationGeolocalisation=3;
                        break;
                    }
          },options);
    } else {
          // Browser doesn't support Geolocation
     autorisationGeolocalisation=4;
    }
}



function detectBrowser() { 
 if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
{
    return 'Opera';
}
else if(navigator.userAgent.indexOf("Chrome") != -1 )
{
    return 'Chrome';
}
else if(navigator.userAgent.indexOf("Safari") != -1)
{
    return 'Safari';
}
else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
{
     return 'Firefox';
}
else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
{
  return 'IE'; 
}  
else 
{
   return 'unknown';
}
}



 

    


