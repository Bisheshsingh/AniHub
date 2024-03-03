
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
        <div className="mt-3 ms-2 float-start">
            <button className="btn-custom" onClick={toggleSlideBar}>
                <i className="fa-solid fa-bars" style={{scale : '300%'}}/>
            </button>

            <div id="sidebar">
                <br/> <br/>
                <button className="btn-custom2 float-start"
                        onClick={toggleSlideBar}>
                    <i className="fa-solid fa-arrow-left"/>
                </button> <br/> <br/> <br/>

                <a href='/' className="btn text-light btn-lg w-100 btn-custom1">Home</a> <br/> <br/>
                <button className="btn text-light btn-lg w-100 btn-custom1">About</button> <br/> <br/>
                <a href='/support' className="btn text-light btn-lg w-100 btn-custom1">Support</a> <br/> <br/>
                <a href='/help' className="btn text-light btn-lg w-100 btn-custom1">Help</a>
            </div>
        </div>
    )
}

export default SlideBar;