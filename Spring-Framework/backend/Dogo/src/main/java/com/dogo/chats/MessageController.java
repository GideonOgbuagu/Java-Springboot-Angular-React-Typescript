package com.dogo.chats;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MessageController {
	
	
	@Autowired
	MessageRepository dao;
	// Read Message
	
	@GetMapping("/api/chat")
	public List<Message> getMessages(Model model) {
		List<Message> foundMessages = dao.findAll();
		return foundMessages;
	}
	
	@GetMapping("/chat")
	public String getChat() {
		
		return "chat.html";
	}
	// Read Message by id
    @GetMapping("/chat/{id}")
    public ResponseEntity<Message> getMessage(@PathVariable(value="id") Integer id) {
        Message foundMessage = dao.findById(id).orElse(null);

        if(foundMessage == null) {
            return ResponseEntity.notFound().header("Message","Nothing found with that id").build();
        }
        return ResponseEntity.ok(foundMessage);
    }
    
    // Create Message
	@PostMapping("/chat")
	public ResponseEntity<Message> postMessage(@RequestBody Message message) {

	    // Saving to DB using an instance of the repo interface.
	    Message createdMessage = dao.save(message);

	    // RespEntity crafts response to include correct status codes.
	    return ResponseEntity.ok(createdMessage);
	}
	// Update Message by id
	@PutMapping("/chat/{id}")
	public ResponseEntity<Message> updateMessage(@PathVariable(value="id") Integer id, @RequestBody Message message) {
		Message foundMessage = dao.findById(id).orElse(null);
		Message updatedMessage = dao.save(message);
		
		if(foundMessage == null) {
			return ResponseEntity.notFound().header("Message","Nothing found with that id").build(); 
		}else {
			dao.save(updatedMessage);
		}
		
		return ResponseEntity.ok(updatedMessage);
	}
	// Delete Message by id
    @DeleteMapping("/chat/{id}")
    public ResponseEntity<Message> deleteMessage(@PathVariable(value="id") Integer id) {
        Message foundMessage = dao.findById(id).orElse(null);

        if(foundMessage == null) {
            return ResponseEntity.notFound().header("Message","Nothing found with that id").build();
        }else {
            dao.delete(foundMessage);
        }
        return ResponseEntity.ok().build();
    }
		
		
}
