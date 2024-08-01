package com.aydakar.backend.Controller;

import com.aydakar.backend.model.Position;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MovementController {
    private final Position position = new Position(250, 250);

    @MessageMapping("/movement")
    @SendTo("/topic/coordinates")
    public Position processMovement(String input){
        int step = 10;
        switch (input) {
            case "w":
                position.setY(Math.max(position.getY() - step, 0));
                break;
            case "s":
                position.setY(Math.min(position.getY() + step, 400));
                break;
            case "a":
                position.setX(Math.max(position.getX() - step, 0));
                break;
            case "d":
                position.setX(Math.min(position.getX() + step, 500));
                break;
            default:
                break;
        }
        System.out.println(input);
        System.out.println(position);
        return position;
    }
}
