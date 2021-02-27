from setuptools import setup, find_packages


setup(
    name='api',
    version='0.1.0',
    author="Joe Wolfe",
    author_email="joe.wolfe21@gmail.com",
    description="Flask API for the act matrix web application.",
    url="https://github.com/joe-wolfe21/act-matrix",
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'flask',
    ],
)