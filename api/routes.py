from flask import request, jsonify
from flask import current_app as app
from .models import db, User
from .schemas import users_schema

@app.route("/api/header")
def header():
    """A temporary route that returns data to render
    within the header of the frontend.
    """
    return jsonify({"header": "Let's Matrix!"})

@app.route('/api/users', methods=['GET'])
def user_records():
    """Get the number of users.
    """
    users = User.query.all()

    return {"users": users_schema.dump(users)}