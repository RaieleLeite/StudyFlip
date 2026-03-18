package com.back_end.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back_end.entity.Card;

public interface CardRepository extends JpaRepository<Card, Long> {
	Optional <Card> findById(Long id);
	
    Optional<Card> findByTitle(String title);

}