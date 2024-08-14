package com.aydakar.backend.Dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MessageResponse {
    private String content;
    private String playerName;
    private LocalDateTime createdAt;
}
