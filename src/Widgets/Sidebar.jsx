export default function SideBar(props){
    var minwidth = props.width == "50%" ? "350px" : "0px";
    return (
        <div className="side-bar" style={{width: props.width, height: props.height, minWidth: minwidth}}>
            <div className="border"></div>
            <div className="list">
                <a href="https://github.com/Edogames" target="_blank" className="btn" style={{"--Base-Scale": "60%"}}><h1>My Github Profile</h1></a>
            </div>
        </div>
    );
}
