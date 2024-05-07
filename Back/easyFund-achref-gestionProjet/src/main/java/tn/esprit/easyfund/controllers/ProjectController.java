package tn.esprit.easyfund.controllers;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.easyfund.entities.Project;
import tn.esprit.easyfund.repositories.ProjectRepository;
import tn.esprit.easyfund.services.CloudinaryService;
import tn.esprit.easyfund.services.InvestementRequest.InvestementRequestService;
import tn.esprit.easyfund.services.Project.ProjectService;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
@RequestMapping("/Project")
public class ProjectController
{
    ProjectService ProjectService;
    CloudinaryService cloudinaryService ;

    ProjectRepository projectRepository;

    @PostMapping("/add-Project")

    public ResponseEntity<Project> addProject( @RequestParam("projet") String projetDTOString, @RequestParam("file") MultipartFile file) throws JsonProcessingException{
        Project projetDTO = new ObjectMapper().readValue( projetDTOString,  Project.class);
        String imageUrl = cloudinaryService.uploadImage(file);
        projetDTO.setImageUrl(imageUrl);
         ProjectService.add(projetDTO);
        return new ResponseEntity<>(projetDTO, HttpStatus.CREATED);
    }


    @GetMapping("/get_all_Projects")
    public List<Project> findAll() {
        return ProjectService.findAll();
    }

    @PutMapping("/updateProject/{id}")
    public Project update(@RequestBody Project Project ,@PathVariable("id") Integer id) {
        return ProjectService.update(id,Project);
    }

    @GetMapping("/details/{id}")
    public Project getbyid(@PathVariable("id") Integer id) {
        return projectRepository.findById(id).orElseThrow(null);
    }


    @DeleteMapping("/deleteProject/{projectId}")
    public void delete(@PathVariable("projectId") Integer projectId) {
        ProjectService.delete(projectId);
    }
}
