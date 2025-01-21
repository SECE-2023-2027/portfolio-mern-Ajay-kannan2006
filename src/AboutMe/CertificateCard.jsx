// import './About.css'
// import url from '../assets/Profile.jpg';
export default function CertificateCard({ url, name, issuedBy, date }) {
    return (
        <div class="certificate-card">
            <img src={url} alt="Certificate Icon" />
            <h3>{name}</h3>
            <p>Issued by {issuedBy}</p>
            <p>Completed: {date}</p>
            <a href="https://coursera.org/certificate/example" target="_blank">View Certificate</a>
        </div>
    );
}