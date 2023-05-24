import './About.scss';
import snail from '../../assets/snail.jpg'
const About=()=>{
    return (
        <div className='About'>
         <h3>Hello, I'm JC</h3>
        <p>I created this app to manage siemple teams that use other app not meant for the purpose of coordinating and tracking tasks and employees </p>

        <h4>Want to contact me?</h4>
        <p>Send an email to <span>cjoaquinangel@gmail.com</span> and I will respond as soon as possible</p>

        <img src={snail} alt='snail' className='img-fluid'></img>
        </div>


    )
}
export default About;