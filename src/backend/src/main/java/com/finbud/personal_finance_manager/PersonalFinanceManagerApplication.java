package com.finbud.personal_finance_manager;

import com.finbud.personal_finance_manager.model.User;
import com.finbud.personal_finance_manager.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PersonalFinanceManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(PersonalFinanceManagerApplication.class, args);
	}

	@Bean
	public CommandLineRunner testUserRepo(UserRepository userRepo) {
		return args -> {
			String email = "andre@example.com";

			if (userRepo.findByEmail(email).isEmpty()) {
				User user = new User("andrewood", email);
				userRepo.save(user);
				System.out.println("User saved to database.");
			} else {
				System.out.println("User already exists.");
			}

			userRepo.findAll().forEach(System.out::println);
		};
	}

}