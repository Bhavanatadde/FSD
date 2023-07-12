create database movie;
use movie;
create table directors(director_id int primary key,director_name varchar(20));
create table movies(movie_id int primary key,title varchar(20),release_year int,director_id int ,foreign key (director_id)references directors(director_id));
create table genres(genre_id int primary key,genre_name varchar(20));
create table movie_genres(movie_id int,genre_id int,foreign key (movie_id) references movies (movie_id) ,foreign key (genre_id) references genres (genre_id));
insert into directors values(101,"rahul kapoor");
insert into directors(director_id,director_name) values (102,"priya sharma"),(103,"sanjay gupta"),(104,"aishwarya rao"),(105,"rajesh");
insert into movies(movie_id,title,release_year,director_id) values (1,"the hidden gem",2015,101),(2,"midnight chronicles",2018,102),(3,"destiny",2019,103);
insert into genres(genre_id,genre_name) values (201,"comedy"),(301,"mystery"),(202,"romance"),(401,"drama");
insert into movie_genres values(1,201),(2,301);
/*query1*/
select movies.title,directors.director_name from movies join directors on movies.director_id=directors.director_id; 
/*query2*/
select movies.title as movie, movies.release_year, directors.director_name from movies join directors on movies.director_id = directors.id;                                                                         select movies.title as movie, movies.release_year, directors.director_name from movies join directors on movies.director_id = directors.id;
/*query3*/
select directors.director_name,movies.title from directors left join movies on directors.director_id=movies.director_id;
/*query4*/
select movies.title,movies.release_year,directors.director_name from movies left join directors on movies.director_id=directors.director_id;
/*query5*/
select movies.title,genres.genre_name from movies,genres;