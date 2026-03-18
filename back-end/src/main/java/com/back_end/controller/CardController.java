package com.back_end.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.back_end.entity.Card;
import com.back_end.service.CardService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cards")
public class CardController {

    private final CardService cardService;

    public CardController(CardService cardService){
        this.cardService = cardService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Card card){
        try{
            Card cardSaved = cardService.save(card);
            return new ResponseEntity<>(cardSaved, HttpStatus.OK);

        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("")
    public ResponseEntity<?> list(){
        try {
        	List <Card> cards =  cardService.findAll();
        	return new ResponseEntity<>(cards, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
    
    @GetMapping("/{idCard}")
    public ResponseEntity<?> findById(@PathVariable Long idCard){
        try {
        	Optional <Card> card = cardService.findById(idCard);
        	return new ResponseEntity<>(card, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
    
    @DeleteMapping("/{idCard}")
    public ResponseEntity<?> delete(@PathVariable Long idCard){
        try {
        	String response = cardService.delete(idCard);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
    
    @PutMapping("/{idCard}")
    public ResponseEntity<?> update(@PathVariable Long idCard, @RequestBody Card card){
        try {
        	Card cardUpdate = cardService.update(card);
        	return new ResponseEntity<>(cardUpdate, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}