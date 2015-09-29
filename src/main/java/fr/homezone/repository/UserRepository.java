package fr.homezone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.homezone.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
