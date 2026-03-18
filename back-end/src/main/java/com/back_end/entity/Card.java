package com.back_end.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "cards")
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    private String title;

    @NotNull
    private String answer;

    @NotNull
    private String category;


	public Long getId() {return id;}
	public void setId(Long id) {this.id = id;}

	public String getTitle() {return title;}
	public void setTitle(String title) {this.title = title;}

	public String getAnswer() {return answer;}
	public void setAnswer(String answer) {this.answer = answer;}

	public String getCategory() {return category;}
	public void setCategory(String category) {this.category = category;}
	
	/*
	public int getCorrect_count() {return correct_count;}
	public void setCorrect_count(int correct_count) {this.correct_count = correct_count;}

	public int getWrong_count() {return wrong_count;}
	public void setWrong_count(int wrong_count) {this.wrong_count = wrong_count;}

	public Date getCreated_at() {return created_at;}
	public void setCreated_at(Date created_at) {this.created_at = created_at;}*/
    
    
    
}
