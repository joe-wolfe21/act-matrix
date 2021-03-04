import click
from flask.cli import AppGroup, with_appcontext

from .models import Matrix, User, db

db_cli = AppGroup("db", chain=True)


@db_cli.command("create")
@with_appcontext
def db_create_cmd():
    db.create_all()
    click.echo("Initialized the database.")


@db_cli.command("drop")
@with_appcontext
def db_drop_cmd():
    db.drop_all()
    click.echo("Dropped the database.")


@db_cli.command("seed")
@with_appcontext
def db_seed_cmd():
    joe = User(
        first_name="Joe",
        last_name="Wolfe",
        username="joe.wolfe",
        email="joe.wolfe@gmail.com",
        password="pass",
    )
    sam = User(
        first_name="Sam",
        last_name="Wolfe",
        username="sam.wolfe",
        email="sam.wolfe@gmail.com",
        password="pass",
    )
    tina = User(
        first_name="Tina",
        last_name="Long",
        username="tina.long",
        email="tina.long@gmail.com",
        password="pass",
    )
    cory = User(
        first_name="Cory",
        last_name="Long",
        username="cory.long",
        email="cory.long@gmail.com",
        password="pass",
    )

    db.session.add(joe)
    db.session.add(sam)
    db.session.add(tina)
    db.session.add(cory)

    joe_matrix_one = Matrix(
        user=joe,
        answer_bottom_right="the important things",
        answer_bottom_left="the hard stuff",
        answer_top_left="the things i do to move away",
        answer_top_right="the things i do to move closer",
    )

    joe_matrix_two = Matrix(
        user=joe,
        answer_bottom_right="the important things again",
        answer_bottom_left="the hard stuff again",
        answer_top_left="the things i do to move away again",
        answer_top_right="the things i do to move closer again",
    )

    db.session.add(joe_matrix_one)
    db.session.add(joe_matrix_two)

    db.session.commit()
    click.echo("Seeded the database.")
