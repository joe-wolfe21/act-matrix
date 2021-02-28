from flask_sqlalchemy import SQLAlchemy

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
    updated_on = db.Column(
        db.DateTime(timezone=True),
        server_default=db.func.now(),
        server_onupdate=db.func.now(),
    )

    matrices = db.relationship("Matrix")

    def __repr__(self):
        return "<User %r>" % self.username


class Matrix(db.Model):
    """Represents a completed Matrix, filled out by
    a User.
    """

    __tablename__ = "matrices"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    answer_bottom_right = db.Column(db.String(255), nullable=False)
    answer_bottom_left = db.Column(db.String(255), nullable=False)
    answer_top_left = db.Column(db.String(255), nullable=False)
    answer_top_right = db.Column(db.String(255), nullable=False)
    created_on = db.Column(db.DateTime(timezone=True), server_default=db.func.now())

    user = db.relationship("User")
