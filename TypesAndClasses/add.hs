add :: Num a => a -> a -> a -> a
add x y z = x + y + z

increment :: Num a => a -> a
increment x = (add 0 1) x


alterincrement :: Integer -> Integer
alterincrement = add 0 1