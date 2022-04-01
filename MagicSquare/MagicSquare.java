package MagicSquare;
import java.util.Scanner;

public class MagicSquare {
  // Global variables
  public static int a, b, c, d, e, f, g, h, i;
  static int N = 3; // Length of each side

  public static void main(String[] args) {
    getArray();

    // Declare the Magic Square
    int magicSquare[][] = {
        { a, b, c },
        { d, e, f },
        { g, h, i }
    };

    if (isMagicSquare(magicSquare)) {
      System.out.println("This is a Magic Square!");
    } else {
      System.out.println("This is not a Magic Square... :(");
    }

  }

  static boolean isMagicSquare(int mSquare[][]) {

    // sumDiag1 and sumDiag2 are the sum of the two diagonals
    int sumDiag1 = 0, sumDiag2 = 0;
    for (int i = 0; i < N; i++) {
      // (i, i) is the diagonal from top-left -> bottom-right
      // (i, N - i - 1) is the diagonal from top-right -> bottom-left
      sumDiag1 += mSquare[i][i];
      sumDiag2 += mSquare[i][N - 1 - i];
    }

    // If the two diagonal sums are unequal then it is not a magic square
    if (sumDiag1 != sumDiag2)
      return false;

    // Calculating sums of Rows and columns and checking if they are equal to each
    // other, as well as equal to diagonal sum or not
    for (int i = 0; i < N; i++) {

      int rowSum = 0, colSum = 0;
      for (int j = 0; j < N; j++) {
        rowSum += mSquare[i][j];
        colSum += mSquare[j][i];
      }
      if (rowSum != colSum || colSum != sumDiag1)
        return false;
    }

    return true;
  }

  public static void getArray() {
    Scanner input = new Scanner(System.in);

    // Grab the values of the Magic Square
    System.out.print("Give 9 integers separated by a space and I'll check if they create a magic square: ");
    a = input.nextInt();
    b = input.nextInt();
    c = input.nextInt();
    d = input.nextInt();
    e = input.nextInt();
    f = input.nextInt();
    g = input.nextInt();
    h = input.nextInt();
    i = input.nextInt();

    input.close();
  }
}