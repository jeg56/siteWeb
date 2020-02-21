--- Exemple Update ---
UPDATE MA_TABLE
	SET 	MA_VARIABLE_1='XXXXXX',
			MA_VARIABLE_2='XXXXXX'
WHERE MA_VARIABLE ='XXXXXX'
;
commit;
--- Exemple Insert ---
INSERT INTO MA_TABLE (MA_VARIABLE_1,MA_VARIABLE_2,MA_VARIABLE_3)
VALUES (null,'XXXX' to_date('01-01-2016','DD-MM-YYYY'))
;
commit;

ou 

--- Exemple Insert ---
INSERT INTO MA_TABLE (MA_VARIABLE_1,MA_VARIABLE_2,MA_VARIABLE_3)
SELECT MA_VARIABLE_1,MA_VARIABLE_2,MA_VARIABLE_3 From MON_AUTRE_TABLE

;
commit;

--- Supprimer une table ---
DROP TABLE MA_TABLE;

--- Vider une table ---
DELETE FROM MA_TABLE;
commit;

--- Ajouter une variable  ---
alter table MA_TABLE ADD MA_VARIABLE_1 VARCHAR2(4 BYTE) DEFAULT 'XXXX' NOT NULL ENABLE ;

--- Si alors sinon  ---
SELECT MA_VARIABLE, DECODE(MA_VARIABLE,null,'XXXXXXXX',MA_VARIABLE) as NEW_VARIABLE
FROM MA_TABLE;

Ou bien 

SELECT  CASE MA_VARIABLE 
        WHEN 100 THEN '=100'
        WHEN 5000 THEN '>5000'
        ELSE 'MOYEN' END
FROM MA_TABLE;
   
Ou bien

SELECT CASE WHEN MA_VARIABLE > 100 
		THEN 'Plus_de_100'
		ELSE 'Moins_de_100' 
	   END  NEW_VARIABLE
FROM MA_TABLE;

--- Echantillonage  ---
SELECT * FROM MA_TABLE WHERE rownum <100


--- Agrégation sur pivot---

SELECT * FROM
(
  SELECT TABLE_NAME,DATA_TYPE
  FROM ALL_TAB_COLUMNS
)
PIVOT
(
  COUNT(DATA_TYPE)
  FOR DATA_TYPE IN ('NUMBER', 'DATE', 'VARCHAR2')
)
ORDER BY TABLE_NAME;


--- Not exist---
select VAR1,VAR2 from MA_TABLE1  A				
Where Not Exists ( Select VAR1,VAR2
                    From  MA_TABLE1 B											
                    Where A.VAR1= B.VAR1											
                    and A.VAR2= B.VAR2		
                  )											
