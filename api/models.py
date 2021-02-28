import click
from flask.cli import with_appcontext
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class User(db.Model):
    """Represents a User.
    """
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(100))
    created_on = db.Column(db.DateTime(timezone=True), server_default=db.func.now())
    updated_on = db.Column(db.DateTime(timezone=True), server_default=db.func.now(), server_onupdate=db.func.now())

    matrices = db.relationship("Matrix")

    def __repr__(self):
        return '<User %r>' % self.username

class Matrix(db.Model):
    """Represents a completed Matrix, filled out by
    a User.
    """
    __tablename__ = "matrices"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    answer_bottom_right = db.Column(db.String(255), nullable=False)
    answer_bottom_left = db.Column(db.String(255), nullable=False)
    answer_top_left = db.Column(db.String(255), nullable=False)
    answer_top_right = db.Column(db.String(255), nullable=False)
    created_on = db.Column(db.DateTime(timezone=True), server_default=db.func.now())

@click.command('db-create')
@with_appcontext
def db_create_cmd():
    db.create_all()
    click.echo('Initialized the database.')

@click.command('db-drop')
@with_appcontext
def db_drop_cmd():
    db.drop_all()
    click.echo('Dropped the database.')

@click.command('db-seed')
@with_appcontext
def db_seed_cmd():
    user1 = User(first_name="Joe", last_name="Wolfe", username="joe.wolfe", email="joe.wolfe@gmail.com", password="pass")
    user2 = User(first_name="Sam", last_name="Wolfe", username="sam.wolfe", email="sam.wolfe@gmail.com", password="pass")
    user3 = User(first_name="Tina", last_name="Long", username="tina.long", email="tina.long@gmail.com", password="pass")
    user4 = User(first_name="Cory", last_name="Long", username="cory.long", email="cory.long@gmail.com", password="pass")

    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)

    db.session.commit()
    click.echo('Seeded the database.')