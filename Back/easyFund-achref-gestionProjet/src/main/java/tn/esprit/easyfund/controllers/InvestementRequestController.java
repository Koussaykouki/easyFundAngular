package tn.esprit.easyfund.controllers;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.easyfund.entities.InvestementRequest;
import tn.esprit.easyfund.services.InvestementRequest.IInvestementRequestService;
import tn.esprit.easyfund.services.InvestementRequest.InvestementRequestService;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
@RequestMapping("/InvestementRequest")
public class InvestementRequestController
{
    @Autowired
    InvestementRequestService investementRequestService;

    @PostMapping("/addinvest")
    public ResponseEntity<?> addInvestment(@RequestParam Integer projectId, @RequestParam Long investmentAmount) {
        investementRequestService.addInvestmentToProject(projectId, investmentAmount);
        return ResponseEntity.ok("Investment added successfully");
    }
    @GetMapping("/get_all_InvestementRequests")
    public List<InvestementRequest> findAll() {
        return investementRequestService.findAll();
    }

    @PutMapping("/updateInvestementRequest/{id}")
    public InvestementRequest update(@RequestBody InvestementRequest InvestementRequest ,@PathVariable("id") Integer id) {
        return investementRequestService.update(id,InvestementRequest);
    }

    @DeleteMapping("/deleteInvestementRequest/{InvestementRequestId}")
    public void delete(@PathVariable("InvestementRequestId") Integer InvestementRequestId) {
        investementRequestService.delete(InvestementRequestId);
    }
}
