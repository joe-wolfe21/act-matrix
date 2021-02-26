import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app(test_config=None):
    """The application factory of the Flask app. Any configuration, registration,
    or additional setup should be done here.

    Returns
    -------
    app : the Flask app
    """
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object('api.config.Config')
    
    db.init_app(app)
    
    with app.app_context():

        from . import routes

        db.create_all()

        return app
