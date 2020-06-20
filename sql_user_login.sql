/* write your SQL query below */

-- given a table with userId and DateJoined
-- get the Month and Month to Month diff of user joined

select current.Month, current.count - ifnull(next.count, 0)  as MonthToMonthChange from (
SELECT Month(DateJoined) as id, MONTHNAME(DateJoined) as Month, 
count(*) as count

FROM maintable_VNLMU

GROUP BY Month
ORDER BY Month(DateJoined)) as current
left join 
(
SELECT Month(DateJoined) as id, MONTHNAME(DateJoined) as Month, 
count(*) as count

FROM maintable_VNLMU

GROUP BY Month
ORDER BY Month(DateJoined)) as next
ON next.id = (select max(id) from (
SELECT Month(DateJoined) as id, MONTHNAME(DateJoined) as Month, 
count(*) as count

FROM maintable_VNLMU

GROUP BY Month
ORDER BY Month(DateJoined)) as blah where blah.id < current.id)
where current.id NOT in (1);