FROM dockerfile/java                                           
MAINTAINER mikera

RUN sudo apt-get update

ADD target/mikerasite.jar /mikerasite.jar 

EXPOSE 8080                                                    

CMD ["java", "-jar", "/srv/my-app.jar"]                        