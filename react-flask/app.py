from flask import jsonify , Flask, url_for, redirect, request, render_template, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///movies.sqlite3'

db = SQLAlchemy(app)


class movies(db.Model):
    id = db.Column('id', db.Integer, primary_key = True)
    title = db.Column(db.String(100))
    release_date = db.Column(db.String(20)) 
    opening_text = db.Column(db.String(200))

    def __init__(self, title, release_date, opening_text):        
        self.title = title
        self.release_date = release_date
        self.opening_text = opening_text

@app.route('/success/<name>')
def success(name):
    val = f"Hello, My name is {name}"
    return val

@app.route('/successs/<name>')
def successs(name):
    return 'welcome %s' % name

@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        user = request.form["nm"]
        return redirect(url_for("successs", name=user))
    else:
        return render_template('login.html')

@app.route('/show-all', methods=["OPTIONS", "GET"])
@cross_origin()
def show_all():
    try:
        if request.method == 'OPTIONS': 
            return build_preflight_response()
        else:
            movie = movies.query.all()
            movies_data = []
            for data in movie:
                movie_dict = {}
                movie_dict['episode_id'] = data.id
                movie_dict['title'] = data.title
                movie_dict['release_date'] = data.release_date
                movie_dict['opening_crawl'] = data.opening_text
                movies_data.append(movie_dict)
            print(movies_data)
            return jsonify({'movies':movies_data})
    except Exception as e:
        print(e)
        return "error in fetching", 500


@app.route('/add-movie', methods=['OPTIONS','POST'])
def addMovie():
    if request.method == 'OPTIONS': 
        return build_preflight_response()
    elif request.method == 'POST': 
        req = request.get_json()
        
        title = req['title']
        release_date = req['releaseDate']
        opening_text = req['openingText']
        movie = movies(title, release_date, opening_text)
        db.session.add(movie)
        db.session.commit()
        return build_actual_response(jsonify({ 'title': title, 
        'release_date': release_date, 'opening_text': opening_text }))

def build_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response
def build_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


if __name__ == "__main__":
    db.create_all()
    app.run(port=8000, debug=True)