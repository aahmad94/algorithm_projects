-- SELECT DISTINCT L1.Num
-- OVER
-- (L1.Num) AS ConsecutiveNums
-- FROM Logs AS L1
-- WHERE L1.Num =
-- (SELECT L2.Num
-- FROM Logs AS L2
-- WHERE L2.Id = L1.Id + 1)
-- AND L1.Num =
-- (SELECT L3.Num
-- FROM Logs AS L3
-- WHERE L3.Id = L1.Id + 2);

SELECT DISTINCT L1.Num AS ConsecutiveNums
FROM Logs AS L1
WHERE L1.Num = (SELECT L2.Num
                FROM Logs AS L2
                WHERE L2.Id = L1.Id + 1) AND L1.Num = (SELECT L3.Num
                                                      FROM Logs AS L3
                                                      WHERE L3.Id = L1.Id + 2)
GROUP BY L1.Num;


