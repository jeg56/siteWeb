proc GChart data=table;
pattern1 c=black v=solid;	/*** Pour pouvoir visualiser 2 ***/
pattern2 c=black v=empty;	 /*** histogrammes superposés  ***/
vbar variables / subgroup=VQuali;	/*** Détermine les sous-groupes ***/
run;
quit;  /*** Le « quit » permet d’éviter que SAS tourne à vide… ***/