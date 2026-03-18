package main.java.com.back_end.entity;

@Entity
@Table(name = "cards")
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String question;

    private String answer;

    private String category;

    private int correct_count;
    
    private int wrong_count;
    
    private DateTime created_at;
}
