package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DatabaseDemoApplication {

	public static void main(String[] args) {
		System.out.println("Starting the Application");
		SpringApplication.run(DatabaseDemoApplication.class, args);

		System.out.println("Starting the Application");

		Connection con;

		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/sakila", "root", "Password1");

			Statement myStatement = con.createStatement();

			ResultSet cursor = myStatement.executeQuery("SELECT * from customer");

			ResultSetMetaData metadata = cursor.getMetaData();

			System.out.println("Meta-Data: " + metadata);

			int numberOfColumns = metadata.getColumnCount();

			System.out.println("There are " + numberOfColumns + " columns present");
			for (int i = 1; i <= numberOfColumns; i++) {
				System.out.print(metadata.getColumnName(i));
				System.out.print(' ');
			}
			System.out.println();

			while (cursor.next()) {
				for (int i = 1; i < numberOfColumns; i++) {
					System.out.println(cursor.getObject(i));
					System.out.println(' ');
				}
				System.out.println();
			}

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		System.out.println("Exiting the Application");
	}

}
