import './About.css'
import CertificateCard from './CertificateCard'
import KnowMe from './KnowMe'
import MySkills from './MySkills'
import C_Udemy from '../assets/C_Programming.jpg'
import DSA_cpp from '../assets/DSA_cpp.jpg'
import Java from '../assets/Java_certificate.jpg'
import EBox_C from '../assets/E_Box_C.png'
import EBox_CPP from '../assets/E_Box_CPP.png'
import Sql from '../assets/SQL.png'

export default function AboutMe() {
    return (
        <>
            <div id="about-me" className='block'>
                <div className="about-description">
                    <h1>ABOUT ME</h1>
                    <p>Here you will find more information about me, what I do, and my current skills <br />mostly in terms of programming and technology</p>
                </div>
                <KnowMe />
                <MySkills />
                <div className="certificate"></div>
                <h2 className='certifications'><b>Certifications</b></h2>
                <div className="certificate-container">
                    <CertificateCard url={EBox_C} name="Essentials of C Programming" issuedBy="E-Box" date="July 2024" />
                    <CertificateCard url={C_Udemy} name="Advanced C Programming" issuedBy="Udemy" date="January 2024" />
                    <CertificateCard url={DSA_cpp} name="Data Structures using C and CPP" date="June 2024" issuedBy="Udemy" />
                    <CertificateCard url={EBox_CPP} name="C++ Programming " date="July 2024" issuedBy="E-Box" />
                    <CertificateCard url={Java} name="Java Programming" date="November 2024" issuedBy="Udemy" />
                    <CertificateCard url={Sql} name="SQL Basics" date="October 2024" issuedBy="Skill Rack" />
                </div>
            </div >
        </>
    )
}