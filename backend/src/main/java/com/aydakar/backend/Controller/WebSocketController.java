package com.aydakar.backend.Controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {
    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public String processMessage(String message) throws Exception{
        return message;
    }
}
