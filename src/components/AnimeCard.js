const AnimeCard = ({anime}) => {
    const maxLength = () => {
        if(window.innerWidth < 1000) {
           return 12;
        } else if(window.length < 800) {
            return 15;
        } else {
            return 23;
        }
    }

    const reformatName = (name) => {
        let len = maxLength();

        if(name.length >= len) {
            return name.substring(0, len) + '...';
        }

        return name;
    }

    return (
        <div className="card mt-3 ms-3 mx-auto"
             style={{width: "15%",
                 fontSize: 'min(1.5vw, 15px)',
                 textAlign: 'left',
                 minWidth: '180px',
                 minHeight: '100px',
                 maxWidth: '200px',
                 maxHeight: '400px',
                 height: '20%', backgroundColor: '#4F4C4B'}}>
            <a href={anime.link}>
                <img className="card-img-top"
                     style={{width: '100%', height: '80%',
                          minHeight: '10.2rem',
                          maxHeight: '12.2rem'}}
                     src={anime.imageLink}
                     alt={anime.name}/>
            </a>

            <div className="card-header text-left">
                <strong><a href={anime.link}
                           title={anime.name}
                           className="text-white">{reformatName(anime.name)}</a></strong>
            </div>

            <div className="card-footer">
                <p className="card-text text-white">{anime.updated}</p>
            </div>
        </div>
    );
}

export default AnimeCard;