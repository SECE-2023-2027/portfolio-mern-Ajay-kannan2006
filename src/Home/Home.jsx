import Navbar from './NavBar';
import './Home.css'
import LeftHome from './LeftHome';
import RightHome from './RightHome';
import HomeFooter from './HomeFooter';

export default function Home() {
    return (
        <>
            <div id="home" className='block'>
                <Navbar />
                <LeftHome />
                <RightHome />
                <HomeFooter />
            </div>
        </>
    );
}