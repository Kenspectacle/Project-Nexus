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

    public HistoryEntry() {

    }

    public HistoryEntry(int id, String expression, String note) {
        this.id = id;
        this.expression = expression;
        this.note = note;
    }
}
