
const SlideBar = () => {
    const toggleSlideBar = () => {
        let sidebar = document.getElementById('sidebar');

        if (sidebar.style.left === '0px') {
            sidebar.style.left = '-250px';
        } else {
            sidebar.style.left = '0px';
        }
    }

    return (
        <div>
            <button className="btn-custom" onClick={toggleSlideBar}>
                <i className="fa-solid fa-bars" style={{scale: "3"}}/>
            </button>

            <div id="sidebar">
                <br/> <br/>
                <button className="btn-custom2 float-start"
                        onClick={toggleSlideBar}>
                    <i className="fa-solid fa-arrow-left"/>
                </button> <br/> <br/> <br/>

                <button className="btn text-light btn-lg w-100 btn-custom1">Home</button> <br/> <br/>
                <button className="btn text-light btn-lg w-100 btn-custom1">About</button> <br/> <br/>
                <button className="btn text-light btn-lg w-100 btn-custom1">Support</button> <br/> <br/>
                <button className="btn text-light btn-lg w-100 btn-custom1">Help</button>
            </div>
        </div>
    )
}

export default SlideBar;