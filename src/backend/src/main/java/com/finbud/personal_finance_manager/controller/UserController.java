package com.finbud.personal_finance_manager.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/")
    public String greet() {
        return "Hello World from FinBud!";
    }
}
