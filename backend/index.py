from flask import Flask, send_from_directory
from flask_cors import CORS
from py1337x import py1337x

app = Flask(__name__, static_url_path='', static_folder='build')
CORS(app)

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
def trending():
    try:
        torrents = py1337x()
        list = torrents.trending()
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