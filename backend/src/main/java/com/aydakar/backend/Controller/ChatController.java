package com.aydakar.backend.Controller;

import com.aydakar.backend.Entity.Message;
import com.aydakar.backend.Service.ChatService;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
    private final ChatService chatService;

    public ChatController(ChatService chatService){
        this.chatService = chatService;

    }
    @MessageMapping("/chat")
    @SendTo("/topic/chat")
    public Message handleMessage(Message message){
        return chatService.handleMessage(message);
    }
}
