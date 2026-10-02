package com.vinay.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://35.154.176.195:8081")
public class ApplicationdpApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApplicationdpApplication.class, args);
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello from Applicationdp Backend!";
    }
}
