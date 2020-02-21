data table_ref;
format CODE 8. CODE2 $2. LIBELLE $20. ;
input CODE CODE2 LIBELLE ;
cards;
1 01 Janvier
2 02 Février
3 03 Mars
4 04 Avril
5 05 Mai
6 06 Juin
7 07 Juillet
8 08 Aout
9 09 Septembre
10 10 Octobre
11 11 Novembre
12 12 Décembre
;
run;
 
 
/**** Déclaration format *****/
/** En numérique ***/
data  cntlin;
set table_ref;
      fmtname = "F_MOIS_NUM";
      type='N';
      start = CODE;
      label = trim(LIBELLE);
output;
run;
 
proc format cntlin = cntlin;
run;
 
/** En Alpha-numérique ***/
data  cntlin;
set table_ref;
      fmtname = "F_MOIS_TEXT";
      type='C';
      start = CODE2;
      label = trim(LIBELLE);
output;
run;
 
 
proc format cntlin = cntlin;
run;
 
 
 
data table;
format MOIS_NUM 8. MOIS_TEXT $2.;
input MOIS_NUM MOIS_TEXT ;
cards;
1 01
2 02
3 03
4 04
5 05
6 06
7 07
8 08
9 09
10 10
11 11
12 12
;
run;
 
 
data table;
format LIBELLE_MOIS_1 $20. LIBELLE_MOIS_2 $20.;
set table;
LIBELLE_MOIS_1=put(MOIS_NUM,F_MOIS_NUM.);
LIBELLE_MOIS_2=put(compress(MOIS_TEXT),$F_MOIS_TEXT.);
run;