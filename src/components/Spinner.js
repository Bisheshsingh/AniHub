import narutoRun from '../resources/naruto-run.gif';

const Spinner = () => {
    return (
        <div>
            <img src={narutoRun}
                 alt="Loading..."
                 style={{width : "7%", marginTop : "10%"}}/>
        </div>
    );
}

export default Spinner;