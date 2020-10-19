-- In this MySQL challenge, your query should return all the people who report to either Jenny Richards or have a NULL value in ReportsTo. The rows should be ordered by Age. Your query should also add a column at the end with a title of Boss Title where the value is either None or CEO. Your output should look like the following table.


SELECT FirstName, LastName, ReportsTo, Position, Age, 
case when ReportsTo = "Jenny Richards" then "CEO" 
else "None" end 
as "Boss Title" 
FROM maintable_LF5BG
where ReportsTo="Jenny Richards" or ReportsTo is NULL
order by Age;