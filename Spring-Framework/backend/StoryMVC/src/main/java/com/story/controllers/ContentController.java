package com.story.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.story.models.Content;

@Controller
@RequestMapping({"/", "/home"})
public class ContentController {
	@GetMapping("/")
	public String index() {
		return "index";
	}
	@GetMapping("/beginning")
	public String getBeginning(Model model) {
		return "beginning";
	}
	@GetMapping("/middle")
	public String getMiddle(Model model) {
		return "middle";
	}
	@GetMapping("/end")
	public String getEnd(Model model) {
		return "end";
	}
	@GetMapping("/fullstory")
	public String getFullStory(Model model) {
		model.addAttribute("content", new Content());
		return "fullstory";
	}
	@PostMapping("/submit")
	public String submitFullStory(@ModelAttribute Content content) {
		return "result";
	}
}
