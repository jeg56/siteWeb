/*** Faire des tests sur la moyenne ***/
proc TTest data=table;
class VQuali; /*** Détermine les sous-groupes ***/
var variables;
run;

/*** Calculer des covariances et des corrélations 
	1/ Globales  ***/
proc Corr data= table cov /*** Pour avoir la matrice de var-covar **/
    noprob /*** pour virer les tests et probas ***/
    nosimple /*** pour virer les stats descr. ***/
    ;
run;

/*** 2- Par groupe  ***/
/*** Pour faire un calcul de covariance par groupe, il faut d’abord trier les observations 
du fichier suivant leur groupe d’appartenance : ***/
proc Sort data= table;
by VQuali;
run;

proc Corr data= table;
by VQuali;
run;