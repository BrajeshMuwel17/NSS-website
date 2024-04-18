import './footer_style.css';

const About = () => {
    return ( 
        <div className="about">
            <h1 className="About">About</h1>
      <hr />

      <div className="Container">
        <div className="Heading">
          <h3>What is NSS?</h3>
        </div>
        <div className="container-content">
          <div className="NSS-content">
            <p>The National Service Scheme (NSS) is an Indian government-sponsored public service program conducted by the Department of Youth Affairs and Sports of the Government of India. Popularly known as NSS, the scheme was launched in Gandhiji's Centenary year, 1969. In May 1969, a conference of student representatives (of universities and institutions of higher education) convened by the Ministry of Education and the University Grants Commission also unanimously agreed that a national-service scheme could be an instrument for national integration. The details were soon worked out and the Planning Commission sanctioned an outlay of ₹5 crores for the NSS during the Fourth Five-Year Plan, stipulating that the NSS be a pilot project in select institutions and universities. On 24 September 1969, the then Union Education Minister V.K.R.V. Rao launched the NSS at 37 universities in all states. The scheme has been extended to all states and universities in the country, and also +2 level institutes in many states.</p>
          </div>
          <div className="NSS-logo">
            <img src='/images/logo.png' alt="ok" />
          </div>
        </div>
      </div>

      <div className="Container">
        <div className="Heading">
          <h3>Motto</h3>
        </div>
        <div className="container-content1">
          <div className="motto-logo">
            <img src='/images/motto.png' alt="ok" />
          </div>
          <div className="motto-content">
            <p>This annual report merely reflects the passion for selfless service, dedication for community engagement and social commitment of our volunteers under the rubric of “NOT ME, BUT YOU. One of the key objectives of NSS is to awaken the social consciousness of the students and provide them with an opportunity to engage with people around the campus constructively and to impart public social responsibility. The motto of NSS is “NOT ME BUT YOU”, which expresses the essence of democratic living, upholds the need for selfless service and volunteerism and underlines that individual welfare is dependent on the welfare of the society as whole.</p>
          </div>
        </div>
      </div>


      <div className="Container">
        <div className="Heading">
          <h3>Symbol</h3>
        </div>
        <div className="container-content">
          <div className="NSS-content">
            <p>The symbol of the NSS is based on the ‘Rath’ wheel of the Konark Sun Temple situated in Orissa. These giant wheels of the Sun Temple portray the cycle of creation,preservation and release, and signify the movement in life across time and space. It stands for community as well as change and implies the continuous striving of National Service Scheme for social transformation & upliftment.</p>
          </div>
          <div className="symbol-logo">
            <img src='/images/symbol.jpg' alt="ok" />
          </div>
        </div>
      </div>
        </div>
     );
}
 
export default About;