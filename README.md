# The ACT Matrix

The ACT Matrix is designed to improve psychological flexibility over time. It
was created by Kevin Polk, founder of the [ACT Matrix
Academy](https://www.theactmatrixacademy.com/). This is a MVP web application
for Tina Long that offers a quick and easy way to complete the Act Matrix and
view past submissions.

## Development

The following details how to setup and run the services locally.

### API

Flask is used to serve the api. Follow the instructions below to get setup and
running:

#### Prereqs

- `postgresql` is installed locally and running.
- `conda` is installed

#### Setup

Setup a local environment:

```bash
conda env create -f backend/environment.yml
conda activate act-matrix-dev
```

Export required flask environment variables:

```bash
export FLASK_APP=api
export FLASK_ENV=development
```

Export required db environment variables:

```bash
export DB_USER=[USERNAME]
export DB_HOST=[HOST]
```

Start the flask dev server from `/backend`:

```bash
flask run
```

#### Seeding

To create and seed a local database, use the `db` cli:

```bash
flask db drop create seed
```

### UI

The front end is built with `react`.

#### Setup

To start the frontend, navigate to `/frontend`, install the dependencies, and
start the dev server:

```bash
yarn install
yarn start
```

## Formatting

Install and configure pre-commit to automatically run `black`, `flake8`, and
`isort` against the backend during commits:

- [install pre-commit](https://pre-commit.com/#installation)
- run `pre-commit install` to set up the git hook scripts

After installing, `pre-commit` will run automatically on every git commit to
ensure consistent code formatting. You can format without committing via
`pre-commit run` or skip these checks with `git commit --no-verify`.
