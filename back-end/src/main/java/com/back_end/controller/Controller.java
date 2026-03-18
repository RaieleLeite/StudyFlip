package main.java.com.back_end.controller;

@RestController
@RequestMapping("/cards")
public class Controller {

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody Card card){

    }


    
}
