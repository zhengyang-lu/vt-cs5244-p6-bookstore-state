DELETE FROM book;
ALTER TABLE book AUTO_INCREMENT = 1001;

DELETE FROM category;
ALTER TABLE category AUTO_INCREMENT = 1001;

INSERT INTO `category` (`name`) VALUES ('Romance'),('Science Fiction & Fantasy'),('Mystery, Thriller & Suspense'),('History');

INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Pride and Prejudice', 'Jane Austen', '', 899, 0, TRUE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Pumpkin Spice Cafe', 'Laurie Gilmore', '', 099, 2, FALSE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Wild Card', 'Elsie Silver', '', 2999, 3, FALSE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The First Witch of Boston', 'Andrea Catalano', '', 2499, 4, FALSE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Boyfriend', 'Freida McFadden', '', 099, 5, FALSE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Eldritch', 'Keri Lake', '', 899, 2, FALSE, FALSE, 1001);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Project Hail Mary', 'Andy Weir', '', 1599, 0, FALSE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Quicksilver', 'Callie Hart', '', 1199, 2, FALSE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Dungeon Crawler Carl', 'Matt Dinniman', '', 2599, 4, FALSE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Fearful', 'Lauren Roberts', '', 399, 5, FALSE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('A Court of Thorns and Roses', 'Sarah J. Maas', '', 1199, 3, FALSE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Fahrenheit 451', 'Ray Bradbury', '', 599, 4, TRUE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Dating After the End of the World', 'Jeneva Rose', '', 2899, 3, FALSE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Onyx Storm', 'Rebecca Yarros', '', 2199, 3, FALSE, FALSE, 1002);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Academy', 'Elin Hilderbrand', '', 2599, 2, FALSE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Long Walk', 'Stephen King', '', 099, 4, FALSE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Secret of Secrets', 'Dan Brown', '', 1499, 2, FALSE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('We Are All Guilty Here', 'Karin Slaughter', '', 1599, 4, FALSE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Housemaid', 'Freida McFadden', '', 599, 5, FALSE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Broken Country', 'Clare Leslie Hall', '', 2699, 2, FALSE, FALSE, 1003);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('On Tyranny', 'Timothy Snyder', '', 1799, 4, FALSE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Complete Works of John Locke', 'John Locke', '', 1799, 5, TRUE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The 1619 Project', 'Nikole Hannah-Jones', '', 2099, 5, FALSE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Vatican Princess', 'Lucrezia Borgia', '', 1999, 5, FALSE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('Code Name Helene', 'Ariel Lawhon', '', 2799, 0, FALSE, FALSE, 1004);
INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('The Scarlet Letter', 'Nathaniel Hawthorne', '', 1399, 0, TRUE, FALSE, 1004);