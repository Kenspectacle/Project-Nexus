package com.nexus.calculator.config.model;

import jakarta.persistence.*;

@Entity
@Table(name = "HISTORYENTRIES")
public class HistoryEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String expression;

    private String comment;

    public HistoryEntry() {

    }

    public HistoryEntry(String expression, String comment) {
        this.expression = expression;
        this.comment = comment;
    }
}
