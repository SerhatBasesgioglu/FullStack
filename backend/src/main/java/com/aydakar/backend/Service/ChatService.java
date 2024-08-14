package com.aydakar.backend.Service;

import com.aydakar.backend.Dto.MessageRequest;
import com.aydakar.backend.Entity.Message;
import com.aydakar.backend.Entity.Player;
import com.aydakar.backend.Repository.MessageRepository;
import com.aydakar.backend.Repository.PlayerRepository;
import org.springframework.stereotype.Service;

@Service
public class ChatService {
    private final MessageRepository messageRepository;
    private final PlayerRepository playerRepository;

    public ChatService(MessageRepository messageRepository, PlayerRepository playerRepository) {
        this.messageRepository = messageRepository;
        this.playerRepository = playerRepository;
    }

    public Message handleMessage(MessageRequest messageRequest) {
        Player player = getOrCreatePlayer(messageRequest.getPlayerName());
        Message message = createMessage(messageRequest.getContent(), player);
        return messageRepository.save(message);
    }

    private Player getOrCreatePlayer(String playerName) {
        return playerRepository.findByName(playerName)
                .orElseGet(() -> createNewPlayer(playerName));
    }

    private Player createNewPlayer(String playerName) {
        Player newPlayer = new Player();
        newPlayer.setName(playerName);
        return playerRepository.save(newPlayer);
    }

    private Message createMessage(String content, Player player) {
        Message message = new Message();
        message.setContent(content);
        message.setPlayer(player);
        return message;
    }
}