from flask_marshmallow import Marshmallow
from . import  models

ma = Marshmallow()

class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = models.User

    id = ma.auto_field()
    first_name = ma.auto_field()
    last_name = ma.auto_field()
    username = ma.auto_field()
    email = ma.auto_field()


user_schema = UserSchema()
users_schema = UserSchema(many=True)