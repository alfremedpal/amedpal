"""
==__init.py==
Main init file, initializes the whole app
"""
from flask import Flask

from amedpal.config import Config

def create_app(config_class=Config):
    """
    Creates the actual app
    """
    app = Flask(__name__)
    app.config.from_object(Config)

    from .index import index
    app.register_blueprint(index)

    return app
