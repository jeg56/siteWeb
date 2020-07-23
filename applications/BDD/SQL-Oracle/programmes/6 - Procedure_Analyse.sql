
create or replace

/* --------------------------------------------------------------------------------
Script pour collecter le nombre de ligne dans des tables a destination d'une table 
d'analyse et collecte les erreurs au cas ou
-------------------------------------------------------------------------------- */
PROCEDURE PROC_ANALYSE () AS

CODE_ERREUR VARCHAR2(200);
MESSAGE_ERREUR  VARCHAR2(200);


cursor c1 is


------ MA_TABLE_TOTO : Nbre de ligne  -------------------------------
SELECT   'MA_TABLE_TOTO' as NOM_TABLE, count(*) as Nombre_de_ligne
FROM MA_TABLE_TOTO 
GROUP BY 'MA_TABLE_TOTO'
UNION ALL

------ MA_TABLE_TATA : Nbre de ligne  -------------------------------
SELECT   'MA_TABLE_TATA' as NOM_TABLE, count(*) as Nombre_de_ligne
FROM MA_TABLE_TATA 
GROUP BY 'MA_TABLE_TATA'


---------------------------------------------------------------------------------------------------------------------------------
; -----------------------------------------------------------END-----------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------

BEGIN

  BEGIN
    DELETE FROM MA_TABLE_ANALYSE ;
     COMMIT;
  EXCEPTION
    WHEN OTHERS THEN
      CODE_ERREUR := SQLCODE;
      MESSAGE_ERREUR  := SUBSTR(SQLERRM, 1, 200);
      INSERT INTO MA_TABLE_ERREUR
      VALUES
        (CODE_ERREUR, MESSAGE_ERREUR, 'DELETE_MA_TABLE_ANALYSE', SYSDATE);
      COMMIT;
    
  END;
    
  -- Alimentation de la table MA_TABLE_ANALYSE avec les DQC en erreur
  FOR C1_REC IN c1 LOOP
    begin
      INSERT INTO MA_TABLE_ANALYSE
      VALUES(
              C1_REC.NOM_TABLE,
              C1_REC.Nombre_de_ligne          
            );
       EXCEPTION
      WHEN OTHERS THEN
        CODE_ERREUR := SQLCODE;
        MESSAGE_ERREUR  := SUBSTR(SQLERRM, 1, 200);
        INSERT INTO MA_TABLE_ERREUR
        VALUES
          (CODE_ERREUR, MESSAGE_ERREUR, 'INSERT_MA_TABLE_ANALYSE', SYSDATE);
        COMMIT;
    END;
  END LOOP;
  COMMIT;
  

  
END;