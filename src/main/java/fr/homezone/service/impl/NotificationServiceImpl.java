package fr.homezone.service.impl;

import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import fr.homezone.service.NotificationService;

@Named("notificationService")
public class NotificationServiceImpl implements NotificationService {

    protected static final Logger logger = LoggerFactory.getLogger(NotificationService.class);

    @Override
    public void send(String email, String message) {
        logger.info("New message for " + email + ": " + message);
    }
}
