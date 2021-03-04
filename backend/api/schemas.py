from flask_marshmallow import Marshmallow

from . import models

ma = Marshmallow()


class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = models.User

    id = ma.auto_field()
    first_name = ma.auto_field()
    last_name = ma.auto_field()
    username = ma.auto_field()
    email = ma.auto_field()

    matrices = ma.auto_field()


class MatrixSchema(ma.SQLAlchemySchema):
    class Meta:
        model = models.Matrix

    id = ma.auto_field()
    answer_bottom_right = ma.auto_field()
    answer_bottom_left = ma.auto_field()
    answer_top_left = ma.auto_field()
    answer_top_right = ma.auto_field()
    created_on = ma.auto_field()


user_schema = UserSchema()
users_schema = UserSchema(many=True)
matrix_schema = MatrixSchema()
matrices_schema = MatrixSchema(many=True)
