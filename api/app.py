from flask import Flask

from .cli import db_cli


def create_app():
    """The application factory of the Flask app. Any configuration,
    registration, or additional setup should be done here. Since it's not
    global, use `flask.current_app` to get the app handling the current
    request.

    Returns
    -------
    app : the Flask app
    """
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object("api.config.Config")

    from .models import db
    from .schemas import ma

    # initialize the app for use in the orm and the serializer/deserializer
    db.init_app(app)
    ma.init_app(app)

    # add additional cli commands for db setup
    app.cli.add_command(db_cli)

    with app.app_context():
        from . import routes  # noqa F401

        return app
