const AnimeCard = ({anime}) => {
    const reformatName = (name) => {
        if (name.length > 23) {
            return name.substring(0, 23) + '...';
        }

        return name;
    }

    return (
        <div className="card mt-3 ms-3 align-items-center"
             style={{width: "13rem", height: '20.5rem', backgroundColor: '#4F4C4B'}}>
            <a href={anime.link}>
                <img className="card-img-top"
                     style={{width: '12.2rem', height: '14rem'}}
                     src={anime.imageLink}
                     alt={anime.name}/>
            </a>

            <div className="card-header text-left">
                <strong><a href={anime.link}
                           title={anime.name}
                           className="card-text text-white">{reformatName(anime.name)}</a></strong>
            </div>

            <div className="card-footer">
                <p className="card-text text-white">{anime.updated}</p>
            </div>
        </div>
    );
}

export default AnimeCard;