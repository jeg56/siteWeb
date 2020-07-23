select  t.owner ,
       t.table_name ||'.'|| t.column_name as Nom_Variable, 
        case t.column_id
            when 1 then decode(c.comments,null,'SELECT '|| t.column_name|| ',' ,'SELECT '|| t.column_name || ' as "' || substr(c.comments,1,30) || '",' )
            when FIRST_VALUE(column_id)  OVER (PARTITION BY t.table_name ORDER BY column_id desc) then decode(c.comments,null, t.column_name || ' FROM '|| t.table_name ||';' , t.column_name || ' as "' || substr(c.comments,1,30) || '" FROM '|| t.table_name ||';' )
            else decode(c.comments,null, t.column_name|| ',' ,t.column_name || ' as "' || substr(c.comments,1,30) || '",' ) end as REQUETE
from    all_tab_columns t, 
           user_col_comments c                              
where   t.table_name = c.table_name  and                                               
        t.column_name = c.column_name   and
        owner='ROOT'  
order by t.table_name,t.column_id;