package com.nexus.calculator.api.controller;

import com.nexus.calculator.repository.model.HistoryEntry;
import com.nexus.calculator.service.HistoryEntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class HistoryEntryController {

    @Autowired
    public HistoryEntryService service;

    @GetMapping("/HistoryEntry")
    public List<HistoryEntry> getHistoryEntry() {
        return service.getHistoryEntries();
    }

    @PostMapping("/addHistoryEntry")
    public HistoryEntry addHistoryEntry(@RequestBody HistoryEntry historyEntry) {
        return service.saveHistoryEntry(historyEntry);
    }

    @PutMapping("/updateHistoryEntry")
    public Optional<HistoryEntry> updateHistoryEntry(@RequestBody HistoryEntry historyEntry) {
        return service.updateHistoryEntry(historyEntry);
    }

    @DeleteMapping("/deleteHistoryEntry/{id}")
    public void deleteHistoryEntry(@PathVariable long id) {
        service.deleteHistoryEntry(id);
    }

}
