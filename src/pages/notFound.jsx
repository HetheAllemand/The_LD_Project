import "./notFound.css";


function NotFound(){
    return (
        <div className="not-found">
            <img src="/images/404error.png" alt=""></img>
            
            <div className="error-text">
                <a href='/home'>
                404 Head Back Home</a>
            </div>
            
        </div>
    );

}

export default NotFound;