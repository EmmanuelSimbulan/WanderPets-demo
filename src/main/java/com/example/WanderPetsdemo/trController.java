package com.example.WanderPetsdemo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class trController {

	@GetMapping("/tr")
	public String volunteer() {
		return "tr";
	}

}