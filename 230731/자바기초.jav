// main 메서드: 프로그램 시작점 main이 끝나면 프로그램이 종료됨

package com.arrcon.intro01;

public class Review3Main {

	public static void main(String[] args) {
		String day = "수";
		switch(day) {
		case "월": 
			System.out.printIn("주중1");
			break;
			
		case "화":
			System.out.printIn("주중2");
			break;
			
		case "수":
			System.out.printIn("주중3");
			break;
			
		case "목": 
			System.out.printIn("주중4");
			break;
			
		case "금": 
			System.out.printIn("주중5");
			break;
		
		}
	}
}
