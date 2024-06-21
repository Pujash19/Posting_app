# Basic Posting App in Vanilla PHP

This is a simple web application written in vanilla PHP that allows users to create, view, and delete posts. It uses a MySQL databse to store posts.

## Features

- **Create Post**: Users can create a new post by filling out a form with a title and content.
- **View Post**: Users can view a list of all posts and click on a post to view its details.
- **Delete Post**: Users can delete a post.

## Screenshots

- **Home :**
  ![Home](https://github.com/Pujash19/Posting_app/blob/main/Posting-App-PHP-main/screenshots/home.png)

- **Create :**
  ![Create](https://github.com/Pujash19/Posting_app/blob/main/Posting-App-PHP-main/screenshots/create.png)

- **Post :**
  ![Post](https://github.com/Pujash19/Posting_app/blob/main/Posting-App-PHP-main/screenshots/post.png)

- **Errors :**
  ![Errors](https://github.com/Pujash19/Posting_app/blob/main/Posting-App-PHP-main/screenshots/errors.png)

## Requirements

- PHP 7.0 or higher
- Web server (e.g., Apache, Nginx)
- MySQL database (optional, for future enhancements)

## Installation

### Setting Up the Database

1. Create Database Schema:
   - Run the `postsdb.sql` file to create the `postsdb` database and the `posts` table. You can do this using a MySQL client such as phpMyAdmin or the MySQL command line interface.

   ```bash
   mysql -u your_username -p postsdb < postsdb.sql
   ```

2. Configure Database Connection:
   - Update the database connection settings in your PHP application to connect to the `postsdb` database (change `your_username` and `your_password`).

## Usage

1. **Create Post**: Click on the "Create Post" link in the navigation menu and fill out the form.
2. **View Post**: Click on the "View Posts" link in the navigation menu to see a list of all posts. Click on a post to view its details.
3. **Delete Post**: Click on the "Delete" button next to a post to delete it.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.


