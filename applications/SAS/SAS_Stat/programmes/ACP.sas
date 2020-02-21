/*** Faire une ACP ***/
proc PrinComp data= table 
  out=ACP /*** Crée un fichier de sortie (pour graphes) ***/
  prefix=ACP; /*** Renomme les axes (ACP1, ACP2,…)  ***/
var variables;
run;

/*** Pour faire le graphique : ***/
proc GPlot data=ACP; /*** On utilise la table créée ***/
     symbol1 c=black v=dot i=none;     /*** Pour distinguer les ***/
     symbol2 c=black v=circle i=none;  /*** 2 groupes… ***/
     plot ACP2*ACP1 = Issue   / vref=0 href=0;  /*** Pour centrer le graphe ***/
run;
quit;
