package com.nexus.calculator.repository.model;

import jakarta.persistence.*;

@Entity
@Table(name = "HISTORYENTRIES")
public class HistoryEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String expression;

    private String note;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getExpression() {
        return expression;
    }

    public void setExpression(String expression) {
        this.expression = expression;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
    public HistoryEntry() {

    }

    public HistoryEntry(int id, String expression, String note) {
        this.id = id;
        this.expression = expression;
        this.note = note;
    }
}
