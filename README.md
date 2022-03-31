# The purpose of this program is to test if a 3x3 Matrix is a Magic Square or not.
* This is a visual 3x3 Matrix.
  ```
    [a, b, c]
    [d, e, f]
    [g, h, i]
  ```
* For a Magic Square to exist, the following must be true:
  * The sum of all the rows, columns, and diagonals must be the same value n.

* This is a Magic Square where n = 15.
  ```
    [ 2  7  6 ] <-- Sums to 15
    [ 9  5  1 ] <-- Sums to 15
    [ 4  3  8 ] <-- Sums to 15
      ^  ^  ^
      |  |  |       The diagonal [ 2 5 8 ] sums to 15.
      15 15 15      The diagonal [ 6 5 4 ] sums to 15.
  ```

* This is not a Magic Square
  ```
    [ 1  2  3 ] <-- Sums to 6
    [ 4  5  6 ] <-- Sums to 15
    [ 7  8  9 ] <-- Sums to 24
      ^  ^  ^
      |  |  |       The diagonal [ 1 5 9 ] sums to 15.
      12 15 18      The diagonal [ 3 5 7 ] sums to 15.
  ```
  * So even though the value of n = 15 occurs multiple times, it is not the only value of n in this Square
    * Therefore it is NOT a magic square.