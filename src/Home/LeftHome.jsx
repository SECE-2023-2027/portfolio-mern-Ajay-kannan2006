import './Home.css'
import profileImg from '../assets/Profile.jpg';
export default function LeftHome() {
    return (
        <div id="left-home">
            <div class="profile-picture">
                <img src={profileImg} alt="Your Picture" />
            </div>
        </div>
    );
}
