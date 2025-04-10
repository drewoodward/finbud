package com.finbud.personal_finance_manager;

import org.springframework.web.bind.annotation.RequestMapping;

public class HelloController {
    @RequestMapping("/hello")
    public String hello() { return "Hello World!"; }
}
