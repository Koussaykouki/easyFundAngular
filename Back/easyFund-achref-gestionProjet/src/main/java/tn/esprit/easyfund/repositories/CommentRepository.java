package tn.esprit.easyfund.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.esprit.easyfund.entities.Comment;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    @Query("SELECT c FROM Comment c WHERE c.project.projectId = ?1 ORDER BY c.date DESC LIMIT 2")
    List<Comment> findLastTwoCommentsForProject(Integer projectId);
}
