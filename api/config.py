from os import environ

class Config:
    """Set configuration values from environment"""

    # Flask
    SECRET_KEY = environ.get("SECRET_KEY", "default key")
    FLASK_APP = environ.get("FLASK_APP", "api")
    FLASK_ENV = environ.get("FLASK_ENV", "development")

    # Database
    DB_USER = environ.get("DB_USER")
    DB_PASSWORD = environ.get("DB_PASSWORD")
    DB_HOST = environ.get("DB_HOST", "localhost")
    DB_PORT = environ.get("DB_PORT", 5432)
    DB_NAME = environ.get("DB_NAME", "act-matrix")
    
    # SQLAlchemy
    SQLALCHEMY_DATABASE_URI = f"postgresql+psycopg2://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
    SQLALCHEMY_ECHO = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False

