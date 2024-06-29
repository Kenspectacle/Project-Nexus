package com.nexus.calculator.service;

import com.nexus.calculator.repository.model.HistoryEntry;
import com.nexus.calculator.repository.model.HistoryEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HistoryEntryService {

    @Autowired
    private HistoryEntryRepository repository;

    // Post method
    public HistoryEntry saveHistoryEntry(HistoryEntry historyEntry) {
        return repository.save(historyEntry);
    }

    // Get method
    public List<HistoryEntry> getHistoryEntries() {
        return repository.findAll();
    }

    // Update method
    public Optional<HistoryEntry> updateHistoryEntry(HistoryEntry historyEntry) {
        Optional<HistoryEntry> existingHistoryEntryOpt = repository.findById(historyEntry.getId());
        if (existingHistoryEntryOpt.isPresent()) {
            HistoryEntry existingHistoryEntry = existingHistoryEntryOpt.get();
            existingHistoryEntry.setExpression(historyEntry.getExpression());
            existingHistoryEntry.setNote(historyEntry.getNote());
            return Optional.of(repository.save(existingHistoryEntry));
        } else {
            return Optional.empty();
        }
    }

    // Delete method
    public String deleteHistoryEntry(Long id) {
        repository.deleteById(id);
        return "History Entry deleted";
    }
}
