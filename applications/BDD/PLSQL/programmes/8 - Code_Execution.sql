/*** Pour lancer une procedure ***/
SET SERVEROUTPUT ON BEGIN MA_PROCEDURE_A_LANCER(); 
END; 

/*** Pour lancer des scripts ***/

Spool Fichier_de_sortie.lst

alter session set current_schema=MA_BASE ;

set define off
set heading off
select "DEBUT DE L EXECUTION: "||to_char(sysdate,'YYYYMMDD HH24:MI:SS') from dual;
prompt ...........................................................
prompt

PROMPT --- Lancement du Script N°1 ---
@Mon_script_PL-SQL_N°1.sql

PROMPT --- Lancement du Script N°2 ---
@Mon_script_PL-SQL_N°2.sql


set define on
set heading on
prompt ...........................................................
select "FIN DE L EXECUTION: : "||to_char(sysdate,'YYYYMMDD HH24:MI:SS') from dual;
Spool off
