import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    
    render(){
        const {location} = this.props;
        const idList = [
            {"id":28,"name":"Action"},
            {"id":12,"name":"Adventure"},
            {"id":16,"name":"Animation"},
            {"id":35,"name":"Comedy"},
            {"id":80,"name":"Crime"},
            {"id":99,"name":"Documentary"},
            {"id":18,"name":"Drama"},
            {"id":10751,"name":"Family"},
            {"id":14,"name":"Fantasy"},
            {"id":36,"name":"History"},
            {"id":27,"name":"Horror"},
            {"id":10402,"name":"Music"},
            {"id":9648,"name":"Mystery"},
            {"id":10749,"name":"Romance"},
            {"id":878,"name":"Science Fiction"},
            {"id":10770,"name":"TV Movie"},
            {"id":53,"name":"Thriller"},
            {"id":10752,"name":"War"},
            {"id":37,"name":"Western"}
          ];
        
        function findGenreName(num){
            var result;
            idList.forEach(function(item){
                if(item.id===num){
                result = item.name;
                }
            }
            );
            return result;
        }

        if(location.state){
            return (
                <div className="detail__container">
                    <img src={`https://image.tmdb.org/t/p/w185/${location.state.poster}`} alt={location.state.title} title={location.state.title} />
                    <ul>
                    <li>title: {location.state.title}</li>
                    <li>release date: {location.state.release_date}</li>
                    <li>genres</li>
                    <ul>
                        {location.state.genres.map((genre, index) =>
                            <li key={index} className="genres_genre">{findGenreName(genre)}</li>
                        )}
                    </ul>
                    <li>overview: {location.state.overview}</li>
                    </ul>
                </div>
            );
        } else{
            return null;
        }
    }
}

export default Detail;