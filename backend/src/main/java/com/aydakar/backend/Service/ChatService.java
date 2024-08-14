package com.aydakar.backend.Service;

import com.aydakar.backend.Entity.Message;
import com.aydakar.backend.Repository.MessageRepository;
import org.springframework.stereotype.Service;

@Service
public class ChatService {
    private final MessageRepository messageRepository;

    public ChatService(MessageRepository messageRepository){
        this.messageRepository = messageRepository;
    }

    public Message handleMessage(Message message) {
        messageRepository.save(message);
        return message;
    }
}
