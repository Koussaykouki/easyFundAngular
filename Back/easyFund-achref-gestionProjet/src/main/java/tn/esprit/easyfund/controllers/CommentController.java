package tn.esprit.easyfund.controllers;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.easyfund.entities.Comment;
import tn.esprit.easyfund.entities.Project;
import tn.esprit.easyfund.entities.User;
import tn.esprit.easyfund.repositories.ProjectRepository;
import tn.esprit.easyfund.repositories.UserRepository;
import tn.esprit.easyfund.services.CommentService;
import tn.esprit.easyfund.services.Project.ProjectService;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
@RequestMapping("/Comment")
public class CommentController {
    @Autowired
    CommentService CommentService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    ProjectRepository projectRepository;
    ProjectService projectService ;
    @PostMapping("/add-Comment/{iduser}/{idproject}/{comments}")
    @ResponseBody
    public Comment addComment(@PathVariable("iduser") Integer iduser,@PathVariable("idproject") Integer idproject,@PathVariable("comments") String comments) {
        Comment b = new Comment();
        User user = userRepository.findById(iduser).orElseThrow(()-> new EntityNotFoundException("user not found "));
        b.setUser(user);
        Project project = projectRepository.findById(idproject).get();
        b.setProject(project);
        b.setDate(new Date());
        b.setComment(comments);
        return CommentService.add(b);
    }
    @GetMapping("/get_all_Comments")
    public List<Comment> findAll() {
        return CommentService.findAll();
    }


    @PutMapping("/updateComment/{id}")
    public Comment update(@RequestBody Comment Comment ,@PathVariable("id") Integer id) {
        return CommentService.update(id,Comment);
    }

    @DeleteMapping("/deleteComment/{CommentId}")
    public void delete(@PathVariable("CommentId") Integer CommentId) {
        CommentService.delete(CommentId);
    }

    @GetMapping("/last_two_for_all_projects")
    public List<Comment> getLastTwoCommentsForAllProjects() {
        List<Project> projects = projectService.findAll(); // Obtenez tous les projets
        List<Integer> projectIds = new ArrayList<>();
        for (Project project : projects) {
            projectIds.add(project.getProjectId());
        }
        return CommentService.getLastTwoCommentsForAllProjects(projectIds);
    }
}

