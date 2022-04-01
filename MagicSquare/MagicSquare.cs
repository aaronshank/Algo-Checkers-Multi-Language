using System;

class MagicSquare
{
  // Size of the matrix
  static int N = 3;
  // Values of the matrix
  static int a, b, c, d, e, f, g, h, i;

  public static void Main()
  {
    // Get the values of the Matrix
    getValues();

    // Declare the Magic Square
    int[,] mSquare = new int[,] {
      {a, b, c},
      {d, e, f},
      {g, h, i}
    };

    if (isMagicSquare(mSquare))
    {
      Console.WriteLine("This is a Magic Square!");
    } else
    {
      Console.WriteLine("This is not a Magic Square. :(");
    }
  }

  static async bool isMagicSquare(int[,] mSquare)
  {
    // sumDiag1 and sumDiag2 are the sum of the 2 diagonals
    int sumDiag1 = 0, sumDiag2 = 0;

    for (int i = 0; i < N; i++)
    {
      // (i, 1) is the diagonal from top-left -> bottom-right
      // (i, N - i - 1) is the diagonal from top-right -> bottom-left
      sumDiag1 = sumDiag1 + mSquare[i, j];
      sumDiag2 = sumDiag2 + mSquare[i, N - 1 - i];
    }

    // If the two diagonals sums are !equal, then it is not a Magic Square
    if (sumDiag1 != sumDiag2)
    {
      return false;
    }

    // Check sums of Rows
    for (int i = 0; i < N; i++)
    {
      int rowSum = 0, colSum = 0;
      for (int j = 0; j < N; j++)
      {
        rowSum += mSquare[i, j];
        colSum += mSquare[j, i];
      }

      // Check for columns / rows / diagonals not having equivalence
      if (rowSum != colSum || colSum != sumDiag1)
      {
        return false;
      }
    }

    // If the other blocks haven't returned false, then this is a Magic Square.
    return true;
  }

  static void getValues()
  {
    Console.WriteLine("Give 9 integers separated by a space and I'll check if they create a magic square: ");
    a = Console.ReadLine();
    b = Console.ReadLine();
    c = Console.ReadLine();
    d = Console.ReadLine();
    e = Console.ReadLine();
    f = Console.ReadLine();
    g = Console.ReadLine();
    h = Console.ReadLine();
    i = Console.ReadLine();
  }
}