package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class DatabaseOrmApplication {

	public static void main(String[] args) {
		SpringApplication.run(DatabaseOrmApplication.class, args);
	}

}

@Component
class TestRunner implements CommandLineRunner {
	
	@Autowired
	ActorRepository dao;
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("The command Line runner is invoked");
		
		try {
			var data = dao.findAll();
			for(var r : data) {
				System.out.println(r);
			}
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}
}

@Component
class Test2Runner implements CommandLineRunner {
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("The command Line runner is invoked");
		for(int i = 0; i < 20; i++) {
			System.out.println("Waiting for 500ms at count " + i + "of 20 total");
			Thread.sleep(500);
		}
	}
}


