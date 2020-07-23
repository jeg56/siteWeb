/*** Faire une analyse discriminante ***/
proc Discrim data= table 
 short /*** Evite d’imprimer tout à chaque fois ***/
 pool=yes /*** Pour variance commune (sinon : no ou test) ***/
 canprefix=AFD /*** Pour renommer les axes ***/
 out=ADLIN /*** Fichier de sortie ***/
 can /*** Pour faire de l’analyse canonique ***/
       crossvalidate /*** Pour faire de la cross-validation ***/
	 testdata = tabtest /*** Estime le tx d’erreur sur un fichier test ***/
 crosslisterr /*** Pour afficher les ind. mal classés ***/
 crosslist /*** Pour afficher tous les classements ***/
 noclassify ; /*** Pas d’estimation du tx d’erreur par resubst.
 
priors prop; /***  Probas à priori proportionnelles (sinon : equal) ***/
class VQuali;
var variables;
run;

/*** Pour faire l’histogramme suivant le nouvel axe : ***/
proc GChart data=ADLIN;
     vbar AFD1 / subgroup=Issue;
run; quit;