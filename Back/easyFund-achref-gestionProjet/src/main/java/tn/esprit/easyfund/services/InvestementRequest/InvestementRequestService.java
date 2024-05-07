package tn.esprit.easyfund.services.InvestementRequest;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.easyfund.entities.InvestementRequest;
import tn.esprit.easyfund.entities.Project;
import tn.esprit.easyfund.entities.ProjectRating;
import tn.esprit.easyfund.repositories.InvestementRequestRepository;
import tn.esprit.easyfund.repositories.ProjectRepository;
import tn.esprit.easyfund.services.ICRUDService;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@AllArgsConstructor
public class InvestementRequestService implements ICRUDService<InvestementRequest,Integer>,IInvestementRequestService
{
    @Autowired
    InvestementRequestRepository investementRequestRepository ;
    ProjectRepository projectRepository ;
    @Override
    public List<InvestementRequest> findAll() {
        return investementRequestRepository.findAll();
    }

    @Override
    public InvestementRequest retrieveItem(Integer idItem) {
        return investementRequestRepository.findById(idItem).get();
    }

    @Override
    public InvestementRequest add(InvestementRequest class1) {
        return investementRequestRepository.save(class1);
    }

    @Override
    public void delete(Integer id) {
        investementRequestRepository.deleteById(id);

    }

    @Override
    public InvestementRequest update(Integer id ,InvestementRequest InvestementRequest) {
        Optional<InvestementRequest> existingInvestementRequestOptional = investementRequestRepository.findById(id);

        if (existingInvestementRequestOptional.isPresent()) {
            InvestementRequest existingInvestementRequest = existingInvestementRequestOptional.get();
            existingInvestementRequest.setAmountInvested(InvestementRequest.getAmountInvested());

            return investementRequestRepository.save(existingInvestementRequest);
        } else {
            return null;
        }
    }
    public void addInvestmentToProject(Integer projectId, Long investmentAmount) {
        Optional<Project> optionalProject = projectRepository.findById(projectId);
        if (optionalProject.isPresent()) {
            Project project = optionalProject.get();
            Long currentAmount = project.getCurrentAmount() != null ? project.getCurrentAmount() : 0L;
            project.setCurrentAmount(currentAmount + investmentAmount);
            projectRepository.save(project);
        } else {
            log.info("Project with ID " + projectId + " not found");
        }
    }
}
