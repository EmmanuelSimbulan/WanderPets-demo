package com.example.WanderPetsdemo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class eventsController {

	@GetMapping("/events")
	public String volunteer() {
		return "events";
	}

}