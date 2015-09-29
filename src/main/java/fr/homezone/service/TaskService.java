package fr.homezone.service;

import org.resthub.common.service.CrudService;

import fr.homezone.model.Task;

public interface TaskService extends CrudService<Task, Long> {

    Task affectTaskToUser(Long taskId, Long userId);
    Task findByTitle(String title);

}
