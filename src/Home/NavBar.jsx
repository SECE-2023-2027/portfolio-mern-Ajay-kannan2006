import './Home.css'

export default function Navbar() {
    return (
        <nav id='nav-bar'>
            <h2 class="my-name">Ajay K K</h2>
            <ul className='elements'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about-me">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skill">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}