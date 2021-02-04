import React from 'react'
import './header.css'
import '../Assets/fontawesome-free-5.15.2-web/css/all.css'
export default function SideBar() {
    return (
        <div className="container" >
            <h1 className="name " > EL MOUSSAOUI Mohamed </h1>
            <p style={{ marginTop: '-10px', color: "#fff",textAlign:'center' }} > Full Stack Developper </p>
            <div className="image-holder">
                <img alt="" className="profile-image"
                    src="https://media-exp1.licdn.com/dms/image/C5603AQEwbB9yifL2Fg/profile-displayphoto-shrink_200_200/0/1606494112574?e=1617840000&v=beta&t=2s02zPlP_WEfW7CdeCQ87b7Hpuk6cSf1V4zWaYYRfmw" />
            </div>
            <div className="contact" >
                <div className='title-header'
                >
                    <h3 className='contact-style' > Contact Me </h3>
                </div>

                <table>
                    <tr  >
                        <td style={{ padding: "10px" }}>
                            <i class="fas fa-phone-square-alt icon-style" style={{ fontSize: '20px', marginTop: '5px' }} ></i>
                        </td>
                        <td>
                            <p className="text"> +212 6 87 92 48 80  </p>
                        </td>
                    </tr>
                    <tr >
                        <td style={{ padding: "10px" }}>
                            <i class="fas fa-map-marker-alt icon-style" style={{ fontSize: '20px', marginTop: '5px' }} ></i>
                        </td>
                        <td>
                            <p className="text"> Street mohammadia building majd 4,Tetouan  </p>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: "10px" }}>
                            <i class="fas fa-envelope icon-style" style={{ fontSize: '20px', marginTop: '5px' }}></i>
                        </td>
                        <td>
                            <p className="text"> mohamed.mossawi@gmail.com </p>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: "10px" }}>
                            <i class="fab fa-linkedin icon-style" style={{ fontSize: '20px', marginTop: '5px' }}></i>
                        </td>
                        <td>
                            <a href="https://www.linkedin.com/in/mohamed-el-moussaoui-9506b71b9/" className="text"> Mohamed EL-MOUSSAOUI</a>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: "10px" }}>
                            <i class="fab fa-github icon-style" style={{ fontSize: '20px', marginTop: '5px' }}></i>
                        </td>
                        <td>
                            <a href="https://github.com/M-ELMOUSSAOUI" className="text">  M-ELMOUSSAOUI</a>
                        </td>
                    </tr>

                </table>
            </div>

            <div className='contact' >
                <div className="title-header">
                    <h3 className='contact-style'> Languages </h3>
                </div>
                <div className='lng1'  >
                    <p className="text"> Arabic: </p>
                    <div className="dots">
                        <div className="dot dot-filled">

                        </div>
                        <div className="dot dot-filled">

                        </div>
                        <div className="dot dot-filled">

                        </div>
                        <div className="dot dot-filled">

                        </div>
                        <div className="dot dot-filled">

                        </div>
                    </div>
                </div>
                <div className='lng1'  >
                    <p className="text"> English: </p>
                    <div className="dots">
                        <div className="dot dot-filled">

                        </div>
                        <div className="dot dot-filled">

                        </div>
                        <div className="dot dot-filled">

                        </div>
                        <div className="dot dot-filled ">

                        </div>
                        <div className="dot ">

                        </div>
                    </div>
                </div>
                <div className='lng1'  >
                    <p className="text"> French: </p>
                    <div className="dots">
                        <div className="dot dot-filled">

                        </div>
                        <div className="dot dot-filled">

                        </div>
                        <div className="dot dot-filled">

                        </div>
                        <div className="dot ">

                        </div>
                        <div className="dot ">

                        </div>
                    </div>
                </div>

                <div className='lng1'  >
                    <p className="text"> Spanish: </p>
                    <div className="dots">
                        <div className="dot dot-filled">

                        </div>
                        <div className="dot dot-filled">

                        </div>
                        <div className="dot  dot-filled ">

                        </div>
                        <div className="dot  ">

                        </div>
                        <div className="dot ">

                        </div>
                    </div>
                </div>
            </div>
            <div className='contact'>
                <div className="title-header">
                    <h3 className='contact-style'> Skills </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p className='text' style={{ fontWeight: 'bold' }}> Language:  </p>
                    <p className='text' style={{ marginLeft: '3px',textAlign:'start'}}>
                        html, css, JAVA, JavaScript,SQL, C, C++, C# php, pyhon,jQuery,ajax,JSON.
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p className='text' style={{ fontWeight: 'bold' }}> Frameworks:  </p>
                    <p className='text' style={{ marginLeft: '3px' }}>
                        JAVA EE, Hibernate, Spring, ReactJS, Angular & AngularJS, ReactNative, Expo, Android Studio, ASP.NET(C#),Firebase,SQLite.
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <p className='text' style={{ fontWeight: 'bold' }}> Platforms/IDE's:  </p>
                    <p className='text' style={{ marginLeft: '3px',textAlign:'start '}}>
                        Eclipse, NetBeans,Unity,VSCode,Visual Studio, Anaconda, AndroidStudio
                    </p>

                </div>
            </div>
            <div className='contact' >
                <div className="title-header">
                    <h3 className='contact-style'> Interest </h3>
                </div>
                <div>
                    <p className='text'>
                         Music,Travelling, Mobiles and Web developpements
                    </p>
                </div>
            </div>
        </div>
    )
}
