package number_baseball_game;

import java.util.Arrays;

public class Play_main {
	public static void main(String[] args) {
	Play_number_baseball_game play = new Play_number_baseball_game();
	int[] testres = play.gamestart();
	System.out.println(Arrays.toString(testres));
	}
}
