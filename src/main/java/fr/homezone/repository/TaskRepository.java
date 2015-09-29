package fr.homezone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.homezone.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

    Task findByTitle(String title);

}
