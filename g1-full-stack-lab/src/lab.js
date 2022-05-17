const tvShows = (options) => {
    switch (options){
        case '1':
            return 'tt0423731'; //<-- Samurai Champloo
            // console.log('tt0423731');
            // break;
        case 'show 2':
            return 'tt3909224' //<-- Seven Deadly Sins
            // break;
        case 'show 3':
            return 'tt0417299'//<-- Avatar the Last Airbender
            // break;
        case 'show 4':
            return 'tt0994314' //<-- Code Geass
            // break;
        default:
            return 'tt0465316' //<-- Afro Samurai
    }
        
}

// tvShows("1");
console.log(tvShows('1'));