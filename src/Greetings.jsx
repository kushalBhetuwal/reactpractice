import ReactPlayer from 'react-player/youtube';
const Greetings =()=>{
    const vidurl = "https://www.youtube.com/watch?v=FkowOdMjvYo";

    function toggle(){
        if(vidurl.paused){
            vidurl.play()
        }else{
            vidurl.paused();
        }
    }

return (
    <div>
    <ReactPlayer url ={vidurl}
    playing ={true}
     volume={1}
    muted={false}
    controls={true}
    playIcon={true}

    />

    <button onClick={toggle}>start</button>
    </div>
)
}

export default Greetings;