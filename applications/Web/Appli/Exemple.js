

function MajPDF(page,zoom,printPDF) {

          var specialElementHandlers = {
              '#editor': function (element,renderer) {
                  return true;
              }
          };

         var hauteur=1
                var doc = new jsPDF('portrait','mm','a4');
                
                var width = doc.internal.pageSize.width; 
                var height = doc.internal.pageSize.height; 


                var lMargin=15; //left margin in mm
                var rMargin=15; //right margin in mm
                var posFin=width-lMargin-rMargin;
                var pageCenter=width/2;

                doc.addImage(imgRF, 'JPEG', width/2 -25, hauteur, 50, 30)
              
                doc.setFontSize(10)
                doc.setFontType("bold");
                hauteur+=35
                doc.text(25, hauteur, "Lettre de démonstration")
                hauteur+=5
                doc.text(40, hauteur, "-----------")


                doc.setFontStyle('normal');
                str=document.getElementById('dateDuJour').innerHTML.replace(/<br>/gi, "\n").replace(/&nbsp;/gi, " ")
                hauteur=InsertMessageHtml(doc,hauteur,width-75,str,posFin)

                doc.setFontSize(10)
                doc.setFontType("bold");
                hauteur+=5
                doc.text(27, hauteur, "développé lors d'un POC")
                hauteur+=5
                doc.text(40, hauteur, "-----------")
                hauteur+=5
                doc.text(33, hauteur, "afin de prouver ")
                hauteur+=5
                doc.text(40, hauteur, "-----------")
                hauteur+=5
                doc.setFontSize(9)

            /*    str=document.getElementById('adresse').innerHTML 
                nb=(str.match(/<br>/g) || []).length
                doc.text(width-75, hauteur, str.replace(/<br>/gi, "\n").replace(/&nbsp;/gi, " ")) 
                hauteur+=5 * nb;
*/
                str=document.getElementById('adresse').innerHTML.replace(/<br>/gi, "\n").replace(/&nbsp;/gi, " ")
                hauteur=InsertMessageHtml(doc,hauteur,width-75,str,posFin)
    
               
                doc.setFontStyle('italic');
                doc.text(25, hauteur, "la faisabilité du besoin ")

                hauteur+=5
                doc.text(40, hauteur, "-----------")  

                doc.setFontStyle('normal');
                doc.setFontSize(11)
            /*    
                str=document.getElementById('adresse1').innerHTML 
                nb=(str.match(/<br>/g) || []).length
                doc.text(width-75, hauteur, str.replace(/<br>/gi, "\n").replace(/&nbsp;/gi, " ")) 
                hauteur+=5 * nb;
            */
                str=document.getElementById('adresse1').innerHTML.replace(/<br>/gi, "\n").replace(/&nbsp;/gi, " ")
                hauteur=InsertMessageHtml(doc,hauteur,width-75,str,posFin)

                hauteur+=5
/*              
                str=document.getElementById('adresse2').innerHTML 
                nb=(str.match(/<br>/g) || []).length
                doc.text(width-75, hauteur, str.replace(/<br>/gi, "\n").replace(/&nbsp;/gi, " ")) 
                hauteur+=5 * nb;
*/

                str=document.getElementById('adresse2').innerHTML.replace(/<br>/gi, "\n").replace(/&nbsp;/gi, " ")
                hauteur=InsertMessageHtml(doc,hauteur,width-75,str,posFin)


                doc.text(25, hauteur, "Tel : 06.33.02.11.89")  

                hauteur+=5
                hauteur+=20
                doc.text(40, hauteur, "Cher lecteur/lectrice,") 
				
				hauteur+=10;
				var paragraphe="Cette lettre est issue d'un POC (Proof Of Concept) après du Ministère des Affaires Etrangères afin de proposer des solutions dans l'automatisation de leurs lettres qui sont émises à destination des ressortisants francais ou étrangers. Rien de confidentiel : la page 3 a été créée pour démontrer la faisabilité de la gestion d'une fiche atypique exploitée par le service CRRV (Commission de Recours contre les décisions de Refus de Visa d'entrée en France). Les pages 4 à 7 ont été codées afin de représenter un questionnaire émis lors les demandes de réunification de famille de réfugiés."
                hauteur=InsertParagraphe(doc,paragraphe,hauteur,width,lMargin,rMargin)

                hauteur+=10
                var paragraphe="Ce document avait pour objectif d'étudier la faisabilité d'automatiser des PDF depuis une base de données en laissant la possibilité aux utilisateurs de personnaliser leurs lettres."
                hauteur=InsertParagraphe(doc,paragraphe,hauteur,width,lMargin,rMargin)

                hauteur+=10
                var paragraphe="Ici j'ai placé qques boutons afin de permettre une modification de la police, de la couleur ... et codé l'ensemble de ce PDF. Si vous êtes connecté avec FireFox vous avez la possibilité d'effectuer un clic droit sur la partie droite. De là vous verrez que ces options sont aussi diponibles dans le menu qui s'affiche."
                hauteur=InsertParagraphe(doc,paragraphe,hauteur,width,lMargin,rMargin)
				
				hauteur+=10;
				var paragraphe="Juste dessous ce paragraphe vous avez une zone ou vous pouvez personnaliser ce PDF depuis la partie droite comportant l'espace de saisie 'Information Complémentaire' (pensez à actualiser avec  "				
                hauteur=InsertParagraphe(doc,paragraphe,hauteur,width,lMargin,rMargin)

				imgActu='data:image/png;base64,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';
doc.addImage(imgActu, 'JPEG', 45, hauteur-4, 4, 5);
 doc.text( 50,hauteur, '):');
                hauteur+=10;
               
                str=document.getElementById('InfoComplementaire').innerHTML 
                paragraphe= str.replace('<i> /**** Indiquer ici vos remarques ****/ </i>','').replace(/<div>/gi, '').replace(/<\/div>/gi, '').replace(/&nbsp;/gi, '')        
                hauteur=InsertMessageHtml(doc,hauteur,lMargin,paragraphe,posFin)

                hauteur+=20
                doc.text(20, hauteur, "Je reste à reste disposition pour tout complément d'information. ") 
                            
            
                hauteur+=20
                doc.text(140, hauteur, "Arnaud Jégoux") 
                hauteur+=5
                doc.text(138, hauteur, "Analyste décisionnel") 


                doc.setFontSize(8)
                var textLign='21 rue de Nantes 44160 Ponchateau'
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width-largeur_textLign)/2, height-10, textLign);

/***** Ajout de la page 2 *****/
                doc.addPage ( 'a4', 'landscape');
                var width = doc.internal.pageSize.width; 
                doc.addImage(imgRF, 'JPEG', width/2 -25, 1, 50, 30)



 
               str=document.getElementById('InfoComplementairePage2').innerHTML 
                paragraphe= str.replace('<i> /**** Indiquer ici vos remarques ****/ </i>','').replace(/<br>/gi, "\n").replace(/&nbsp;/gi, " ").replace(/<div>/gi, '').replace(/<\/div>/gi, '')        
             //   hauteur=InsertParagraphe(doc,paragraphe,50,width,lMargin,rMargin)
hauteur= InsertMessageHtml(doc,50,lMargin,paragraphe,posFin)



                var width = doc.internal.pageSize.width; 
                doc.addImage(imgRF, 'JPEG', width/2 -25, 1, 50, 30)


                monTableau=' <table border="1">   <tr>    <th>Mois</th>    <th>Volume</th>  </tr>  <tr>    <td>January</td>    <td>100</td>  </tr>  <tr>    <td>February</td>     <td>80</td>   </tr> </table> '
                doc.fromHTML(monTableau, 25, 75);

				               doc.addPage ( 'a4', 'landscape');
                var width = doc.internal.pageSize.width; 
                doc.addImage(imgRF, 'JPEG', width/2 -25, 1, 50, 30)

                doc.setFontSize(10)
                doc.setFontType("bold");

                hauteur=40
                doc.text(lMargin, hauteur, "N° CRRV") 
                var fontSize = doc.internal.getFontSize();
                largeur=doc.getStringUnitWidth('N° CRRV')*fontSize / doc.internal.scaleFactor;
                doc.line(lMargin,hauteur+1,lMargin+largeur,hauteur+1);

                doc.text(width/2 -25, hauteur, "VISA DE COURT SEJOUR") 
                largeur=doc.getStringUnitWidth('VISA DE COURT SEJOUR')*fontSize / doc.internal.scaleFactor;
                doc.line(width/2 -25,hauteur+1,width/2 -25 +largeur,hauteur+1);

                doc.setFontType("normal");
                doc.text(width-rMargin-40 , hauteur, "Date d'édition : 19/12/2017") 
                var fontSize = doc.internal.getFontSize();
                largeur=doc.getStringUnitWidth("Date d'édition : 19/12/2017")*fontSize / doc.internal.scaleFactor;
                doc.line(width-rMargin-40 ,hauteur+1,width-rMargin-40 +largeur,hauteur+1);

                /************/
                doc.setFontType("bold");
                hauteur+=10
                doc.text(lMargin, hauteur, "Demandeur :") 
                doc.line(lMargin,hauteur+1,lMargin+getWidthPDF(doc,'Demandeur :'),hauteur+1);

                hauteur+=5
                doc.text(lMargin, hauteur, "Né(e) le:") 
                hauteur+=5
                doc.text(lMargin, hauteur, "Age lors de la demande:") 
                hauteur+=5
                doc.text(lMargin, hauteur, "Nationalité:") 
                hauteur+=5
                doc.text(lMargin, hauteur, "Autres demandeurs:")
                doc.line(lMargin,hauteur+1,lMargin+getWidthPDF(doc,'Autres demandeurs:'),hauteur+1);


                hauteur+=10
                var largeurBoite=(width-rMargin-lMargin -2*3)/4;
                doc.rect(lMargin, hauteur, largeurBoite, 80); 
                doc.rect(lMargin + largeurBoite +2, hauteur, largeurBoite, 80); 
                doc.rect(lMargin + largeurBoite*2 +2*2, hauteur, largeurBoite, 80); 
                doc.rect(lMargin + largeurBoite*3 +2*3, hauteur, largeurBoite, 80); 

                hauteur+=5
                doc.text(lMargin +1, hauteur, "Dossier poste :")
                doc.text(lMargin +1 + largeurBoite +2, hauteur, "Recours (arguments - PJ):")
                doc.text(lMargin +1 + largeurBoite*2 +2*2, hauteur, "Financement et hébergement:")
                doc.text(lMargin +1 + largeurBoite*3 +2*3, hauteur, "DOV (synthèse et analyse):")

                hauteur+=5
                doc.text(lMargin +1, hauteur, "(recevabilité et données)")
                doc.text(lMargin +1 + largeurBoite*2 +2*2, hauteur, "(synthèse et analyse)")

                hauteur+=5
                str=document.getElementById('DossierPoste').innerHTML 
                paragraphe= str.replace(/<div>/gi, '').replace(/<\/div>/gi, '').replace(/~+$/,'')       
                InsertMessageHtml(doc,hauteur,lMargin+1,paragraphe.trim(),lMargin  + largeurBoite -2-1)

                str=document.getElementById('Recours').innerHTML 
                paragraphe= str.replace(/<div>/gi, '').replace(/<\/div>/gi, '').replace(/~+$/,'')       
                InsertMessageHtml(doc,hauteur,lMargin +1 + largeurBoite +2,paragraphe.trim(),lMargin  + 2*largeurBoite -1)

                str=document.getElementById('FinancementHebergement').innerHTML 
                paragraphe= str.replace(/<div>/gi, '').replace(/<\/div>/gi, '').replace(/~+$/,'')       
                InsertMessageHtml(doc,hauteur,lMargin +1 + largeurBoite*2 +2*2,paragraphe.trim(),lMargin  + 3*largeurBoite +1 )

                str=document.getElementById('DOV').innerHTML 
                paragraphe= str.replace(/<div>/gi, '').replace(/<\/div>/gi, '').replace(/~+$/,'')       
                InsertMessageHtml(doc,hauteur,lMargin +1 + largeurBoite*3 +2*3,paragraphe.trim(),lMargin  + 4*largeurBoite +1)

                var widthPaysage = doc.internal.pageSize.width; 

                var posFinPaysage=widthPaysage-lMargin-rMargin;

                hauteur+=75
                doc.setFontType("bold");
                doc.text(lMargin, hauteur, "Proposition du rapporteur: ")
                doc.setFontType("normal");
                hauteur+=5
                str=document.getElementById('PropalRapporteur').innerHTML 
                paragraphe= str.replace(/<div>/gi, '').replace(/<\/div>/gi, '').replace(/~+$/,'')       
                InsertMessageHtml(doc,hauteur,lMargin,paragraphe.trim(),posFinPaysage)


                hauteur+=15
                doc.setFontType("bold");
                doc.text(lMargin, hauteur, "Proposition de motivation")
                doc.setFontType("normal");
                hauteur+=5
                str=document.getElementById('PropalMotivation').innerHTML 
                paragraphe= str.replace(/<div>/gi, '').replace(/<\/div>/gi, '').replace(/~+$/,'')       
                InsertMessageHtml(doc,hauteur,lMargin,paragraphe.trim(),posFinPaysage)

				
				
 /***** Ajout de la page 3 *****/

 doc.addPage ( 'a4', 'portrait');
                var width = doc.internal.pageSize.width; 
                var height = doc.internal.pageSize.height; 


                var lMargin=15; //left margin in mm
                var rMargin=15; //right margin in mm
                var posFin=width-lMargin-rMargin;
                var pageCenter=width/2;
 				hauteur=1
                doc.addImage(imgRF, 'JPEG', width/2 -25, hauteur, 50, 30)
                hauteur+=35
 
                var textLign="Ministère des Affaires Etrangères"
                doc.setFontType("bold")
                doc.setFontSize(10)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width/2-largeur_textLign)/2, hauteur, textLign);
                hauteur+=3
               
                var textLign="-----------"
                doc.setFontType("bold")
                doc.setFontSize(10)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width/2-largeur_textLign)/2, hauteur, textLign);
                hauteur+=3                
         
                var textLign="DIRECTION GENERALE"
                doc.setFontType("bold")
                doc.setFontSize(10)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width/2-largeur_textLign)/2, hauteur, textLign);
                hauteur+=3    

                var textLign="DES ETRANGERS EN FRANCE"
                doc.setFontType("bold")
                doc.setFontSize(10)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width/2-largeur_textLign)/2, hauteur, textLign);
                hauteur+=3       

                var textLign="-----------"
                doc.setFontType("bold")
                doc.setFontSize(10)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width/2-largeur_textLign)/2, hauteur, textLign);
                hauteur+=4    

                var textLign="Direction de l’Immigration"
                doc.setFontType("bold")
                doc.setFontSize(10)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width/2-largeur_textLign)/2, hauteur, textLign);
                hauteur+=3    

                var textLign="-----------"
                doc.setFontType("bold")
                doc.setFontSize(10)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width/2-largeur_textLign)/2, hauteur, textLign);
                hauteur+=3    

                var textLign="Sous-Direction des Visas"
                doc.setFontType("bold")
                doc.setFontSize(10)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width/2-largeur_textLign)/2, hauteur, textLign);
                hauteur+=4   

                var textLign="-----------"
                doc.setFontType("bold")
                doc.setFontSize(10)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width/2-largeur_textLign)/2, hauteur, textLign);
                hauteur+=3  

                var textLign="Bureau Familles de Réfugiés"
                doc.setFontType("bolditalic")
                doc.setFontSize(10)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width/2-largeur_textLign)/2, hauteur, textLign);
                hauteur+=4   

                var textLign="11 rue de la Maison Blanche - B.P. 43605"
                doc.setFontType("bold")
                doc.setFontSize(10)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width/2-largeur_textLign)/2, hauteur, textLign);
                hauteur+=4   

                var textLign="44036 Nantes cedex 1"
                doc.setFontType("bold")
                doc.setFontSize(10)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width/2-largeur_textLign)/2, hauteur, textLign);
                hauteur+=10  


                var textLign="FORMULAIRE"
                doc.setFontType("bold")
                doc.setFontSize(12)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width-largeur_textLign)/2, hauteur, textLign);
				doc.setLineWidth(0.5);
				doc.line((width-largeur_textLign)/2, hauteur+1.5,largeur_textLign+(width-largeur_textLign)/2 , hauteur+1.5);
				hauteur+=6  

                var textLign="à renseigner par le/la réfugié(e), bénéficiaire de la protection subsidiaire ou apatride "
                doc.setFontType("bold")
                doc.setFontSize(12)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width-largeur_textLign)/2, hauteur, textLign);
				doc.setLineWidth(0.5);
				doc.line((width-largeur_textLign)/2, hauteur+1.5,largeur_textLign+(width-largeur_textLign)/2 , hauteur+1.5);
				hauteur+=10 


                doc.setFontType("normal")
                doc.setFontSize(12)
	           	var paragraphe="Ce formulaire concerne votre situation matrimoniale et familiale et a pour objectif de permettre à l’administration de se prononcer sur la recevabilité de votre demande de réunification familiale."
                hauteur=InsertParagraphe_Justifie(doc,paragraphe,hauteur,width,lMargin,rMargin,"non")
                hauteur+=7 
                doc.setFontType("normal")
                doc.setFontSize(12)
	           	var paragraphe="Il devra être renseigné avec le plus grand soin puis renvoyé à l’adresse ci-dessus, accompagné des pièces justificatives suivantes :"
                hauteur=InsertParagraphe_Justifie(doc,paragraphe,hauteur,width,lMargin,rMargin,"non")
                hauteur+=7 

                doc.setFontType("italic")
                doc.setFontSize(12)
	           	var paragraphe="• La copie recto-verso de votre carte de séjour en cours de validité ou de votre récépissé de demande de carte de séjour "
                hauteur=InsertParagraphe_Justifie(doc,paragraphe,hauteur,width,lMargin+10,rMargin,"non")
                 hauteur+=5
	           	var paragraphe="(si vous êtes titulaire d’un récépissé, vous veillerez à envoyer la copie de votre carte de séjour dès qu’elle vous sera délivrée) ;"
                hauteur=InsertParagraphe_Justifie(doc,paragraphe,hauteur,width,lMargin+10,rMargin,"oui") 

                hauteur+=7 


                doc.setFontType("italic")
                doc.setFontSize(12)
	           	var paragraphe="• La copie d’un justificatif de votre domicile actuel ;"
                hauteur=InsertParagraphe_Justifie(doc,paragraphe,hauteur,width,lMargin+10,rMargin,"non")
                hauteur+=7 


                doc.setFontType("italic")
                doc.setFontSize(12)
	           	var paragraphe="• Les copies de votre attestation de sécurité sociale et de votre dernier relevé CAF, sur lesquelles sont mentionnés les noms de vos ayants droit ;"
                hauteur=InsertParagraphe_Justifie(doc,paragraphe,hauteur,width,lMargin+10,rMargin,"non")
                hauteur+=7 

 

                doc.setFontType("italic")
                doc.setFontSize(12)
	           	var paragraphe="• Tout élément permettant d’établir la réalité de votre lien familial avec les membres de votre famille (photos prises à différentes époques sur lesquelles vous apparaissez accompagné des membres de votre famille, transferts d’argent, relevés téléphoniques, correspondances et tout autre document pouvant justifier ce lien)."
                hauteur=InsertParagraphe_Justifie(doc,paragraphe,hauteur,width,lMargin+10,rMargin,"oui")
                hauteur+=7  

				doc.setFontType("normal")
				doc.setFontSize(12)
				var paragraphe="A titre complémentaire, vous êtes également invité à transmettre la copie des justificatifs d’état-civil fournis au poste consulaire par les membres de votre famille :"
				hauteur=InsertParagraphe_Justifie(doc,paragraphe,hauteur,width,lMargin,rMargin,"non")
				hauteur+=7 


                doc.setFontType("italic")
                doc.setFontSize(12)
	           	var paragraphe="• La copie des actes d’état civil de votre famille (acte de mariage, acte de naissance, acte de décès, jugement d’adoption…) ;"
                hauteur=InsertParagraphe_Justifie(doc,paragraphe,hauteur,width,lMargin+10,rMargin,"non")
                hauteur+=7  

                doc.setFontType("italic")
                doc.setFontSize(12)
	           	var paragraphe="• S’il s’agit d’enfants issus d’une union antérieure ou si l’autre parent est décédé, la copie de l’acte de décès ou la décision judiciaire relative à l’autorité parentale."
                hauteur=InsertParagraphe_Justifie(doc,paragraphe,hauteur,width,lMargin+10,rMargin,"non")
                hauteur+=10  


                doc.setFontType("normal")
                doc.setFontSize(12)
                textLign='Références du dossier : n° DCE : [Item6] - [Item 1] - n° OFPRA : [Item 5]'
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text(lMargin, hauteur, textLign);
                hauteur+=10  

				doc.setFontType("bold")
				doc.rect(lMargin/2, hauteur-6, width-(lMargin+rMargin)/2, 54); 
                doc.text(lMargin, hauteur, 'Nom : ……………………………………………………………………………………………………………'); hauteur+=5
                doc.text(lMargin, hauteur, 'Prénom : ………………………………………………………………………………………………………..'); hauteur+=5
                doc.text(lMargin, hauteur, 'Né(e) le : ……… / ……… / ………………'); hauteur+=8
                doc.text(lMargin, hauteur, 'Date d’arrivée en France ……… / ……… / ………………'); hauteur+=8
                doc.text(lMargin, hauteur, 'Adresse :………………………………………………………………………………………………………..'); hauteur+=5
                doc.text(lMargin, hauteur, 'Etage ………………  Appartement ………… Immeuble …………………………………………………'); hauteur+=5
                doc.text(lMargin, hauteur, 'Code Postal ……………………… Ville ……………………………………………………………………..'); hauteur+=5
                doc.text(lMargin, hauteur, 'Téléphone fixe :…………………………………… et portable :…………..………………….……………'); hauteur+=5
                doc.text(lMargin, hauteur, 'Adresse mail : ……………..………………………………………………………………………………….'); hauteur+=5


                doc.setFontSize(8)
                doc.setFontType("normal")
                var textLign='11 rue de la Maison Blanche - B.P. 43605 – 44036 Nantes cedex 1'
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width-largeur_textLign)/2, height-10, textLign);

/***** Ajout de la page 4 *****/
 doc.addPage ( 'a4', 'portrait');
 				hauteur=10 
                textLign='I.- Les membres de votre famille que vous souhaitez faire venir en France : '
                doc.setFontType("bold")
                doc.setFontSize(14)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text(lMargin, hauteur, textLign);
				doc.setLineWidth(0.5);
				doc.line((width-largeur_textLign)/2, hauteur+1.5,largeur_textLign+lMargin, hauteur+1.5);
				hauteur+=10                  


                textLign='1) Membres de votre famille concernés par la demande de réunification familiale : '
                doc.setFontType("bold")
                doc.setFontSize(12)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width-largeur_textLign)/2, hauteur, textLign);
                hauteur+=5 

                doc.setLineWidth(0.2);
                doc.setFontType("normal")
                var largeurCell=2
                doc.rect(largeurCell, hauteur, 40, 13); 
                doc.text(largeurCell+5, hauteur+7, 'Nom');
                doc.rect(largeurCell, hauteur+13, 40, 13); 
                doc.rect(largeurCell, hauteur+26, 40, 13); 
                doc.rect(largeurCell, hauteur+39, 40, 13); 
                doc.rect(largeurCell, hauteur+52, 40, 13); 
                doc.rect(largeurCell, hauteur+65, 40, 13); 
                doc.rect(largeurCell, hauteur+78, 40, 13); 
                largeurCell+=40

                doc.rect(largeurCell, hauteur, 40, 13); 
                doc.text(largeurCell+5, hauteur+7, 'Prénom');
                doc.rect(largeurCell, hauteur+13, 40, 13); 
                doc.rect(largeurCell, hauteur+26, 40, 13); 
                doc.rect(largeurCell, hauteur+39, 40, 13); 
                doc.rect(largeurCell, hauteur+52, 40, 13); 
                doc.rect(largeurCell, hauteur+65, 40, 13); 
                doc.rect(largeurCell, hauteur+78, 40, 13); 
                largeurCell+=40

                doc.rect(largeurCell, hauteur, 25, 13); 
                doc.text(largeurCell, hauteur+5, '    Date de \n  naissance');
                doc.rect(largeurCell, hauteur+13, 25, 13); 
                doc.text(largeurCell, hauteur+13+10, '  ..../..../........');
                doc.rect(largeurCell, hauteur+26, 25, 13); 
                doc.text(largeurCell, hauteur+26+10, '  ..../..../........');
                doc.rect(largeurCell, hauteur+39, 25, 13); 
                doc.text(largeurCell, hauteur+39+10, '  ..../..../........');
                doc.rect(largeurCell, hauteur+52, 25, 13); 
                doc.text(largeurCell, hauteur+52+10, '  ..../..../........');
                doc.rect(largeurCell, hauteur+65, 25, 13); 
                doc.text(largeurCell, hauteur+65+10, '  ..../..../........');
                doc.rect(largeurCell, hauteur+78, 25, 13);   
                doc.text(largeurCell, hauteur+78+10, '  ..../..../........');              
                largeurCell+=25

                doc.rect(largeurCell, hauteur, 30, 13); 
                doc.text(largeurCell, hauteur+5, '        Lieu \n de naissance');
                doc.rect(largeurCell, hauteur+13, 30, 13); 
                doc.rect(largeurCell, hauteur+26, 30, 13); 
                doc.rect(largeurCell, hauteur+39, 30, 13); 
                doc.rect(largeurCell, hauteur+52, 30, 13); 
                doc.rect(largeurCell, hauteur+65, 30, 13); 
                doc.rect(largeurCell, hauteur+78, 30, 13); 
                largeurCell+=30

                doc.rect(largeurCell, hauteur, 35, 13); 
                doc.text(largeurCell, hauteur+5, '        Lien \n   de parenté ');  doc.setFontType("italic"); doc.text(largeurCell, hauteur+5, ' \n                     (1) '); 
                doc.rect(largeurCell, hauteur+13, 35, 13); 
                doc.rect(largeurCell, hauteur+26, 35, 13); 
                doc.rect(largeurCell, hauteur+39, 35, 13); 
                doc.rect(largeurCell, hauteur+52, 35, 13); 
                doc.rect(largeurCell, hauteur+65, 35, 13); 
                doc.rect(largeurCell, hauteur+78, 35, 13); 
                largeurCell+=35

                doc.setFontType("normal")
                doc.rect(largeurCell, hauteur, 35, 13); 
                doc.text(largeurCell, hauteur+5, " Nom de l'autre \n      parent "); doc.setFontType("italic"); doc.text(largeurCell, hauteur+5, ' \n                  (2) '); 
                doc.rect(largeurCell, hauteur+13, 35, 13); 
                doc.rect(largeurCell, hauteur+26, 35, 13); 
                doc.rect(largeurCell, hauteur+39, 35, 13); 
                doc.rect(largeurCell, hauteur+52, 35, 13); 
                doc.rect(largeurCell, hauteur+65, 35, 13); 
                doc.rect(largeurCell, hauteur+78, 35, 13); 
               	largeurCell+=35
hauteur+=95

textLign='(1) Préciser le lien de parenté avec vous : époux(se), concubin(e), fils, fille ou enfant adopté.'
doc.setFontType("italic")
doc.setFontSize(11)
var fontSize = doc.internal.getFontSize();
var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
doc.text(lMargin, hauteur, textLign);
hauteur+=5 

textLign='(2) Pour les enfants, préciser le nom de l’autre parent'
doc.setFontType("italic")
doc.setFontSize(11)
var fontSize = doc.internal.getFontSize();
var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
doc.text(lMargin, hauteur, textLign);
hauteur+=20 


textLign='2) Coordonnées du représentant de votre famille à l’étranger (répondant) :'
doc.setFontType("bold")
doc.setFontSize(12)
var fontSize = doc.internal.getFontSize();
var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
doc.text(lMargin, hauteur, textLign);
hauteur+=10 


textLign='Nom et prénom du répondant : …………………………………………………………………….'
doc.setFontType("normal")
doc.setFontSize(12)
var fontSize = doc.internal.getFontSize();
var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
doc.text(lMargin+5, hauteur, textLign);
hauteur+=5 

textLign='Ville de résidence des membres de votre famille :……………………………………………….'
doc.setFontType("normal")
doc.setFontSize(12)
var fontSize = doc.internal.getFontSize();
var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
doc.text(lMargin+5, hauteur, textLign);
hauteur+=5 

textLign='Pays :………………………………………………………………………………………………….'
doc.setFontType("normal")
doc.setFontSize(12)
var fontSize = doc.internal.getFontSize();
var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
doc.text(lMargin+5, hauteur, textLign);
hauteur+=5 

textLign='Téléphone 1 : …………………………………. Téléphone 2 : …………….…………………….'
doc.setFontType("normal")
doc.setFontSize(12)
var fontSize = doc.internal.getFontSize();
var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
doc.text(lMargin+5, hauteur, textLign);
hauteur+=5 

textLign='Adresse mail : ………………………………………………………………………………………..'
doc.setFontType("normal")
doc.setFontSize(12)
var fontSize = doc.internal.getFontSize();
var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
doc.text(lMargin+5, hauteur, textLign);
hauteur+=10



                textLign='II.- Votre situation matrimoniale actuelle : '
                doc.setFontType("bold")
                doc.setFontSize(14)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text(lMargin, hauteur, textLign);
				doc.setLineWidth(0.5);
				doc.line(lMargin, hauteur+1.5,largeur_textLign+lMargin, hauteur+1.5);
				hauteur+=10  

                textLign='1) Etes-vous marié ? '
                doc.setFontType("bold")
                doc.setFontSize(12)
                doc.setLineWidth(0.1);
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text(lMargin+5, hauteur, textLign);
                
                textLign='Oui      / Non '
                doc.setFontType("normal")
                doc.setFontSize(12)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign2=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor
                
                doc.text(lMargin+5 + largeur_textLign, hauteur, textLign);
                doc.setDrawColor(0);
                doc.setFillColor(220,220,220);
                doc.rect(lMargin+ 13 +largeur_textLign , hauteur -5, 5, 5, 'FD'); 
                doc.rect(lMargin+ 5 +largeur_textLign +largeur_textLign2, hauteur -5, 5, 5, 'FD'); 
                hauteur+=10 

                textLign='Si oui, s’agit-t-il d’un mariage ?  Civil       / Coutumier ou religieux  '
                doc.setFontType("normal")
                doc.setFontSize(12)
                doc.setLineWidth(0.1);
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign2=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor
                doc.text(lMargin+10, hauteur, textLign);
                doc.setDrawColor(0);
                doc.setFillColor(220,220,220);
                doc.rect(lMargin+ 80  , hauteur -5, 5, 5, 'FD'); 
                doc.rect(lMargin +10 +largeur_textLign2, hauteur -5, 5, 5, 'FD'); 
                hauteur+=10 

                textLign='Date et lieu du mariage : ……. / …….. / ………  à  ………………………………………'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=10 

                textLign='Nom du conjoint(e) ……………………………………………..………………………………….'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5 

                textLign='Prénom :……….……………………………………………..………………………………………'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5 

                textLign='Sa date de naissance : ….. / …... / …...  à  ……………..…….…………………………………….'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5       

                textLign='Sa ville de résidence actuelle : ………………………….  Pays : ………………………………….'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5       

				textLign='Téléphone 1 : ………………………………….  Téléphone 2 : …………….……………………..'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5                               

				textLign='Adresse mail : ……………………………………………………………………………………….'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=10                               

				textLign='En cas de décès du conjoint(e), date du décès :….. / …... / …...  lieu : ………….………………..'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=10                               

				textLign='En cas de polygamie, préciser l’identité de vos autres épouses :'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5                               

				textLign='Nom : …………..………… Prénom : ……………………. Lieu de résidence : ………..………..'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5                               

				textLign='-	Date et lieu du mariage : ……. / …….. / ………  à  ………………………………………'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5                               

				textLign='Nom : ……………..……… Prénom : ……………………. Lieu de résidence : ………..………..'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5                               

				textLign='-	Date et lieu du mariage : ……. / …….. / ………  à  ………………………………………'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5      

/***** Ajout de la page 5 *****/
			 doc.addPage ( 'a4', 'portrait');
			 	hauteur=10 
				textLign='2) Vivez-vous actuellement en concubinage ? '
				doc.setFontType("bold")
				doc.setFontSize(12)
				var fontSize = doc.internal.getFontSize();
				var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
				doc.text(lMargin+5, hauteur, textLign);

				textLign='Oui      / Non '
				doc.setFontType("normal")
				doc.setFontSize(12)
				var fontSize = doc.internal.getFontSize();
				var largeur_textLign2=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor

				doc.text(lMargin+5 + largeur_textLign, hauteur, textLign);
				doc.setDrawColor(0);
				doc.setFillColor(220,220,220);
				doc.rect(lMargin+ 13 +largeur_textLign , hauteur -5, 5, 5, 'FD'); 
				doc.rect(lMargin+ 5 +largeur_textLign +largeur_textLign2, hauteur -5, 5, 5, 'FD'); 
				hauteur+=10 


                textLign='Date de début du concubinage : ….. / …... / …...'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5 

                textLign='Nom du concubin(e) …………………….…………….……………………………………………'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5 

                textLign='Prénom ……….………………………..…………………………………………………………….'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5 

                textLign='Sa date de naissance : ….. / …... / …... à ………………………………………………………..'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=10 

                textLign='Sa ville de résidence actuelle : …………………………. Pays : ………………………………….'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5 

                textLign='Téléphone 1 : …………………………………. Téléphone 2 : …………….………………………'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5 

                textLign='Adresse mail : ……………………………………………………………………………………….'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=10 




				textLign='3) Avez-vous été marié antérieurement ? '
				doc.setFontType("bold")
				doc.setFontSize(12)
				var fontSize = doc.internal.getFontSize();
				var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
				doc.text(lMargin+5, hauteur, textLign);

				textLign='Oui      / Non '
				doc.setFontType("normal")
				doc.setFontSize(12)
				var fontSize = doc.internal.getFontSize();
				var largeur_textLign2=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor

				doc.text(lMargin+5 + largeur_textLign, hauteur, textLign);
				doc.setDrawColor(0);
				doc.setFillColor(220,220,220);
				doc.rect(lMargin+ 13 +largeur_textLign , hauteur -5, 5, 5, 'FD'); 
				doc.rect(lMargin+ 5 +largeur_textLign +largeur_textLign2, hauteur -5, 5, 5, 'FD'); 
				hauteur+=10 


                textLign='Date et lieu du mariage : ……. / …….. / ……… à ………………………………………….........'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5 

                textLign='Nom du conjoint(e) : ………………………………………………………………….......................'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5 

                textLign='Prénom ……….………………………..…………………………………………………………….'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5 

                textLign='Sa date de naissance : ….. / …... / …... à ………………………………………………………..'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=10 

                textLign='En cas de décès du conjoint(e)     , date du décès : ….. / …... / …... lieu : ……….………………....';
                doc.text(lMargin+10, hauteur, textLign);doc.setFontType("italic"); var fontSize = doc.internal.getFontSize(); doc.text(lMargin+10 +doc.getStringUnitWidth('En cas de décès du conjoint(e) ')*fontSize / doc.internal.scaleFactor , hauteur, '(1) ');
                hauteur+=5 

                textLign='En cas de divorce     , date : ……. / …….. / ……… lieu : ………………………………………'
                doc.text(lMargin+10, hauteur, textLign);; var fontSize = doc.internal.getFontSize(); doc.text(lMargin+10 +doc.getStringUnitWidth('En cas de divorce ')*fontSize / doc.internal.scaleFactor , hauteur, '(1)');
                hauteur+=5 

                textLign='Tribunal de ……………………………………………… Pays : ……………………………………'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5 

                doc.setFontSize(11)
                doc.setFontType("italic");
                textLign='(1) joindre l’acte de décès ou le jugement de divorce'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=10              


                textLign='III.- Les membres de votre famille pour lesquels vous ne demandez pas \n la réunification familiale : '
                doc.setFontType("bold")
                doc.setFontSize(14)
                doc.text(lMargin, hauteur, textLign);
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth('III.- Les membres de votre famille pour lesquels vous ne demandez pas ')*fontSize / doc.internal.scaleFactor;
				doc.setLineWidth(0.5);
				doc.line(lMargin, hauteur+1.5,largeur_textLign+lMargin, hauteur+1.5);
				hauteur+=5                  

                var largeur_textLign=doc.getStringUnitWidth('la réunification familiale : ')*fontSize / doc.internal.scaleFactor;
				doc.setLineWidth(0.5);
				doc.line(lMargin, hauteur+1.5,largeur_textLign+lMargin, hauteur+1.5);
				hauteur+=10 

                textLign='1) Membres de votre famille concernés par la demande de réunification familiale : '
                doc.setFontType("bold")
                doc.setFontSize(12)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text(lMargin, hauteur, textLign);
                hauteur+=5 




                doc.setLineWidth(0.2);
                doc.setFontType("normal")
                var largeurCell=2
                doc.rect(largeurCell, hauteur, 40, 11); 
                doc.text(largeurCell+5, hauteur+7, 'Nom');
                doc.rect(largeurCell, hauteur+11, 40, 11); 
                doc.rect(largeurCell, hauteur+22, 40, 11); 
                doc.rect(largeurCell, hauteur+33, 40, 11); 
                doc.rect(largeurCell, hauteur+44, 40, 11);
                largeurCell+=40

                doc.rect(largeurCell, hauteur, 40, 11); 
                doc.text(largeurCell+5, hauteur+7, 'Prénom');
                doc.rect(largeurCell, hauteur+11, 40, 11); 
                doc.rect(largeurCell, hauteur+22, 40, 11); 
                doc.rect(largeurCell, hauteur+33, 40, 11); 
                doc.rect(largeurCell, hauteur+44, 40, 11); 
                largeurCell+=40

                doc.rect(largeurCell, hauteur, 25, 11); 
                doc.text(largeurCell, hauteur+5, '    Date de \n  naissance');
                doc.rect(largeurCell, hauteur+11, 25, 11); 
                doc.text(largeurCell, hauteur+11+10, '  ..../..../........');
                doc.rect(largeurCell, hauteur+22, 25, 11); 
                doc.text(largeurCell, hauteur+22+10, '  ..../..../........');
                doc.rect(largeurCell, hauteur+33, 25, 11); 
                doc.text(largeurCell, hauteur+33+10, '  ..../..../........');
                doc.rect(largeurCell, hauteur+44, 25, 11); 
                doc.text(largeurCell, hauteur+44+10, '  ..../..../........');            
                largeurCell+=25

                doc.rect(largeurCell, hauteur, 30, 11); 
                doc.text(largeurCell, hauteur+5, '        Lieu \n de naissance');
                doc.rect(largeurCell, hauteur+11, 30, 11); 
                doc.rect(largeurCell, hauteur+22, 30, 11); 
                doc.rect(largeurCell, hauteur+33, 30, 11); 
                doc.rect(largeurCell, hauteur+44, 30, 11);  
                largeurCell+=30

                doc.rect(largeurCell, hauteur, 35, 11); 
                doc.text(largeurCell, hauteur+5, '        Lien \n   de parenté ');  doc.setFontType("italic"); doc.text(largeurCell, hauteur+5, ' \n                     (1) '); 
                doc.rect(largeurCell, hauteur+11, 35, 11); 
                doc.rect(largeurCell, hauteur+22, 35, 11); 
                doc.rect(largeurCell, hauteur+33, 35, 11); 
                doc.rect(largeurCell, hauteur+44, 35, 11); 
                largeurCell+=35

                doc.setFontType("normal")
                doc.rect(largeurCell, hauteur, 35, 11); 
                doc.text(largeurCell, hauteur+5, " Nom de l'autre \n      parent "); doc.setFontType("italic"); doc.text(largeurCell, hauteur+5, ' \n                  (2) '); 
                doc.rect(largeurCell, hauteur+11, 35, 11); 
                doc.rect(largeurCell, hauteur+22, 35, 11); 
                doc.rect(largeurCell, hauteur+33, 35, 11); 
                doc.rect(largeurCell, hauteur+44, 35, 11); 
               	largeurCell+=35
hauteur+=65


                textLign='2) Membres de votre famille qui résident à l’étranger et pour lesquels vous ne demandez pas '
                doc.setFontType("bold")
                doc.setFontSize(12)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text(lMargin, hauteur, textLign);
                hauteur+=5 

                textLign='la réunification familiale : '
                doc.setFontType("bold")
                doc.setFontSize(12)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text(lMargin+5, hauteur, textLign);
                hauteur+=5 


                doc.setLineWidth(0.2);
                doc.setFontType("normal")
                var largeurCell=4
                doc.rect(largeurCell, hauteur, 30, 11); 
                doc.text(largeurCell+5, hauteur+7, 'Nom');
                doc.rect(largeurCell, hauteur+11, 30, 11); 
                doc.rect(largeurCell, hauteur+22, 30, 11); 
                doc.rect(largeurCell, hauteur+33, 30, 11); 
                doc.rect(largeurCell, hauteur+44, 30, 11);
                largeurCell+=30

                doc.rect(largeurCell, hauteur, 30, 11); 
                doc.text(largeurCell+5, hauteur+7, 'Prénom');
                doc.rect(largeurCell, hauteur+11, 30, 11); 
                doc.rect(largeurCell, hauteur+22, 30, 11); 
                doc.rect(largeurCell, hauteur+33, 30, 11); 
                doc.rect(largeurCell, hauteur+44, 30, 11); 
                largeurCell+=30

                doc.rect(largeurCell, hauteur, 25, 11); 
                doc.text(largeurCell, hauteur+5, '    Date de \n  naissance');
                doc.rect(largeurCell, hauteur+11, 25, 11); 
                doc.text(largeurCell, hauteur+11+10, '  ..../..../........');
                doc.rect(largeurCell, hauteur+22, 25, 11); 
                doc.text(largeurCell, hauteur+22+10, '  ..../..../........');
                doc.rect(largeurCell, hauteur+33, 25, 11); 
                doc.text(largeurCell, hauteur+33+10, '  ..../..../........');
                doc.rect(largeurCell, hauteur+44, 25, 11); 
                doc.text(largeurCell, hauteur+44+10, '  ..../..../........');            
                largeurCell+=25

                doc.rect(largeurCell, hauteur, 27, 11); 
                doc.text(largeurCell, hauteur+5, '        Lieu \n de naissance');
                doc.rect(largeurCell, hauteur+11, 27, 11); 
                doc.rect(largeurCell, hauteur+22, 27, 11); 
                doc.rect(largeurCell, hauteur+33, 27, 11); 
                doc.rect(largeurCell, hauteur+44, 27, 11); 
                largeurCell+=27

                doc.rect(largeurCell, hauteur, 30, 11); 
                doc.text(largeurCell, hauteur+5, '       Lien \n  de parenté ');  doc.setFontType("italic"); doc.text(largeurCell, hauteur+5, ' \n                    (1) '); 
                doc.rect(largeurCell, hauteur+11, 30, 11); 
                doc.rect(largeurCell, hauteur+22, 30, 11); 
                doc.rect(largeurCell, hauteur+33, 30, 11); 
                doc.rect(largeurCell, hauteur+44, 30, 11);
                largeurCell+=30

                doc.setFontType("normal")
                doc.rect(largeurCell, hauteur, 30, 11); 
                doc.text(largeurCell, hauteur+5, " Nom de l'autre \n      parent "); doc.setFontType("italic"); doc.text(largeurCell, hauteur+5, ' \n                  (2) '); 
                doc.rect(largeurCell, hauteur+11, 30, 11); 
                doc.rect(largeurCell, hauteur+22, 30, 11); 
                doc.rect(largeurCell, hauteur+33, 30, 11); 
                doc.rect(largeurCell, hauteur+44, 30, 11); 
               	largeurCell+=30

                doc.setFontType("normal")
                doc.rect(largeurCell, hauteur, 30, 11); 
                doc.text(largeurCell, hauteur+5, "       Lieu de \n     résidence ");  
                doc.rect(largeurCell, hauteur+11, 30, 11); 
                doc.rect(largeurCell, hauteur+22, 30, 11); 
                doc.rect(largeurCell, hauteur+33, 30, 11); 
                doc.rect(largeurCell, hauteur+44, 30, 11); 
               	largeurCell+=30

hauteur+=60

                doc.setFontSize(11)
                doc.setFontType("italic");
                textLign='(1) Préciser le lien de parenté avec vous : époux(se), concubin(e), fils, fille ou enfant adopté.'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5              


                doc.setFontSize(11)
                doc.setFontType("italic");
                textLign='(2) Pour les enfants, préciser le nom de l’autre parent'
                doc.text(lMargin+10, hauteur, textLign);
                hauteur+=5


 /***** Ajout de la page 6 *****/
 doc.addPage ( 'a4', 'portrait');
 				hauteur=10 
                textLign='Expliquer pourquoi la réunification familiale n’est pas demandée en leur faveur : '
                doc.setFontType("normal")
                doc.setFontSize(12)
                doc.text(lMargin+5, hauteur, textLign);
                hauteur+=5 

                textLign='…………………………………………………………………………………………………………'
                doc.setFontType("normal")
                doc.setFontSize(12)
                doc.text(lMargin+5, hauteur, textLign);
                hauteur+=5 
                textLign='…………………………………………………………………………………………………………'
                doc.setFontType("normal")
                doc.setFontSize(12)
                doc.text(lMargin+5, hauteur, textLign);
                hauteur+=5 
                textLign='…………………………………………………………………………………………………………'
                doc.setFontType("normal")
                doc.setFontSize(12)
                doc.text(lMargin+5, hauteur, textLign);
                hauteur+=5 
                textLign='…………………………………………………………………………………………………………'
                doc.setFontType("normal")
                doc.setFontSize(12)
                doc.text(lMargin+5, hauteur, textLign);
                hauteur+=5 
                textLign='…………………………………………………………………………………………………………'
                doc.setFontType("normal")
                doc.setFontSize(12)
                doc.text(lMargin+5, hauteur, textLign);
                hauteur+=30 


                textLign='IV.- Déclaration d’absence de vie maritale plurielle en France et de respect \n des principes essentiels qui régissent la vie familiale en France: '
                doc.setFontType("bold")
                doc.setFontSize(14)
                doc.text(lMargin, hauteur, textLign);
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth('IV.- Déclaration d’absence de vie maritale plurielle en France et de respect ')*fontSize / doc.internal.scaleFactor;
				doc.setLineWidth(0.5);
				doc.line(lMargin, hauteur+1.5,largeur_textLign+lMargin, hauteur+1.5);
				hauteur+=5                  

                var largeur_textLign=doc.getStringUnitWidth('des principes essentiels qui régissent la vie familiale en France ')*fontSize / doc.internal.scaleFactor;
				doc.setLineWidth(0.5);
				doc.line(lMargin, hauteur+1.5,largeur_textLign+lMargin, hauteur+1.5);
				hauteur+=30 

                textLign='Je soussigné (e) : NOM : …………………………Prénoms : ……………………………………'
                doc.setFontType("normal")
                doc.setFontSize(12)
                doc.text(lMargin+5, hauteur, textLign);
                hauteur+=10 

                paragraphe='déclare sur l’honneur que la réunification familiale ne créera pas une situation de polygamie ou de concubinage pluriel sur le territoire français.'
                doc.setFontType("normal")
                doc.setFontSize(12)
                hauteur=InsertParagraphe_Justifie(doc,paragraphe,hauteur,width,lMargin+5,rMargin,"non")
                hauteur+=10


                paragraphe='Je m’engage par ailleurs à respecter les principes essentiels qui, conformément aux lois de la République, régissent la vie familiale en France, pays d’accueil (qui recouvrent notamment l’interdiction de la polygamie, l’égalité homme/femme, le respect de l’intégrité physique des enfants et adolescents, de la liberté du mariage, des différences ethniques et religieuses, l’acceptation du caractère laïque de la République française et l’obligation d’assiduité scolaire).'
                doc.setFontType("normal")
                doc.setFontSize(12)
                hauteur=InsertParagraphe_Justifie(doc,paragraphe,hauteur,width,lMargin+3,rMargin,"non")
                hauteur+=10





                var textLign="Le   …….. / …….. / …….."
                doc.setFontSize(12)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width-largeur_textLign)/2, hauteur, textLign);
				hauteur+=5  


                var textLign="Signature du déclarant        "
                doc.setFontSize(12)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width-largeur_textLign-rMargin), hauteur, textLign);
				hauteur+=20  




                var textLign="Je soussigné (e) : NOM : ………………………Prénoms : ………………………………………"
                doc.setFontType("bold")
                doc.setFontSize(12)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width-largeur_textLign)/2, hauteur, textLign);
				hauteur+=5  

                var textLign="certifie sur l’honneur l’exactitude des déclarations portées sur la présente notice."
                doc.setFontType("bold")
                doc.setFontSize(12)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width-largeur_textLign)/2, hauteur, textLign);
				hauteur+=10


                var textLign="Le   …….. / …….. / …….."
                doc.setFontSize(12)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width-largeur_textLign)/2, hauteur, textLign);
				hauteur+=5  


                var textLign="Signature        "
                doc.setFontSize(12)
                var fontSize = doc.internal.getFontSize();
                var largeur_textLign=doc.getStringUnitWidth(textLign)*fontSize / doc.internal.scaleFactor;
                doc.text((width-largeur_textLign-rMargin), hauteur, textLign);
				hauteur+=30  



                monMessage='-- Merci de nous retourner ce formulaire dans les plus brefs délais -- '
                doc.fromHTML(monMessage, 15, 75);
var imgFin='data:image/png;base64,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'


      doc.addImage(imgFin, 'JPEG', lMargin, hauteur,width-lMargin-rMargin , 12)

                var string = doc.output('datauristring');
                document.getElementById('viewerPDF').src = string;
          
                if(printPDF=='oui'){
                    doc.autoPrint()
                     doc.output('save', 'monDossier.pdf');
                }
        
                /*return doc.output('dataurlnewwindow');*/
};
