import React from "react";

// let imdbApiKey = `ibc7s5pakwsdbb1u9`;
// OMDB Api Key: http://www.omdbapi.com/?i=tt3896198&apikey=6c6666ad
// let omdbApiKey = `6c6666ad`;

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };


// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
//         'X-RapidAPI-Key': '052a1a0177mshcca94d87b72583fp13b210jsn3a962434dfae'
//     }
// };

// Samurai Champloo: 
// tt0423731
// Seven Deadly Sins: 
// tt3909224
// Avatar the Last Airbender: 
// tt0417299
// Code Geass: 
// tt0994314
// Afro Samurai: 
// tt0465316






class ApiLab extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            textName: props.initialText || ` `,//<-- Name of the show
            seasonsInt: props.initialInt || ` `,
            episodesText: props.initialText || ` `
        }
    }

    render(){
        return(
            <div>
                <h1>Imdb-Api.com Experiment: </h1>
                {/* <input className="tv-show" type="text"></input> */}
                <h2>Name of Show: </h2>
                <button onClick={this._getShow}>Get Shows</button>
                <p>{this.state.textName}</p>
                <br />
                <h2>The Year it Was Released:</h2>
                <h2>Breif Description of The Show: </h2>
                <h2>The Number of Seasons: </h2>
                <h2>The Episodes associated with a Given Season: </h2>
                <p>{this.state.episodesText}</p>
                
            </div>

        )
    }

    _getShow = () => {
        let newParams = encodeURIComponent('tt0423731');
        let apiKey = imdbApiKey;
        let uri = `https://imdb-api.com/en/API/Title/${apiKey}/${newParams}`;
        fetch(uri) //<-- for the name of the show
            .then(response => response.json())
            .then(json => {
                // console.log(json);
                // this.setState({textName:json.title,}, () => {});
                // return json.title;

            });
        //fetch(uri) <-- for the seasons of a given show
        let seasonsUri = `https://imdb-api.com/en/API/SeasonEpisodes/${apiKey}/${newParams}/1`;
        fetch(seasonsUri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
            })
        //fetch(uri) <-- for the descriptions of a given show
        //fetch(uri) <-- for number of seasons of a given show
        //fetch(uri) <-- for the episodes of a given season

    }

    //_getYearReleased
    //_getDescriptionOfShow
    //_getNumberOfSeasons
    //_getEpisodesForGivenSeason
}

export default ApiLab;



