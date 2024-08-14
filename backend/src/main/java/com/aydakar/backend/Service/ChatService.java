package com.aydakar.backend.Service;

import com.aydakar.backend.Dto.MessageRequest;
import com.aydakar.backend.Dto.MessageResponse;
import com.aydakar.backend.Entity.Message;
import com.aydakar.backend.Entity.Player;
import com.aydakar.backend.Repository.MessageRepository;
import com.aydakar.backend.Repository.PlayerRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class ChatService {
    private final MessageRepository messageRepository;
    private final PlayerRepository playerRepository;

    public ChatService(MessageRepository messageRepository, PlayerRepository playerRepository) {
        this.messageRepository = messageRepository;
        this.playerRepository = playerRepository;
    }

    @Transactional
    public MessageResponse handleMessage(MessageRequest messageRequest) {
        Player player = getOrCreatePlayer(messageRequest.getPlayerName());
        Message message = createMessage(messageRequest.getContent(), player);
        Message savedMessage = messageRepository.save(message);
        return createMessageResponse(savedMessage, player);
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

    private MessageResponse createMessageResponse(Message message, Player player) {
        MessageResponse response = new MessageResponse();
        response.setContent(message.getContent());
        response.setPlayerName(player.getName());
        response.setCreatedAt(message.getCreatedAt());
        return response;
    }
}