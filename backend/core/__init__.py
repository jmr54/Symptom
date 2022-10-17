from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from core import views
from config import Config
from flask_migrate import Migrate
from flask_login import LoginManager #new line

db = SQLAlchemy()

app = Flask(__name__)




"""
def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

    db.init_app(app)

    from .base import main
    app.register_blueprint(main)

    return app
"""