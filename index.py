from flask import Flask
from py1337x import py1337x

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '<div><h1>Welcome to Torrento</h1><p>Site under progress...coming soon!</p></div>'


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