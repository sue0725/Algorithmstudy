package greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 주유소 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int countries = Integer.parseInt(br.readLine());
        String[] distances = br.readLine().split(" ");
        String[] prices = br.readLine().split(" ");
        long sum = 0;

        int lowPrice = Integer.MAX_VALUE;
        for(int i = 0 ; i<countries-1 ; i++){
            lowPrice = Math.min(lowPrice, Integer.parseInt(prices[i]));
            sum += lowPrice * Long.parseLong(distances[i]);
        }
        System.out.println(sum);
    }
}
