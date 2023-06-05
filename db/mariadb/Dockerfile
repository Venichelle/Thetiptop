FROM mariadb:latest


ENV MYSQL_ROOT_PASSWORD=test
ENV MYSQL_DATABASE=test
ENV MYSQL_USER=test
ENV MYSQL_PASSWORD=test

RUN apt-get update && apt-get -y install vim
COPY $PWD/db/mariadb/my.cnf /etc/mysql/mysql.conf.d/my.cnf

EXPOSE 3307

CMD ["mysqld"]