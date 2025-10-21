import json
import random

with open("db.json", "r", encoding="utf-8") as f:
    data = json.load(f)

books = data["books"]

for book in books:
    title = book["title"]
    author = book["author"]
    category_id = book["categoryId"]
    is_public = book["isPublic"]
    if is_public:
        is_public_sql = "TRUE"
    else:
        is_public_sql = "FALSE"
    rating = random.randint(0, 5)
    cost = random.randint(0, 29)

    print(
        f"INSERT INTO `book` (title, author, description, price, rating, is_public, is_featured, category_id) VALUES ('{title}', '{author}', '', {cost}99, {rating}, {is_public_sql}, FALSE, {category_id});"
    )
