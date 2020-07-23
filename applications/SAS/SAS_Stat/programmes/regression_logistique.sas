/*** Faire une régression logistique ***/
proc Logistic data=MYOCARDE
		  descending ;/*** Pour expliquer le label le plus grand ***/
class VexplQuali1 VexplQuali2 …;
model VQuali = variables / outroc=ROC  /*** Pour créer une table pour roc ***/
				   selection=stepwise ; /*** Pour sélectionner les var. ***/
   
output out=LOGIT /*** Pour créer une table avec les résultats ***/
 predprobs=x ; /***  Pour obtenir les probas a posteriori par cross-val. ***/
 
run;


/*** Pour faire la courbe ROC : ***/
data ROC;  
set ROC;
_Spec_ = 1-_1MSpec_;
	proc GPlot data=ROC;
	symbol1 i=join v=none l=1 c=black;
	symbol2 i=join v=none l=2 c=red;
	plot _Sensit_*_Prob_  _Spec_*_Prob_ / overlay; /*** superpose les graphes ***/
run;