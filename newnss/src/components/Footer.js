import './footer_style.css';
// import logo from '../images/logo.png';
import insta from '../images/insta.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import Profile from './Profile';

const Footer = () => {
  return (
    <div className="footere-content">
      <div className="footer">
          
            <div className="contact">
              <h4>OUR ADDRESS</h4>
              <p>
              IIT Guwahati
              <br />
              Guwahati, Assam,
              <br />
              India - 781039
              </p>
              <h4>EMAIL</h4>
              <a href="mailto:nss@iitg.ac.in">nss@iitg.ac.in</a>
              <br />
            </div>

            <div className="link">
              <h4>IMPORTANT LINKS</h4>
              <p><a href='https://iitg.ac.in/' target='_blank'> IIT Guwahati Home</a>
              <br/>
              <a href='https://www.iitg.ac.in/stud/gymkhana/' target='_blank'> IIT Guwahati Gymkhana</a>
              <br/>
              <a href='https://nss.gov.in/' target='_blank'> NSS Government</a>
              </p>
            </div>

            <div className="social-media">
                  <h4>SHARE WITH LOVE</h4>
                  <div className="social-image">
                    <a href="https://www.instagram.com/nss_iitg/" target="_blank" >
                      <img src={insta} alt="insta" />
                    </a>
                    <a href="https://twitter.com/nss_iitg" target="_blank" >
                      <img src={twitter} alt="X" />
                    </a>
                    <a href="https://www.youtube.com/@nssiitguwahati6964" target="_blank" >
                      <img src={youtube} alt="youtube" />
                    </a>
                  </div>
            </div>

      </div>

      <br/>
      <hr />

    </div>
  );
}
 
export default Footer;