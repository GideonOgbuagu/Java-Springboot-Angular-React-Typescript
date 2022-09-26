package com.example.demo;

import java.sql.Timestamp;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="actor")
public class Actor {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int actor_id;
    private String first_name;
    private String last_name;
    private Timestamp last_update;
    
    public int getActor_id() {
        return actor_id;
    }
    public void setActor_id(int actor_id) {
        this.actor_id = actor_id;
    }
    public String getFirst_name() {
        return first_name;
    }
    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }
    public String getLast_name() {
        return last_name;
    }
    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }
    public Timestamp getLast_update() {
        return last_update;
    }
    public void setLast_update(Timestamp last_update) {
        this.last_update = last_update;
        
    }
    
    public String toString()
    {
        return String.format("%s '%s' '%s' '%s'",actor_id,first_name,last_name,last_update.toString());
    }
}