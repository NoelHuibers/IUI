// FavoritesSelectionPage.tsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { z } from 'zod';
import { createTsForm } from "@ts-react/form";
import { TextField, CheckBoxField, NumberField } from "./formComponents";

interface Genre {
  name: string;
  image: string; // Use the path to the image in the public directory
}

const genresList: Genre[] = [
  { name: "technology", image: "/photos/technology.jpg" },
  { name: "science", image: "/photos/science.jpg" },
  { name: "business", image: "/photos/business.jpg" },
  { name: "entertainment", image: "/photos/entertainment.jpg" },
  { name: "health", image: "/photos/health.jpg" },
  { name: "sports", image: "/photos/sports.jpg" },
];

const FavoritesSelectionPage: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [name, setName] = useState<string>(""); // Add state for the name
  const [age, setAge] = useState<number | undefined>(undefined); // Add state for the age
  const [musicNewsAmount, setMusicNewsAmount] = useState<number | undefined>(
    50,
  ); // Add state for the newAmount

  const isNameValid = (value: string): boolean => {
    const regex = /^[a-zA-Z\s-]+$/;
    return regex.test(value);
  };

  const isAgeValid = (value: number | undefined): boolean => {
    return (
      value !== undefined &&
      Number.isInteger(value) &&
      value >= 0 &&
      value <= 120
    );
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    if (isNameValid(newName)) {
      setName(newName);
    }
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAge = parseInt(e.target.value, 10);
    if (isAgeValid(newAge)) {
      setAge(newAge);
    }
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLocation = e.target.value;
    setName(newLocation);
  };

  const handleGenreClick = (genre: string) => {
    setSelectedGenres((prevGenres) => {
      if (prevGenres.includes(genre)) {
        // Genre is already selected, remove it
        return prevGenres.filter((selectedGenre) => selectedGenre !== genre);
      } else {
        // Genre is not selected, add it
        return [...prevGenres, genre];
      }
    });
  };

  const handleSubmit = () => {
    // Process the selected genres
    console.log("Selected Genres:", selectedGenres);
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Music/News Amount:", musicNewsAmount);
  };



  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-zinc-900 to-indigo-950">
      <div className="m-1 flex w-full items-center justify-center">
        <form className="mx-auto max-w-md">
          <div className="">
            <div className="">
              <h1 className="appFont mt-2 text-3xl font-semibold leading-7 text-white">
                Your Profile
              </h1>


              <div className="mt-2">
                <div className="">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Username
                  </label>
                  <div className="">
                    <div className="flex rounded-md  ring-1 ring-inset ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-emerald-300 sm:max-w-md">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-white/40 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="nueslify-user123"
                        onChange={handleNameChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Age
                  </label>
                  <div className="">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-emerald-300 sm:max-w-md">
                      <input
                        type="number"
                        name="age"
                        id="age"
                        autoComplete="age"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-white/40 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="25"
                        value={age ?? ""}
                        onChange={handleAgeChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Location
                  </label>
                  <div className="">
                    <div className="flex rounded-md  ring-1 ring-inset ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-emerald-300 sm:max-w-md">
                      <input
                        type="text"
                        name="location"
                        id="location"
                        autoComplete="location"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-white/40 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Germany"
                        onChange={handleLocationChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h1 className="appFont mt-2 text-3xl font-semibold leading-7 text-white">
                  Your Balance
                </h1>
                <div className="mt-2">
                  <label
                    htmlFor="musicNewsAmount"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Select how much music/news you want to listen to
                  </label>
                  <div className="range-input ml-4 mr-4 text-white">
                    <span className="appFont">music</span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={musicNewsAmount}
                      onChange={(e) =>
                        setMusicNewsAmount(parseInt(e.target.value, 10))
                      }
                      className="slider w-full"
                    />
                    <span className="appFont">news</span>
                  </div>
                </div>
              </div>

              <h1 className="appFont mt-10 text-3xl font-semibold leading-7 text-white">
                Your Taste
              </h1>
              <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="musicNewsAmount"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Select your favorite news genres
                  </label>
                </div>
              </div>
              <div className="genres-container">
                {genresList.map((genre) => (
                  <button
                    key={genre.name}
                    type="button"
                    className={`genre-button ${selectedGenres.includes(genre.name) ? "selected" : ""
                      }`}
                    onClick={() => handleGenreClick(genre.name)}
                  >
                    <div className="relative h-32 w-32">
                      <Image
                        src={genre.image}
                        alt={genre.name}
                        layout="fill"
                        objectFit="cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33.3vw"
                        className="rounded"
                      />
                      {selectedGenres.includes(genre.name) && (
                        <div className="indicator">
                          <div className="checkmark">
                            <div className="checkmark_stem"></div>
                            <div className="checkmark_kick"></div>
                          </div>
                        </div>
                      )}
                    </div>
                    <p>{genre.name}</p>
                  </button>
                ))}
              </div>
              <div className="mb-2 mt-6 flex items-center justify-center gap-x-6">
                <Link
                  href="../dashboard"
                  className="transition-duration-1000 text-xl font-bold leading-6 text-white"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="transition-duration-600 rounded-md bg-indigo-200 px-3 py-2 text-sm text-xl font-bold text-indigo-900 hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <style jsx>{`
        .label-text {
          font-family: "Pacifico", sans-serif, cursive;
          margin-right: 8px;
        }

        .form-input {
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 8px;
          width: 300px;
        }

        .range-input {
          display: flex;
          align-items: center;
        }

        .range-input span {
          margin: 0 8px;
        }

        .slider {
          -webkit-appearance: none;
          width: 100%;
          height: 7px;
          border-radius: 5px;
          background: #d3d3d3;
          outline: none;
          opacity: 0.8;
          transition: opacity 0.2s;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #10b981; /* Change this to the desired color (emerald-300) */
          cursor: pointer;
        }

        .slider:hover {
          opacity: 1;
        }

        .appFont {
          font-family: "Pacifico", sans-serif, cursive;
          font-color: #ffffff;
        }

        .genres-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }

        .genre-button {
          background-color: #ccc;
          border-radius: 6px;
          margin: 6px;
          padding: 4px;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s;
        }

        .genre-button:hover {
          background-color: #10b981;
          border-color: #10b981;
          transform: scale(1.02);
        }

        .genre-button.selected {
          border-color: #10b981;
          background-color: #10b981;
          transform: scale(1);
        }

        .indicator {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #10b981;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .checkmark {
          display: inline-block;
          transform: rotate(45deg);
        }

        .checkmark_stem {
          position: absolute;
          width: 3px;
          height: 17px;
          background-color: #ffffff;
          top: -10px;
        }

        .checkmark_kick {
          position: absolute;
          width: 9px;
          height: 3px;
          background-color: #ffffff;
          left: -6px;
          top: 5px;
        }

        .text-left {
          text-align: left;
        }

        .save-button {
          margin: 16px auto;
          padding: 8px 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: block;
        }
      `}</style>
    </main>
  );
};

export default FavoritesSelectionPage;
