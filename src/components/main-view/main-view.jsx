import React from "react";
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from "../movie-view/movie-view";

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: 1,
          Title: "The Shawshank Redemption",
          Description:
            "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
          Genre: {
            Name: "Drama",
            Description:
              "Focused on emotions and defined by conflict, often looking to reality rather than sensationalism.",
          },
          Director: {
            Name: "Frank Darabont",
            Bio: "Frank Darabont (born January 28, 1959) is a Hungarian-American film director, screenwriter and producer who has been nominated for three Academy Awards and a Golden Globe. He was born in France by Hungarian parents who fled Budapest during the 1956 uprising, but the family moved to Los Angeles while he was still an infant.",
            BirthYear: "1959",
          },
          Actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
          ReleaseYear: "1994",
          Rating: "R",
          ImagePath:
            "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
          Featured: true,
        },
        {
          _id: 2,
          Title: "The Godfather",
          Description:
            "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
          Genre: {
            Name: "Drama",
            Description:
              "Focused on emotions and defined by conflict, often looking to reality rather than sensationalism.",
          },
          Director: {
            Name: "Francis Ford Coppola",
            Bio: "Francis Ford Coppola  (born April 7, 1939) is an American film director, producer and screenwriter. He is widely acclaimed as one of Hollywood's most celebrated and influential film directors. He epitomized the group of filmmakers known as the New Hollywood, which included George Lucas, Martin Scorsese, Robert Altman, Woody Allen and William Friedkin, who emerged in the early 1970s with unconventional ideas that challenged contemporary filmmaking.",
            BirthYear: "1939",
          },
          Actors: ["Marlon Brando", "Al Pacino"],
          ReleaseYear: "1972",
          Rating: "R",
          ImagePath:
            "https://image.tmdb.org/t/p/w500/n6PvMAKL66gavIFxOyRB6czAeQO.jpg",
          Featured: true,
        },
        {
          _id: 3,
          Title: "The Dark Knight",
          Description:
            "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
          Genre: {
            Name: "Action",
            Description:
              "Associated with particular types of spectacle (e.g., explosions, chases, combat).",
          },
          Director: {
            Name: "Christopher Nolan",
            Bio: "Christopher Edward Nolan, CBE (born 30 July 1970) is a British-American film director, screenwriter, and producer. He was born in Westminster, London, England and holds both British and American citizenship due to his American mother. He is known for writing and directing critically acclaimed films such as Memento (2000), The Prestige (2006), The Dark Knight Trilogy (2005-12), Inception (2010), Interstellar (2014) and Dunkirk (2017). Nolan is the founder of the production company Syncopy Films. He often collaborates with his wife, producer Emma Thomas, and his brother, screenwriter Jonathan Nolan.",
            BirthYear: "1970",
          },
          Actors: ["Christian Bale", "Heath Ledger"],
          ReleaseYear: "2008",
          Rating: "R-13",
          ImagePath:
            "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
          Featured: true,
        },
      ],
      selectedMovie: null,
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0)
      return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie ? (
          <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={movie =>
                this.setSelectedMovie(movie)
              }
            />
          ))
        )}
      </div>
    );
  }
}

export default MainView;