import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{
  state = {
    isLoading: true,
    results: []
  };

  getMovies = async () => {
    const {
      data: 
        {results}
      } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1852606297d2c301e19c3b9348b8a4e6");
    this.setState({results, isLoading: false});
  }

  async componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoading, results } = this.state;

    return (
    <section className="container">
      {isLoading ? // 삼항 연산자, ':'을 기준으로 구분
      <div className="loader">
        <span className="loader_text">Loading...</span>
      </div> 
      :
      <div className="movies">
        {results.map(movie => (
          <Movie
          key={movie.id}
          id={movie.id}
          release_date={movie.release_date}
          title={movie.title}
          overview={movie.overview}
          poster={movie.poster_path}
          genres={movie.genre_ids}
          />
        ))}
      </div>
      }
    </section>
    );
  }
}

export default Home;