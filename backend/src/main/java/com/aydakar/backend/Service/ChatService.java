package com.aydakar.backend.Service;

import com.aydakar.backend.Entity.Message;
import org.springframework.stereotype.Service;

@Service
public class ChatService {
    public Message handleMessage(Message message) {
        return message;
    }
}
