﻿/*** Commande SQL pour obtenir le code d'une table ***/
SELECT dbms_metadata.get_ddl( 'TABLE', 'MA_TABLE' ) || ' ' ||
           dbms_metadata.get_dependent_ddl( 'COMMENT', 'MA_TABLE', USER ) || ' ' ||
           dbms_metadata.get_dependent_ddl('INDEX', 'MA_TABLE', USER )  as   the_ddl
  FROM dual;



/*** Exemple de création de table ***/
CREATE TABLE "MA_BDD"."MA_TABLE"
  (
    "MA_VARIABLE_NUM" NUMBER NOT NULL ENABLE,
    "MA_VARIABLE_DATE" DATE DEFAULT to_date('31-12-9999','DD-MM-YYYY') NOT NULL ENABLE,
    "MA_VARIABLE_ALPHA" VARCHAR2(11 BYTE) DEFAULT 'XXXXXXXXXXX'  NOT NULL ENABLE,
    CONSTRAINT "PK_MA_VARIABLE_NUM" 
	PRIMARY KEY ("MA_VARIABLE_NUM") USING
    INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS COMPRESS 1
    STORAGE(INITIAL 5242880 NEXT 5242880 MINEXTENTS 1 MAXEXTENTS 2147483645
    PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE
    DEFAULT CELL_FLASH_CACHE DEFAULT) 
    TABLESPACE "MON_ESPACE_DE_TRAVAIL" ENABLE
  )
  SEGMENT CREATION IMMEDIATE PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255
  COMPRESS FOR OLTP LOGGING STORAGE
  (
    INITIAL 5242880 NEXT 5242880 MINEXTENTS 1 MAXEXTENTS 2147483645 PCTINCREASE
    0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT
    CELL_FLASH_CACHE DEFAULT
  )
  TABLESPACE "MON_ESPACE_DE_TRAVAIL" ;
  
  
COMMENT ON COLUMN "MA_BDD"."MA_TABLE"."MA_VARIABLE_NUM" IS 'Libellé de ma variable MA_VARIABLE_NUM'; 
COMMENT ON COLUMN "MA_BDD"."MA_TABLE"."MA_VARIABLE_DATE" IS 'Libellé de ma variable MA_VARIABLE_DATE'; 
COMMENT ON COLUMN "MA_BDD"."MA_TABLE"."MA_VARIABLE_ALPHA" IS 'Libellé de ma variable MA_VARIABLE_ALPHA'; 

grant select on "MA_BDD"."MA_TABLE" to A_l_equipe_TOTO ; 

CREATE UNIQUE INDEX "MA_BDD"."PK_MA_VARIABLE_NUM" ON "MA_BDD"."MA_TABLE" ("MA_VARIABLE_NUM")
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS COMPRESS 1 STORAGE
  (
    INITIAL 5242880 NEXT 5242880 MINEXTENTS 1 MAXEXTENTS 2147483645 PCTINCREASE
    0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT
    CELL_FLASH_CACHE DEFAULT
   )
TABLESPACE "MON_ESPACE_DE_TRAVAIL" ;


create table MA_TABLE_BIS  COMPRESS FOR ALL OPERATIONS as 
select * from MA_TABLE


grant select on "MA_TABLE" to MON_ROLE;  
