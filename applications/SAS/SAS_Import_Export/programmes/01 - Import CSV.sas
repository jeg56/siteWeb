filename fic "Chemin de mon fichier  /  Nom de mon fichier";

data WORK.MA_TABLE_SAS_1;
infile fic lrecl=499 firstobs=4 missover;
input   @1  VAR1   $22.
   @23 VAR2   ddmmyy10.
   @33 VAR3   ddmmyy10. 
;
run;

/*** Ou bien ***/

data WORK.MA_TABLE_SAS_2;
%let _EFIERR_ = 0; 
infile "Chemin de mon fichier  /  Nom de mon fichier" delimiter = ';' 
MISSOVER DSD lrecl=32767 ;
informat VAR1 $10.;
informat VAR2 $15.;

format VAR1 $10.;
format VAR2 $15.;

id=_N_;
input
   VAR1 $
   VAR2 $
;

if _ERROR_ then call symputx('_EFIERR_',1);  
run;
