
rsubmit;

%macro recherche(LIST_MOTS,REPERTOIRE_INITIAL);

data _null_;
	call system ("cd /applis/sas/img/dev/x110814/Temporaire; rm Log_recherche_mot.log");
	CALL SLEEP(10,1) ;
run;

filename myfile '/applis/sas/img/dev/x110814/Temporaire/Log_recherche_mot.log';
proc printto log=myfile;
run;

%let k=1;
%let MOT = %scan(&LIST_MOTS., &k.);
%do %while("&MOT." NE "");
	data _null_;
	call symput (compress("MOT_&k."),"&MOT.");
	run;
  %let k = %eval(&k + 1);
  %let MOT = %scan(&LIST_MOTS., &k.);
 %end;





proc sql;
create table RESULTAT 
  (  MOT char(200) format=$200. informat=$200., 
     MOT_ANALYSE char(200) format=$200. informat=$200.,
	 ARBORESCENCE char(2000) format=$2000. informat=$2000.,
	FICHIER char(200) format=$200. informat=$200. ); 
quit;

filename imp pipe "cd &REPERTOIRE_INITIAL.; ls -R *"; 

data ARBORESCENCE;
infile imp dsd missover lrecl=200;
informat REPERTOIRE $100.;
input REPERTOIRE $;
if REPERTOIRE eq "" then delete; 
if  substr(compress(REPERTOIRE),length(compress(REPERTOIRE)),1) eq ":" then TYPE="REPERTOIRE";
else TYPE="          ";
REPERTOIRE=substr(compress(REPERTOIRE),1,length(compress(REPERTOIRE))-1);
if TYPE="REPERTOIRE" then output;
run;

data _null_;
set ARBORESCENCE ;
call symput("NB_LIGNE_ARBORESCENCE",_N_);
call symput(compress("REPERTOIRE_"||_N_),compress(REPERTOIRE));
run;

%do i=1 %to &NB_LIGNE_ARBORESCENCE.;

	filename imp pipe "cd &REPERTOIRE_INITIAL./&&REPERTOIRE_&i.; ls "; 

		data REPERTOIRE;
		infile imp dsd missover lrecl=200;
		informat FICHIER $100.;
		input FICHIER $;
			if substr(compress(FICHIER),length(compress(FICHIER))-2,3) eq ".sh" or
		substr(compress(FICHIER),length(compress(FICHIER))-3,4) eq ".ksh"  or
		substr(compress(FICHIER),length(compress(FICHIER))-3,4) eq ".sas" then output;
		run;

%let NB_LIGNE_REPERTOIRE=0;
		data _null_;
		set REPERTOIRE;
		call symput("NB_LIGNE_REPERTOIRE",_N_);
		call symput(compress("FICHIER"||_N_),compress(FICHIER));
		run;

		%do j=1 %to &NB_LIGNE_REPERTOIRE.;
			%do M=1 %to %eval(&k - 1);


					filename imp pipe "grep -i &&MOT_&M. &REPERTOIRE_INITIAL./&&REPERTOIRE_&i./&&FICHIER&j. "; 

					data Fichier;
					infile imp dsd missover lrecl=200;
					informat MOT $100.;
					input MOT $;
					run;

					data fichier;
					set fichier (where=(MOT not like '%No such file or directory%'));
					MOT_ANALYSE="&&MOT_&M.";
					ARBORESCENCE = "&REPERTOIRE_INITIAL./&&REPERTOIRE_&i.";
					FICHIER = "&&FICHIER&j.";
					run;

					data RESULTAT;
					set RESULTAT Fichier;
					run;

			%end;
		%end;
%end;
%mend;
%recherche (CD_POT_NSM*CD_NSM*99979*3000,/);
endrsubmit;

