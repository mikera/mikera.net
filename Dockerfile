FROM dockerfile/java                                           
MAINTAINER mikera

RUN sudo apt-get update

ADD target/my-app-0.0.1-SNAPSHOT-standalone.jar /srv/my-app.jar 

EXPOSE 8080                                                    

CMD ["java", "-jar", "/srv/my-app.jar"]                        