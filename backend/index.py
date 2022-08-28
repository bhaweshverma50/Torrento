from flask import Flask, send_from_directory
from flask_cors import CORS
from py1337x import py1337x

app = Flask(__name__, static_url_path='', static_folder='build')
CORS(app)


def str2bool(v):
    return v.lower() in ("true", "1")


@app.route('/', defaults={'path': ''})
def dashboard(path):
    print("Dashboard...")
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/search')
def search():
    return 'Oops! No way to torrento :('


@app.route('/search/<query>')
def search_query(query):
    try:
        if str(query).strip():
            torrents = py1337x()
            list = torrents.search(query)
            return list
    except Exception as e:
        print(e)
        return 'Oops! No way to torrento :('


@app.route('/trending')
def trending_movies_week():
    try:
        torrents = py1337x()
        list = torrents.trending()
        return list
    except Exception as e:
        print(e)
        return 'Oops! No way to torrento :('


@app.route('/trending/<category>/<week>')
def trending_movies_tv(category, week):
    try:
        torrents = py1337x()
        list = torrents.trending(category, week=str2bool(week))
        return list
    except Exception as e:
        print(e)
        return 'Oops! No way to torrento :('


@app.route('/top')
def top():
    try:
        torrents = py1337x()
        list = torrents.top()
        return list
    except Exception as e:
        print(e)
        return 'Oops! No way to torrento :('


@app.route('/top/<category>')
def top_movies_tv(category):
    try:
        torrents = py1337x()
        list = torrents.top(category)
        return list
    except Exception as e:
        print(e)
        return 'Oops! No way to torrento :('


@app.route('/popular/<category>/<week>')
def popular_movies_tv(category, week):
    try:
        torrents = py1337x()
        list = torrents.popular(category, week=str2bool(week))
        return list
    except Exception as e:
        print(e)
        return 'Oops! No way to torrento :('


@app.route('/info/<id>')
def info(id):
    try:
        torrents = py1337x()
        list = torrents.info(torrentId=id)
        return list
    except Exception as e:
        print(e)
        return 'Oops! No way to torrento :('