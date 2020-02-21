/*************************** Comparaison CBI **************************************/
PROC COMPARE BASE=PROD_CTX.CTX_CBI_201304
             COMP=DEV_CTX.ctx_cbi_201304
             OUT=DIFFERENCES_CBI
             OUTBASE
             OUTCOMP
             OUTNOEQUAL
             OUTDIF
             NOPRINT;
RUN;

PROC TRANSPOSE DATA =DIFFERENCES_CBI  OUT = DIFFERENCES_CBI_2 ;
by  _OBS_    ;
var _TYPE_
 _OBS_
 SOURCE
 CD_ENT_JUR
 NUM_CTR
 CD_UNIC
 CD_PRD
 CD_SS_PRD
 DAT_OUV_PRN
 MNT_AUT_INI
 CD_TYP_CLI
 NUM_SIREN_PERS
 CD_SEG_MAR
 CT_PERSONNE_PHYSIQUE
;
RUN ;

data DIFFERENCES_CBI_2 (drop=COL3);;
set DIFFERENCES_CBI_2 (where=( _NAME_ ne "_TYPE_" And COL1 ne COL2));
run;

/********************************************************************************/


PROC COMPARE BASE=PROD.Persscrl
             COMP=Persscrl
             OUT=DIFFERENCES
             OUTBASE
             OUTCOMP
             OUTNOEQUAL
             NOPRINT;
RUN;
proc sort data=DIFFERENCES;
by  _OBS_ NUM_SIREN_PERS   ;
run;

PROC TRANSPOSE DATA =DIFFERENCES  OUT = DIFFERENCES2 ;
by  _OBS_ NUM_SIREN_PERS   ;
var _TYPE_
 _OBS_
 CDFOD1
CDFOD2
CD_NAE
CHAFEX1
CHAFGH1
COEXSC1
COEXSC2
DACOCE1
DACOCE2
DAFIEX1
DUEXER1
ETPEMO
ETPEMO2
MTBIA81
MTBICD1
MTBICF1
MTBIEH1
MTBIHJ1
MTBIVG1
MTBIYS1
MTBIYY1
MTRECO1
MTRENE1
NODIE1
NODIE2
;
RUN ;


data DIFFERENCES2 (rename=(COL1=Table_Base COL2=Table_Compare ));
set DIFFERENCES2 (where=( _NAME_ ne "_TYPE_" And COL1 ne COL2));
run;

data DIFFERENCES2;
set DIFFERENCES2 (where=( _NAME_ ne "DACOCE1"));
run;