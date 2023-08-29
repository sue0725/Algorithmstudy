package greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class 주식 {
    public static void main(String[] args) throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        int count = Integer.parseInt(br.readLine());

        for(int i=0; i<count; i++){
            int days = Integer.parseInt(br.readLine());
            String[] priceList = br.readLine().split(" ");
            long benefit = 0;
            int maxPrice = Integer.parseInt(priceList[priceList.length-1]); // 처음엔 마지막 날 주가를 최고 가격으로 설정

            // 역순 시작, 최고 가격보다 작으면 최대 이익에 누적
            for(int j=days-2; j>=0; j--){
                int price = Integer.parseInt(priceList[j]);

                if(price <= maxPrice) benefit += maxPrice - price;
                else maxPrice = price ;
            }
            System.out.println(benefit);
        }
    }
}
