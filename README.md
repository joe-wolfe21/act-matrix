# The ACT Matrix

The ACT Matrix is designed to improve psychological flexibility over time. It
was created by Kevin Polk, founder of the [ACT Matrix
Academy](https://www.theactmatrixacademy.com/).

This web application is being created for Tina Long as a proof of concept
to faciliate a quick and easy process for completing the Act Matrix and
for viewing previous submissions.

## Development

### API

To run the api, first create and activate the conda environment:

```bash
conda env create -f ci/environment.yml
conda activate act-matrix-dev
```

Then export the required environment variables and start the flask dev server:

```bash
export FLASK_APP=api
export FLASK_ENV=development

export DB_USER=[USERNAME]
export DB_HOST=[HOST]

flask run
```

Note - this relies on running postgresql locally with a database `act-matrix`.

### UI

To start the frontend, navigate to `/frontend`, install the dependencies, and start the dev server:

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
