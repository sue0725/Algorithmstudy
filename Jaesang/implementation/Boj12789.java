// Boj12789 도키도키 간식드리미

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 
        
        int n = Integer.parseInt(br.readLine());// 학생 수
        
        StringTokenizer st = new StringTokenizer(br.readLine());

        
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        Stack<Integer> myStack = new Stack<>();
        int arrIdx = 0;
        int target = 1;
        boolean niceOrSad = true;



        // stack 이 비거나 arr가 빌 때 까지 반복합니다.
        while (!myStack.isEmpty() || arrIdx < n) {
            if (!myStack.isEmpty() && myStack.peek() == target) {
                // stack의 맨 앞 학생이 맞는 번호표라면 그 학생은 간식을 받습니다.
                target++; // 받을 번호표 값을 1증가합니다.
                myStack.pop(); // stack에 맨 앞 학생은 간식을 받았으므로 stack에서 빠집니다. 
            } else if (arrIdx < n && arr[arrIdx] == target) {
                arrIdx++;// arr의 맨 앞 학생이 맞는 번호표를 갖고 있다면 맨 앞 학생이 간식을 받습니다.
                target++; // 받을 번호표 값을 1 증가합니다.

            } else if (arrIdx < n) {
                myStack.push(arr[arrIdx]);
                arrIdx++; // stack의 맨 앞 학생과 arr의 맨 앞 학생 모두 옳은 번호표가 없다면 arr의 맨 앞 학생을 stack에 보냅니다.
            } else {
                niceOrSad = false;
                break;
            // arr에 학생이 없다면, stack에 학생이 있거나 없거나 일 경우일 것입니다.
            // arr에 학생이 없고 
            // stack에 학생이 있을 때, stack의 맨 앞에 학생이 옳바른 번호가 아닐 경우 그 간식 이벤트에서는 옳바른 순서대로 간식을 받을 수 없습니다.
        }

        if (!myStack.isEmpty()) {
            while (!myStack.isEmpty()) {
                int student = myStack.pop();
                if (student == target) {
                    target++;
                } else {
                    niceOrSad = false;
                    break;
                }
            }
        }
// stack에만 학생이 남았을 때, 남은 학생들이 옳바른 순서대로 간식을 받으면 nice 아니면 Sad
        System.out.println(niceOrSad ? "Nice" : "Sad");
    }
}