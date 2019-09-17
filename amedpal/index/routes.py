from flask import render_template, abort
from jinja2 import exceptions

from . import index

@index.route("/")
def home():
    return render_template("index.html")

@index.route("/en")
def home_en():
    return render_template("index-en.html")


@index.route("/blog")
def blog():
    return render_template("blog.html")

@index.route("/blog/<post>")
def blog_post(post):
    try:
        return render_template("posts/" + post + ".html")
    except exceptions.TemplateNotFound:
        abort(404)
