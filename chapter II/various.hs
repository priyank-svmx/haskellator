laast :: Num a => [a] -> a
laast xs = xs !! (length xs - 1)

iniit :: [a] -> [a]
iniit [] = []
iniit xs = take (length xs - 1) xs

imit :: [a] -> [a]
imit []  = []
imit [_] = []
imit (x:xs) = x : imit xs