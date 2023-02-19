package com.example.WanderPetsdemo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class resController {

	@GetMapping("/res")
	public String res() {
		return "res";
	}

}