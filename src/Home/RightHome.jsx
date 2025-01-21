import './Home.css'
import { SiLeetcode } from "react-icons/si";
export default function RightHome() {
    return (
        <div id='right-home'>
            <div className="home-content">
                <h1>&#128075;Hi, I'm <span class="highlight">Ajay K K</span></h1>
                <h2>A Passionate <span class="highlight">Full Stack Developer</span></h2>
                <p>
                    I specialize in building responsive, scalable, and efficient web applications.
                    Let's create something amazing together!
                </p>
                <div class="home-buttons">
                    <a href="https://github.com/Ajay-kannan2006" className="btn-icons" target="_blank"><i class="fa-brands fa-github fa-xl"></i></a>
                    <a href="https://linkedin.com/in/ajay-kannan-a96352285" className="btn-icons" target="_blank"><i class="fa-brands fa-linkedin fa-xl"></i></a>
                    <a href="https://leetcode.com/u/Ajay_kannan35/" className="btn-icons leet" target="_blank"><SiLeetcode /></a>
                </div>
            </div>
        </div>
    );
}