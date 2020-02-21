select A.column_name,
      B.COMMENTS,
      case 
        when A.DATA_TYPE='NUMBER' and A.DATA_SCALE is null then  'NUMBER('||A.DATA_LENGTH||')' 
        when A.DATA_TYPE='NUMBER'  and A.DATA_SCALE is not null then 'DECIMALE('||A.DATA_LENGTH||','||A.DATA_SCALE||')' 
        when A.DATA_TYPE='VARCHAR2'  then 'VARCHAR2('||A.DATA_LENGTH||')' 
        else A.DATA_TYPE end Format
from all_tab_columns A,
      all_col_comments B
where b.owner = a.owner and b.table_name = a.table_name and b.column_name = a.column_name and   
    A.table_name='DM_PEARL_CONTRAT'  
order by A.column_id 