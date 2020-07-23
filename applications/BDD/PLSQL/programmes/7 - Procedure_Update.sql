create or replace
PROCEDURE MA_PROCEDURE_PL_SQL

is
l_date_du_jour    DATE := SYSDATE;
BEGIN



DBMS_OUTPUT.PUT_LINE('Message d entête');
DBMS_OUTPUT.PUT_LINE('Heure de début : '||to_char(l_date_du_jour,'YYYY/MM/DD HH24:MI:SS'));
	UPDATE MA_TABLE
   	SET
		/*** Si MA_VARIABLE est null alors on remplace par 'XXXXXXXX' sinon on laisse comme avant ***/
		MA_VARIABLE=DECODE(MA_VARIABLE,null,'XXXXXXXX',MA_VARIABLE)
		WHERE MA_VARIABLE IN ( SELECT TOTO 
         				FROM MA_TABLE_TOTO
      				      )
        ;
DBMS_OUTPUT.PUT_LINE('Heure de fin : '||to_char(l_date_du_jour,'YYYY/MM/DD HH24:MI:SS'));
DBMS_OUTPUT.PUT_LINE( To_char( SQL%ROWCOUNT ) || ' enregistrements mis à jour');


COMMIT;

END MA_PROCEDURE_PL_SQL;