import './App.css';
import { MdLocationOn } from "react-icons/md";
import { IoIosMailOpen , IoMdLock } from "react-icons/io";
import { MdWatchLater , MdOutlineInsertChart ,MdEmail } from "react-icons/md";
import { FaFacebookF , FaTwitter , FaLinkedinIn , FaSearch , FaServer , FaMapMarkerAlt ,FaStar} from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { SiInstructure } from "react-icons/si";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaChalkboardUser } from "react-icons/fa6";
import { TbBrandOpenai } from "react-icons/tb";
import { IoCall } from "react-icons/io5";


import myimg1 from './img/logo.png';
import myimg2 from './img/i1.jpg';
import myimg3 from './img/i2.png';
import myimg4 from './img/i3.png';
import myimg5 from './img/i9.png';

function App() {
  return (
    <header>
      {/* top header */}
      <div className="bgblue">
        <div className="container">
          <div className="top_header flex">
            <div className="left_add flex"> 
              <div className="left_text flex">
                <p className="icon flex"><MdLocationOn></MdLocationOn></p>
                <span>California, TX 70240 </span>
              </div>
              <div className="left_text flex">
                <p className="icon flex"><IoIosMailOpen></IoIosMailOpen></p>
                <span> Info@gmail.com</span>
              </div>
            </div>

            <div className="right_social flex">
              <div className="right_side flex">
                <p className="watch flex"><MdWatchLater></MdWatchLater></p>
                <p className="watch_text">Office Hours: 8:00 AM - 7:45 PM</p>
              </div>

              <p className="r_icon"><FaFacebookF></FaFacebookF></p>
              <p className="r_icon"><FaTwitter></FaTwitter></p>
              <p className="r_icon"><FaLinkedinIn></FaLinkedinIn></p>
            </div>
          </div>
        </div>
      </div>

      {/* navbar */}
      <nav>
          <div className="container">
            <div className="logo_header flex">
              <div className="logo">
                <img src={require ('./img/logo.png')}></img>
              </div>
              <div className="main_menu">
                  <div className="single_menu"><a>HOME</a></div>
                  <div className="single_menu">COMPANY</div>
                  <div className="single_menu">SERVICES</div>
                  <div className="single_menu">CASE STUDIES</div>
                  <div className="single_menu">SHOP</div>
                  <div className="single_menu">BLOG</div>
                  <div className="single_menu">CONTACT US</div>
              </div>
              <div className="search">
                <p><FaSearch></FaSearch></p>
              </div>
            </div>
          </div>
      </nav>

      {/* slider */}
       
        <div className="banner">
          <div className="side_img flex">
            <img src={require ('./img/i2.png')} style={{objectFit:"cover", width:"40%"}}></img>
          </div>
            
          <div className="banner1">
              <p className="text_1">Powerful Digital </p>
              <p className="text_2">IT solutions Company</p>
              <p className="text_3">Affixed pretend account ten natural. Need eat week even yet that.
               Incommode delighted he resolving sportsmen do in listening.</p>
          </div>
        </div>

      {/* card */}
      <section className="spacer">
        <div className="container">
          <div className="main_ser">
            <div className="single_ser">
              <div className="card">
                <div className="inner_box1">
                  <div className="front_box">
                    <p className="our">OUR SERVICES</p>
                    <h1 className="ser_title1">We provide IT & Business solutions</h1>
                    <p className="ser_text">Outlived no dwelling denoting in peculiar as he believed. 
                        Behaviour excellent middleton be as it curiosity departure ourselves very extreme.</p>
                    <div className="btn">
                    <button className="btn2">See More</button>
                  </div>   
                </div>
              </div> 
            </div>
            <div className="card">
              <div className="inner_box">
                <div className="front_box">
                  <p className="ser_icon"><IoMdLock></IoMdLock></p>
                  <p className="ser_title">Data Security</p>
                  <p className="ser_text">Easy mind life fact with see has bore ten. Parish any 
                  chatty can elinor direct for former. Up as meant widow.</p>
                  </div>
                </div> 
              </div>
              <div className="card">
                <div className="inner_box">
                  <div className="ser_box">
                    <p className="ser_icon"><FaHandshake></FaHandshake></p>
                    <h1 className="ser_title">IT Management</h1>
                    <p className="ser_text">Easy mind life fact with see has bore ten. Parish any chatty can 
                    elinor direct for former. Up as meant widow.</p>
                  </div>
                </div> 
              </div>
            </div>
          </div>

          <div className="main_ser-2">
            <div className="single_ser">
              <div className="card">
                <div className="inner_box">
                  <div className="ser_box">
                    <p className="ser_icon"><TbBrandGoogleAnalytics></TbBrandGoogleAnalytics></p>
                    <h1 className="ser_title">Analytic Solutions</h1>
                    <p className="ser_text">Easy mind life fact with see has bore ten. Parish any 
                    chatty can elinor direct for former. Up as meant widow.</p>  
                  </div>
                </div> 
              </div>
              <div className="card">
                <div className="inner_box">
                  <div className="ser_box">
                    <p className="ser_icon"><MdOutlineInsertChart></MdOutlineInsertChart></p>
                    <h1 className="ser_title">Firewall Advance</h1>
                    <p className="ser_text">Easy mind life fact with see has bore ten. Parish any 
                    chatty can elinor direct for former. Up as meant widow.</p>
                  </div>
                </div> 
              </div>
              <div className="card">
                <div className="inner_box">
                  <div className="ser_box">
                    <p className="ser_icon"><SiInstructure></SiInstructure></p>
                    <h1 className="ser_title">Infrastructure Plan</h1>
                    <p className="ser_text">Easy mind life fact with see has bore ten. Parish any
                     chatty can elinor direct for former. Up as meant widow.</p>
                  </div> 
                </div> 
              </div>
            </div> 
          </div>
        </div>
      </section>

      {/* work process */}
      <section>
        <div className="work_chart">
          <div className="work_pro">
            <p className="work_1">WORK PROCESS</p>
            <p className="work_2">How we help of your business</p>
            <p className="work_3">Grow and successful</p>
          
            <div className="container flex">
              <div className="item">
                <div className="img_icon">
                  <p><FaServer></FaServer></p>
                  <span className="number">01</span>
                  <p className="num_1">Choose a Service</p>
                </div>
              </div>
              <div className="item2">
                <div className="img_icon2">
                  <p><FaChalkboardUser></FaChalkboardUser></p>
                  <span className="number">02</span>
                  <p className="num_2">Request a Meeting</p>
                </div>
              </div>
              <div className="item">
                <div className="img_icon">
                  <p><TbBrandOpenai></TbBrandOpenai></p>
                  <span className="number">03</span>
                  <p className="num_3">Let's Make it Happen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about */}

      <section className="spacer">
        <div className="back_bglight">
          <div className="container">
            <div className="about_part">
              <div className="about_title">
                <p className="first_about">Why Choose Us</p>
                <h1 className="sec_ideas">What we promise high quality IT Agency Services</h1>
                <p  className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facere voluptate a quis est ullam impedit, tempora eaque maxime, illum alias 
                  repudiandae enim aspernatur, error debitis laudantium, deleniti aperiam rem nihil.
                </p>
                <p className="choose_1">Experts around the world</p>
                <p className="choose_2">Best Practice for industry</p>

                <div className="contact flex">
                  <p className="con_1"> Join our team - come work with us.</p>
                  <p className="con_2 flex"><PiPhoneCallFill></PiPhoneCallFill></p>
                  <p className="con_3"> +123 456 7890</p>
                </div>
              </div>   

              <div className="about_img">
                <img src={require ('./img/i3.png')}></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* title1 */}

      <section>
        <div className="container">
          <div className="main_title">
            <p className="blue_text">TEAM MEMBERS</p>
            <p className="dark_text">Meet our professional and expert team members</p>
            <p className="long_text">Outlived no dwelling denoting in peculiar as he believed. 
            Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.</p>
          </div>
        </div>
      </section>
  
      {/* testimonial */}

      <section>
        <div className="container">
          <div className="main_part flex">
            <div className="sec_part flex">
              <div className="part_img flex">
                <img src={require ('./img/i4.jpg')}></img> 
              </div>
              <div className="part_img flex">
                <img src={require ('./img/i5.jpg')}></img>
              </div>
              <div className="part_img flex">
                <img src={require ('./img/i6.jpg')}></img>
              </div>
              <div className="part_img flex">
                <img src={require ('./img/i7.jpg')}></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* qusetion */}
      <section>
        <div className="back_que">
          <div className="container">
            <div className="que_part">
              <div className="que_img">
                <img src={require ('./img/i9.png')}></img>
              </div>

              <div className="que_title">
                <p className="first_que">QUESTION & ANSWER</p>
                <h1 className="sec_que">Most common question about our services</h1>
                            
                <p className="que1">Where can I get analytics help?</p>
                <p className="que_des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consectetur at, sunt maxime,
                   quod alias ullam officiis, ex necessitatibus similique odio aut! Provident, adipisci esse
                    vero magni necessitatibus quisquam commodi.</p>
                <p className="que2">How much does data analytics costs?</p>
                <p className="que3">What kind of data is needed for analysis?</p>
              </div>   
            </div>
          </div>
        </div>
      </section>


      {/* title2 */}

      <section>
        <div className="back_bglight1">
          <div className="container">
            <div className="our_title">
              <p className="blog1">OUR BLOG</p>
              <p className="blog2">Latest News & Articles Directly from Blog</p>
              <p className="blog3">Outlived no dwelling denoting in peculiar as he believed. 
              Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.</p>
            </div>
          </div>

          <div className="main_admin flex">
            <div className="single_admin flex">
              <div className="box">
                <div className="ser_img">
                  <img src={require ('./img/i10.jpg')}></img>
                </div>
                <div className="card_text flex">
                  <p>Admin</p>
                  <p>Comment</p>
                </div>
                <div className="card_title">
                  <p className="dark_card">Consulted admitting is power acuteness.</p>
                  <p className="des_card">Wooded ladies she basket season age her uneasy saw. Discourse
                     unwilling am no described dejection incommode.</p>
                  <p className="read">Read More </p>
                </div>
              </div>
              <div className="box">
                <div className="ser_img">
                  <img src={require ('./img/i11.jpg')}></img>
                </div>
                <div className="card_text flex">
                  <p>Admin</p>
                  <p>Comment</p>
                </div>
                <div className="card_title">
                  <p className="dark_card">Unsatiable entreaties may collecting Power.</p>
                  <p className="des_card">Wooded ladies she basket season age her uneasy saw. Discourse
                     unwilling am no described dejection incommode.</p>
                  <p className="read">Read More </p>
                </div>
                </div>
              </div>
              <div className="box">
                <div className="ser_img">
                  <img src={require ('./img/i12.jpg')}></img>
                </div>
                <div className="card_text flex">
                  <p>Admin</p>
                  <p>Comment</p>
                </div>
                <div className="card_title">
                  <p className="dark_card">Discovery incommode earnestly no he commanded</p>
                  <p className="des_card">Wooded ladies she basket season age her uneasy saw. Discourse
                     unwilling am no described dejection incommode.</p>
                  <p className="read">Read More </p>
                </div>
              </div>
            </div>
          </div>
        </section>

    {/* footer */}
      <section>
        <div className="main_f flex">
          <div className="single_table1">
            <div className="part_1">
              <img src={require ('./img/i13.png')}></img>
            </div>
            <p className="f_des">Required honoured trifling eat pleasure man relation. Assurance yet bed was
              improving furniture man. Distrusts delighted Excuse few the remain highly feebly
              add people manner say. It high at my mind by roof.
            </p>
            <div className="footer_icon flex">
              <p className="f_icon"><FaFacebookF></FaFacebookF></p>
              <p className="f_icon"><FaTwitter></FaTwitter></p>
              <p className="f_icon"><FaLinkedinIn></FaLinkedinIn></p>
            </div>
          </div>

          <div className="single_table2">
            <div className="part_2">
              <p className="company">Company</p>
              <p className="com_text">Home</p>
              <p className="com_text">About Us</p>
              <p className="com_text">Why Choose Us</p>
              <p className="com_text">Team Members</p>
              <p className="com_text">Blog</p>
            </div>
          </div>

          <div className="single_table3">
            <div className="part_3">
              <p className="company">Solutions</p>
              <p className="sol_text">Services Version One</p>
              <p className="sol_text">Services Version Two</p>
              <p className="sol_text">IT Management</p>
              <p className="sol_text">Case Studies</p>
              <p className="sol_text">Help & Faqs</p>
            </div>
          </div>

          <div className="single_table2">
            <div className="part_2">
              <p className="con_part">Contact Info</p>
              <div className="con_info flex">
                <p className="map flex"><FaMapMarkerAlt></FaMapMarkerAlt></p>
                <p className="map_text">5919 Trussville Crossings Pkwy, AL 35235</p>
              </div>
              <div className="con_info flex">
                <p className="map flex"><MdEmail></MdEmail></p>
                <p className="map_text">info@gmail.com</p>
              </div>
              <div className="con_info flex">
                <p className="map flex"><IoCall></IoCall></p>
                <p className="map_text">+0456 123 4455</p>
              </div>
              <p className="map_text1">+123-456-7890</p>
            </div>
          </div>
        </div> 
                  
        <div className="last_f">
          <div className="last_1">
            <div className="container">
              <p>Copyright © 2023. Designed by WordPressRiver</p>
            </div>
          </div>
        </div>
      </section>

  </header>
  )
}

export default App;
