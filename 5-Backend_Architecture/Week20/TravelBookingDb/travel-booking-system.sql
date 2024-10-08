-- CREATE TABLE Flights (
--     flight_id INTEGER PRIMARY KEY,
--     origin TEXT NOT NULL,
--     destination TEXT NOT NULL,
--     departure_time TEXT NOT NULL,
--     arrival_time TEXT NOT NULL,
--     price REAL NOT NULL
-- );
-- CREATE TABLE Users(
--     user_id INTEGER PRIMARY KEY,
--     name TEXT NOT NULL,
--     email TEXT NOT NULL UNIQUE
-- );
-- INSERT INTO Flights (
--         origin,
--         destination,
--         departure_time,
--         arrival_time,
--         price
--     )
-- VALUES(
--         'FR',
--         'BR',
--         '2024-10-05 08:00',
--         '2024-10-05 09:00',
--         500
--     );
-- INSERT INTO Flights (
--         origin,
--         destination,
--         departure_time,
--         arrival_time,
--         price
--     )
-- VALUES (
--         'New York',
--         'London',
--         '2024-10-01 08:00',
--         '2024-10-01 20:00',
--         500.00
--     );
-- INSERT INTO Flights (
--         origin,
--         destination,
--         departure_time,
--         arrival_time,
--         price
--     )
-- VALUES (
--         'Paris',
--         'Berlin',
--         '2024-10-05 09:30',
--         '2024-10-05 11:45',
--         300.00
--     );
-- INSERT INTO Users (name, email)
-- VALUES ('Alice Johnson', 'alice.j@example.com');
-- INSERT INTO Users (name, email)
-- VALUES ('Bob Smith', 'bob.s@example.com');
-- UPDATE Flights
-- SET origin = 'Denmark'
-- WHERE flight_id = 3;
-- UPDATE Flights
-- SET destination = 'Malta'
-- WHERE flight_id = 3;
-- UPDATE Flights
-- SET departure_time = '2024-11-15 15:00'
-- WHERE flight_id = 3;
-- Update a user's email
-- UPDATE Users
-- SET email = 'alice.new@example.com'
-- WHERE user_id = 1;
-- Delete a flight from the Flights table
-- DELETE FROM Flights
-- WHERE flight_id = 1;
-- -- Delete a user from the Users table
-- DELETE FROM Users
-- WHERE user_id = 2;
-- Insert additional flight data
-- INSERT INTO Flights (
--         origin,
--         destination,
--         departure_time,
--         arrival_time,
--         price
--     )
-- VALUES (
--         'San Francisco',
--         'Tokyo',
--         '2024-11-01 06:00',
--         '2024-11-01 18:00',
--         700.00
--     );
-- INSERT INTO Flights (
--         origin,
--         destination,
--         departure_time,
--         arrival_time,
--         price
--     )
-- VALUES (
--         'Los Angeles',
--         'Paris',
--         '2024-12-01 07:30',
--         '2024-12-01 19:00',
--         600.00
--     );
-- INSERT INTO Flights (
--         origin,
--         destination,
--         departure_time,
--         arrival_time,
--         price
--     )
-- VALUES (
--         'New York',
--         'Berlin',
--         '2024-10-10 09:00',
--         '2024-10-10 21:00',
--         650.00
--     );
-- CREATE TABLE Bookings (
--     booking_id INTEGER PRIMARY KEY,
--     user_id INTEGER,
--     flight_id INTEGER,
--     booking_date TEXT NOT NULL,
--     FOREIGN KEY (user_id) REFERENCES Users(user_id),
--     FOREIGN KEY (flight_id) REFERENCES Flights(flight_id)
-- );
-- Insert sample bookings
-- INSERT INTO Bookings (user_id, flight_id, booking_date)
-- VALUES (1, 6, '2024-09-15');
-- INSERT INTO Bookings (user_id, flight_id, booking_date)
-- VALUES (2, 3, '2024-09-16');
-- INSERT INTO Bookings (user_id, flight_id, booking_date)
-- VALUES (1, 4, '2024-09-17');
-- SELECT COUNT(*) AS total_flights
-- FROM Flights;
-- SELECT COUNT(*) AS total_flights_6
-- FROM Flights
-- WHERE price > 600;
-- SELECT *
-- FROM Flights
-- WHERE price > 600;
-- SELECT SUM(Flights.price) AS total_price
-- FROM Flights;
SELECT *
FROM Flights;
SELECT *
FROM Users;
SELECT *
FROM Bookings;
-- SELECT Users.name,
--     Flights.origin,
--     Flights.destination,
--     Flights.price,
--     Bookings.booking_date
-- FROM Bookings
--     INNER JOIN Users ON Bookings.user_id = Users.user_id
--     INNER JOIN Flights ON Bookings.flight_id = Flights.flight_id;
SELECT Users.name,
    Bookings.booking_id,
    Bookings.booking_date
FROM Users
    LEFT JOIN Bookings ON Users.user_id = Bookings.user_id;