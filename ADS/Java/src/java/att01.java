package java;

public class att01 {

		double valor = 100;
		double desconto = 10;
		
		double preco = valor -valor * ( desconto / 100 );
		preco += preco * 0.5;
		
		System.out.println("Preço final " + preco);
		
}

