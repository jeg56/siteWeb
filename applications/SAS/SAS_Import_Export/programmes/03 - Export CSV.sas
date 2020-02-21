/*** Creation d'une table ***/

data work.MA_TABLE;
infile datalines dsd delimiter=';';
input   var1 : 3.
      var2 : $50.
;
datalines;
   5;ADMINISTRATIONS PRIVEES,  ASSOCIATIONS
   10;SSII
;
run;


/*** Export de ma table ***/
 data _null_;
 %let _EFIERR_ = 0; 
 %let _EFIREC_ = 0;   
 file 'U:\01 - Projet\008 - RECHERCHE IMPACTS\Cd_nsm.csv' delimiter=';' DSD DROPOVER lrecl=32767;
 if _n_ = 1 then 
  do;
    put "var1" ';' "var2" ;
  end;
set  work.MA_TABLE  end=EFIEOD;
    format var1 3.;
    format var2 $50. ;
  do;
    EFIOUT + 1;
    put var1 $ @;
    put var2 $ ;
    ;
  end;
 if _ERROR_ then call symputx('_EFIERR_',1); 
 if EFIEOD then call symputx('_EFIREC_',EFIOUT);
 run;

