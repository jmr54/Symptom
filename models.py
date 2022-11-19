from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Array(db.Model):
    def __init__(self):
        self.array = [1,2,3,4,5,6,7,8,9]