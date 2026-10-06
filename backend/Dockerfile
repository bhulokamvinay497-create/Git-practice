FROM tomcat:10.1

WORKDIR /app

RUN rm -rf /usr/local/tomcat/webapps/ROOT/*

COPY target/appllicationdp-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war

EXPOSE 8080

CMD ["catalina.sh", "run"]
