package com.example.WanderPetsdemo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PetController {

	@GetMapping("/")
	public String index() {
		return "pet";
	}

}