-- Run the following SQL query to add a new table into the database:
-- CREATE TABLE sakila.StreamingServiceQueue(
--     queue_id INTEGER PRIMARY KEY AUTO_INCREMENT,
--     genre NVARCHAR(50) NOT NULL,
--     filmTitle NVARCHAR(50) NOT NULL,
--     streamAvailable BOOLEAN CHECK(streamAvailable IN (true, false))
-- );
-- Next, run the following insert statements to add some data to the Products table:
-- -- query 1
-- INSERT INTO sakila.StreamingServiceQueue (genre, filmTitle, streamAvailable)
-- VALUES ("Movies based on books","The Breadwinner", true)

-- -- query 2
-- INSERT INTO sakila.StreamingServiceQueue (genre, filmTitle, streamAvailable)
-- VALUES ("Emotional","Roma", false)

-- -- query 3
-- INSERT INTO sakila.StreamingServiceQueue (genre, filmTitle, streamAvailable)
-- VALUES ("Campy","To Wong Foo, Thanks for Everything Julie Newmar", true)

-- -- query 4
-- INSERT INTO sakila.StreamingServiceQueue (genre, filmTitle, streamAvailable)
-- VALUES ("Critically Acclaimed","A Single Man", true)
-- Run a query to see all of the films in your Streaming Service queue.

SELECT filmTitle FROM sakila.StreamingServiceQueue;

