from flask import jsonify
from flask import request
from flask import current_app as app
from .models import db, User

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

    return jsonify({"count": len(users)})