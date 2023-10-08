
FROM tomcat:latest

COPY ./645hw2.war /usr/local/tomcat/webapps/645hw2.war

EXPOSE 8080

CMD ["catalina.sh", "run"]
