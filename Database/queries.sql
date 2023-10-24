

CREATE DATABASE DockerTodo

USE DockerTodo
CREATE TABLE TodosTable(Id VARCHAR(255), Title VARCHAR(255) , Description VARCHAR(255))

SELECT * FROM TodosTable

CREATE PROCEDURE insertTodo( @id VARCHAR(255), @title VARCHAR(255) , @desc VARCHAR(255))
AS
BEGIN

INSERT INTO TodosTable(Id,Title,Description) VALUES(@id,@title,@desc)

END

CREATE PROCEDURE getTodos
AS
BEGIN

SELECT * FROM TodosTable

END