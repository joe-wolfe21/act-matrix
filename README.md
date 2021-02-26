# The ACT Matrix

The ACT Matrix is designed to improve psychological flexibility over time. It
was created by Kevin Polk, founder of the [ACT Matrix
Academy](https://www.theactmatrixacademy.com/).

This web application is being created for Tina Long as a proof of concept
to faciliate a quick and easy process for completing the Act Matrix and
for viewing previous submissions.

## Development

To run the backend, first create and activate the conda environment:

```bash
conda env create -f ci/environment.yml
conda activate act-matrix-dev
```

Then start the flask dev server:

```bash
export FLASK_APP=backend
export FLASK_ENV=development
flask run
```

To start the frontend, navigate to `/frontend`, install the dependencies, and start the dev server:

```bash
yarn install
yarn start
```
