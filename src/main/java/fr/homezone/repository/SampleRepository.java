package fr.homezone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.homezone.model.Sample;

public interface SampleRepository extends JpaRepository<Sample, Long> {

}
