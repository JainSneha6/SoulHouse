from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///SoulHouse.db'
db = SQLAlchemy(app)

class SignUp(db.Model):
    firstName = db.Column(db.String(100), nullable=False)
    lastName = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), primary_key=True)
    phone = db.Column(db.Integer, nullable=False)
    password = db.Column(db.String(100), nullable=False)

class Songs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    SongName = db.Column(db.String(100))
    Language = db.Column(db.String(100))
    Genre = db.Column(db.String(100))
    Artist = db.Column(db.String(100))
    Lyricist = db.Column(db.String(100))
    Composer = db.Column(db.String(100))
    Album = db.Column(db.String(100))
    Duration = db.Column(db.String(100))

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    new_user = SignUp(
        firstName=data['firstName'],
        lastName=data['lastName'],
        email=data['email'],
        phone=data['phone'],
        password=data['password']
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User signed up successfully'})

@app.route('/users', methods=['GET'])
def get_users():
    users = SignUp.query.all()
    user_list = []
    for user in users:
        user_data = {
            'firstName': user.firstName,
            'lastName': user.lastName,
            'email': user.email,
            'phone': user.phone,
            'password': user.password
        }
        user_list.append(user_data)
    return jsonify({'users': user_list})

def create_tables():
    with app.app_context():
        db.create_all()
        insert_data()

def insert_data():
    songs_data = [
        {'SongName': 'Ae Dil Hai Mushkil', 'Language': 'Hindi', 'Genre': 'Romantic', 'Artist': 'Arijit Singh', 'Lyricist': 'Amitabh Bhattacharya', 'Composer': 'Pritam', 'Album': 'Ae Dil Hai Mushkil', 'Duration': '4:29'},
        {'SongName': 'Nashe Si Chadh Gayi', 'Language': 'Hindi', 'Genre': 'Party', 'Artist': 'Arijit Singh', 'Lyricist': 'Jaideep Sahni', 'Composer': 'Vishal-Shekhar', 'Album': 'Befikre', 'Duration': '3:57'},
        {'SongName': 'Dil Diyan Gallan', 'Language': 'Hindi', 'Genre': 'Romantic', 'Artist': 'Atif Aslam', 'Lyricist': 'Irshad Kamil', 'Composer': 'Vishal-Shekhar', 'Album': 'Tiger Zinda Hai', 'Duration': '4:21'},
        {'SongName': 'Tera Ban Jaunga', 'Language': 'Hindi', 'Genre': 'Romantic', 'Artist': 'Akhil Sachdeva, Tulsi Kumar', 'Lyricist': 'Kumaar', 'Composer': 'Akhil Sachdeva', 'Album': 'Kabir Singh', 'Duration': '3:57'},
        {'SongName': 'Tareefan', 'Language': 'Hindi', 'Genre': 'Pop', 'Artist': 'Badshah', 'Lyricist': 'Qaran', 'Composer': 'Qaran', 'Album': 'Veere Di Wedding', 'Duration': '3:05'},
        {'SongName': 'Shape of You', 'Language': 'English', 'Genre': 'Pop', 'Artist': 'Ed Sheeran', 'Lyricist': 'Ed Sheeran', 'Composer': 'Ed Sheeran', 'Album': 'Divide', 'Duration': '3:53'},
        {'SongName': 'Lover', 'Language': 'English', 'Genre': 'Pop', 'Artist': 'Taylor Swift', 'Lyricist': 'Taylor Swift', 'Composer': 'Taylor Swift, Jack Antonoff', 'Album': 'Lover', 'Duration': '3:41'},
        {'SongName': 'Perfect', 'Language': 'English', 'Genre': 'Pop', 'Artist': 'Ed Sheeran', 'Lyricist': 'Ed Sheeran', 'Composer': 'Ed Sheeran', 'Album': 'Divide', 'Duration': '4:23'},
        {'SongName': 'Middle of the Night', 'Language': 'English', 'Genre': 'Pop', 'Artist': 'The Vamps', 'Lyricist': 'The Vamps', 'Composer': 'The Vamps', 'Album': 'Night & Day', 'Duration': '3:19'},
        {'SongName': 'Attention', 'Language': 'English', 'Genre': 'Pop', 'Artist': 'Charlie Puth', 'Lyricist': 'Charlie Puth', 'Composer': 'Charlie Puth', 'Album': 'Voicenotes', 'Duration': '3:31'}
    ]

    for song_data in songs_data:
        song = Songs(**song_data)
        db.session.add(song)

    db.session.commit()
    
@app.route('/songs', methods=['GET'])
def get_songs():
    songs = Songs.query.all()
    song_list = []
    for song in songs:
        song_data = {
            'SongName': song.SongName,
            'Language': song.Language,
            'Genre': song.Genre,
            'Artist': song.Artist,
            'Lyricist': song.Lyricist,
            'Composer': song.Composer,
            'Album': song.Album,
            'Duration': song.Duration
        }
        song_list.append(song_data)
    return jsonify({'songs': song_list})   

def drop_songs_table():
    with app.app_context():
        Songs.__table__.drop(db.engine)

if __name__ == "__main__":
    drop_songs_table()
    create_tables()
    app.run(debug=True)
