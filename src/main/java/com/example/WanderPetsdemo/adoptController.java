package com.example.WanderPetsdemo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class adoptController {

	@GetMapping("/adopt")
	public String volunteer() {
		return "adopt";
	}

}