package fr.homezone;

import javax.inject.Inject;
import javax.inject.Named;

import org.resthub.common.util.PostInitialize;

import fr.homezone.model.Sample;
import fr.homezone.repository.SampleRepository;

@Named("sampleInitializer")
public class SampleInitializer {

    @Inject
    @Named("sampleRepository")
    private SampleRepository sampleRepository;

    @PostInitialize
    public void init() {
    	for (int i = 0; i < 20; i++){
    		sampleRepository.save(new Sample("testSample" + i, "description" + i));
    	}
        
        
    }
}
