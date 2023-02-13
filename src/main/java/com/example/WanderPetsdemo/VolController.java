package com.example.WanderPetsdemo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class VolController {

	@GetMapping("/volunteer")
	public String volunteer() {
		return "volunteer";
	}

}