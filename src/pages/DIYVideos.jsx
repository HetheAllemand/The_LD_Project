import './DIYVideos.css'

function DIYvideos() {
    return (
          <div className='diyvideos'>
            <h1 className='center-divider'>DIY Videos</h1> 
                <div className="videos">
                    <video src="./videos/homegarden.mp4" width="400" height="300" controls="controls" />
    
                    <video src="./videos/GEElectricRangeInstallation.mp4" width="400" height="300" controls="controls"  />
                    <video src="./videos/pouringslab.mp4" width="400" height="300" controls="controls"  />
                </div>
          </div>
    );
}

export default DIYvideos;