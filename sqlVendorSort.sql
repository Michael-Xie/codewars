-- In this MySQL challenge, your query should return the vendor information along with the values from the table cb_vendorinformation. You should combine the values of the two tables based on the GroupID column. The final query should consolidate the rows to be grouped by FirstName, and a Count column should be added at the end that adds up the number of times that person shows up in the table. The output table should then be sorted by the Count column in ascending order. Your output should look like the following table.
SELECT maintable_VVWVC.GroupID, FirstName, LastName, Job, ExternalID, CompanyName, count(FirstName) as Count FROM maintable_VVWVC
join cb_vendorinformation on
maintable_VVWVC.GroupID = cb_vendorinformation.GroupID
group by maintable_VVWVC.FirstName
order by Count;