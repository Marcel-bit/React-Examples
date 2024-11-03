import profilePic from './assets/profile.jpg'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture" />
            <h2 className="card-title">Marcel</h2>
            <p className="card-text">Computer science and do pull ups for fun</p>
        </div>
    );
}

export default Card