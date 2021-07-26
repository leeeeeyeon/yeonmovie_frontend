import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        console.log(location.state);
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return (
                <div className="detail__container">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <ul>
                    <li>title: {location.state.title}</li>
                    <li>year: {location.state.year}</li>
                    <li>genres</li>
                    <ul>
                        {location.state.genres.map((genre, index) =>
                            <li key={index} className="genres_genre">{genre}</li>
                        )}
                    </ul>
                    <li>summary: {location.state.summary}</li>
                    </ul>
                </div>
            );
        } else{
            return null;
        }
    }
}

export default Detail;