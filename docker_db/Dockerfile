FROM postgres:alpine3.16

ENV POSTGRES_PASSWORD users

COPY create_users.sql /docker-entrypoint-initdb.d/create_users.sql
