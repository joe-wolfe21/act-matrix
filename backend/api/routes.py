from flask import current_app as app
from flask import jsonify

from .models import User
from .schemas import matrices_schema
from .schemas import user_schema
from .schemas import users_schema


@app.route("/api/header")
def header():
    """A temporary route that returns data to render
    within the header of the frontend.
    """
    return jsonify({"header": "Let's Matrix!"})


@app.route("/api/users", methods=["GET"])
def user_records():
    """Get the number of users.
    """
    users = User.query.all()

    return {"users": users_schema.dump(users)}


@app.route("/api/users/<uuid:user_id>", methods=["GET"])
def user_record(user_id):
    """Get the user with `user_id`.
    """
    user = User.query.get(user_id)

    return {"user": user_schema.dump(user)}


@app.route("/api/users/<uuid:user_id>/matrices", methods=["GET"])
def user_matrix_records(user_id):
    """Get the matrices for user with `user_id`.
    """
    user = User.query.get(user_id)

    return {"matrices": matrices_schema.dump(user.matrices)}
