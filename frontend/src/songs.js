import React, { useState } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import music1 from './Songs/Ae dil hai mushkil.mp3';
import music2 from './Songs/Attention.mp3';
import music3 from './Songs/Dil Diyan Gallan.mp3';
import music4 from './Songs/Lover.mp3';
import music5 from './Songs/MIDDLE OF THE NIGHT.mp3';
import music6 from './Songs/Nashe Si Chadh Gayi.mp3';
import music7 from './Songs/Perfect.mp3';
import music8 from './Songs/Shape of You.mp3';
import music9 from './Songs/Tareefan.mp3';
import music10 from './Songs/Tera Ban Jaunga.mp3';
import image1 from './Images/Ae-Dil-Hai-Mushkil.jpg';
import image2 from './Images/Attention.jpg';
import image3 from './Images/dil diyaan gallan.jpg';
import image4 from './Images/lover.jpg';
import image5 from './Images/middle of the night.jpg';
import image6 from './Images/nashe se chad gayi.jpg';
import image7 from './Images/perfect.jpg';
import image8 from './Images/shape of you.jpg';
import image9 from './Images/tareefan.jpg';
import image10 from './Images/tera ban jaunga.jpg';

const songs = [
  { title: 'Ae Dil Hai Muskil', file: music1, image: image1 },
  { title: 'Attention', file: music2, image: image2 },
  { title: 'Dil Diyan Gallan', file: music3, image: image3 },
  { title: 'Lover', file: music4, image: image4 },
  { title: 'Middle of the Night', file: music5, image: image5 },
  { title: 'Nashe Si Chadh Gayi', file: music6, image: image6 },
  { title: 'Perfect', file: music7, image: image7 },
  { title: 'Shape of You', file: music8, image: image8 },
  { title: 'Tareefan', file: music9, image: image9 },
  { title: 'Tera Ban Jaunga', file: music10, image: image10 },
];

const SongsList = ({ onSelect }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (songName) => {
    if (favorites.includes(songName)) {
      setFavorites(favorites.filter((item) => item !== songName));
    } else {
      setFavorites([...favorites, songName]);
    }
  };

  const isFavorite = (songName) => favorites.includes(songName);

  return (
    <div>
      <h2 className="text-xl text-white font-bold mb-4">Songs</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index} className="flex items-center cursor-pointer mb-2 text-white" onClick={() => onSelect(song)}>
            <img src={song.image} alt={song.title} className="w-10 h-10 rounded-full mr-2" />
            <span className="flex-grow">{song.title}</span>
            <span
              className={`ml-auto cursor-pointer ${
                isFavorite(song.title) ? 'text-red-500' : 'text-gray-500'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(song.title);
              }}
            >
              {isFavorite(song.title) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18l-1.45-1.324C3.084 11.028 0 8.1 0 5.25 0 2.738 2.238 0 5 0c1.342 0 2.701.735 3.773 1.932C9.228 1.735 10.688 1 12 1c2.762 0 5 2.738 5 5.25 0 2.85-3.084 5.778-8.55 11.426L10 18z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18l-1.45-1.324C3.084 11.028 0 8.1 0 5.25 0 2.738 2.238 0 5 0c1.342 0 2.701.735 3.773 1.932C9.228 1.735 10.688 1 12 1c2.762 0 5 2.738 5 5.25 0 2.85-3.084 5.778-8.55 11.426L10 18z"
                    clipRule="evenodd"
                    fill="currentColor"
                  />
                </svg>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Player = ({ selectedSong }) => (
  <div>
    {selectedSong && (
      <div>
        <h2 className="text-xl font-bold mb-4">Now Playing</h2>
        <ReactAudioPlayer
          src={selectedSong.file}
          autoPlay
          controls
        />
      </div>
    )}
  </div>
);

const Songs = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongSelect = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="container mx-auto px-4 flex flex-col">
      <h1 className="text-3xl text-white font-bold my-8 text-center">SoulHouse</h1>
      <div className="flex flex-col md:flex-row items-center justify-center mx-1/2">
        <div className="w-full md:w-1/2">
          <SongsList onSelect={handleSongSelect} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Player selectedSong={selectedSong} />
        </div>
      </div>
    </div>
  );
};

export default Songs;
