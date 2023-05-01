package number_baseball_game;

import java.util.Scanner;

public class Play_number_baseball_game {
    public int[] userInputAnswer() {
        int[] userAnswer = new int[4];
        int cnt = 1;
        while (true) {
            System.out.println(cnt + "번 숫자 입력");
            Scanner scan = new Scanner(System.in);
            int n = scan.nextInt();
            if (n >= 1 && n <= 9) {
                userAnswer[cnt - 1] = n;
                cnt++;
            } else {
                System.out.println("1 - 9 까지 숫자만 입력 가능! 다시 입력하세요");
                System.out.println();
            }
            if (cnt == 5) {
                break;
            }
        }
        return userAnswer;
    }

    public boolean duplicate(int[] ansArr) {
        boolean isDuplicate = false;
        for (int i = 0; i < 3; i++) {
            for (int j = i + 1; j < 4; j++) {
                if (ansArr[i] == ansArr[j]) {
                	isDuplicate = true;
                }
            }
        }
        return isDuplicate;
    }
    
    public int[] gamestart() {
    	int[] userAns = userInputAnswer();
    	while (duplicate(userAns)) {
    		System.out.println("중복값 발생! 다시 입력하세요");
    		System.out.println();
    		userAns = userInputAnswer();
    	}
    	return userAns;
    }
}




