package com.back_end.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.back_end.entity.Card;
import com.back_end.repository.CardRepository;

@Service
public class CardService {

    private final CardRepository cardRepository;

    public CardService(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    public Card save(Card card) {
        return cardRepository.save(card);
    }

    public List<Card> findAll() {
        return cardRepository.findAll();
    }

    public Optional<Card> findById(Long id) {
        return cardRepository.findById(id);
    }

    public String delete(Long id) {
        Card card = cardRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Card não encontrado"));

        cardRepository.delete(card);
        
        return "Card deletado com sucesso !";
    }

    public Card update(Card card) {
        Card cardFound = cardRepository.findById(card.getId())
                .orElseThrow(() -> new IllegalArgumentException("Card não encontrado"));

        cardFound.setTitle(card.getTitle());
        cardFound.setAnswer(card.getAnswer());
        cardFound.setCategory(card.getCategory());


        return cardRepository.save(cardFound);
    }
}