import {DiGithubBadge} from 'react-icons/di';
const Footer=()=>{
    const today=new Date();
    return (
        <footer className="footer bg-secondary sticky-sm-bottom text-light">
            <div className="text-wrapper div-wrapper">
            <p className="author">{today.getFullYear()} - JC</p>
            <a className="link" target="_blank" href="https://github.com/JoaquinC539/TaskFront" rel="noopener noreferrer"><DiGithubBadge /></a>
            </div>
        </footer>
    );
}

export default Footer;