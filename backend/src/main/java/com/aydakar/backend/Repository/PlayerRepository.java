package com.aydakar.backend.Repository;

import com.aydakar.backend.Entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PlayerRepository extends JpaRepository<Player,Long> {
    public Optional<Player> findByName(String name);
}
