package tn.esprit.easyfund.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.easyfund.entities.Comment;
import tn.esprit.easyfund.repositories.CommentRepository;

import java.util.*;

@Service
@AllArgsConstructor
public class CommentService {
    @Autowired
    CommentRepository CommentRepository ;
    private CommentRepository commentRepository;

    public List<Comment> getLastTwoCommentsForAllProjects(List<Integer> projectIds) {
        List<Comment> lastTwoCommentsForAllProjects = new ArrayList<>();
        for (Integer projectId : projectIds) {
            List<Comment> lastTwoCommentsForProject = commentRepository.findLastTwoCommentsForProject(projectId);
            lastTwoCommentsForAllProjects.addAll(lastTwoCommentsForProject);
        }
        return lastTwoCommentsForAllProjects;
    }
    public List<Comment> findAll() {
        return CommentRepository.findAll();
    }

    public Comment retrieveComment(Integer id) {
        return CommentRepository.findById(id).get();
    }
    public Comment add(Comment comment) {
        return CommentRepository.save(comment);
    }

    public void delete(Integer id) {
        CommentRepository.deleteById(id);

    }
    public Comment update(Integer id ,Comment Comment) {
        Optional<Comment> existingCommentOptional = CommentRepository.findById(id);

        if (existingCommentOptional.isPresent()) {
            Comment existingComment = existingCommentOptional.get();
            existingComment.setComment(Comment.getComment());

            return CommentRepository.save(existingComment);
        } else {
            return null;
        }
    }
}
