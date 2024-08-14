package com.aydakar.backend.Dto;

import lombok.Data;

@Data
public class MessageRequest {
    private String content;
    private String playerName;
}
