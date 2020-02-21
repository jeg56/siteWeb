/*** Recherche par mot clé ***/
select  t.owner ,
		t.table_name ||'.'|| t.column_name as Nom_Variable, 
        t.data_type,       
        t.data_length,                                                                     
        c.comments as commentaire                                    
from    all_tab_columns t, 
        user_col_comments c                              
where   t.table_name = c.table_name  and                                               
        t.column_name = c.column_name   and
        regexp_like(t.column_name,'MOT_CLE_1|MOT_CLE_2|....') and
        not regexp_like(t.column_name,'FINISSANT_MOT_CLE_EXLUSION$') 
order by t.table_name ||'.'|| t.column_name

/*** Qualité de la donnée ***/

select 'Select CNT, '''||table_name||''' as tname, code_hash from ('
       ||'Select count(*) as cnt, sum(ora_hash( '
       ||replace(ltrim(sys_connect_by_path( COLUMN_NAME,','),','),',',' || ')
       ||', Power(2,16)-1)) code_hash '
      ||'from '||table_name ||') '
       cbp
from user_tab_columns
where CONNECT_BY_ISLEAF=1
start with (column_id=1 
and table_name in (
'ODS_LOANS_IMPAYE_M_TMP'
))
connect by prior (column_id+1) = column_id
          and prior table_name = table_name
Order By Column_Id;