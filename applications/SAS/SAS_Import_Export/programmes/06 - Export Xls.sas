PROC EXPORT DATA= U_WORK.Test2 
            OUTFILE= "U:\00 - SocG�n�rale\TEMP\GSD_V2.xls" 
            DBMS=EXCEL REPLACE;
     SHEET="GSD"; 
     NEWFILE=YES;
RUN;
