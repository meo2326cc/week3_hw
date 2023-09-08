import logo from '../resource/logo-white.png';
import ig from '../resource/ic_social_ig.png';
import fb from '../resource/ic_social_fb.png';
import line from '../resource/ic_social_line.png';
import { Link } from 'react-router-dom';


export function Nav() {
    return (<>

        <div className='nav'>
            <div className="container flex">
                <Link to='./'><img src={logo} alt="logo" /></Link>
                <ul>
                    <li> <a href="#">系列鏡框</a></li>
                    <li>  <Link to='./store'>門市據點</Link></li>
                    <li> <a href="#">部落格</a></li>
                    <li> <Link to='./faq'>常見問題</Link></li>
                </ul>
            </div>
        </div>

    </>)
}

export function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="container">
                    <div className="footerNav">
                        <ul className='list'>
                            <li>首頁</li>
                            <li>系列鏡框</li>
                            <li>門市據點</li>
                            <li>部落格</li>
                            <li>常見問題</li>
                        </ul>
                        <ul>
                            <li><a href="#"><img src={fb} alt="fb" /></a> </li>
                            <li><a href="#"><img src={ig} alt="ig" /></a> </li>
                            <li><a href="#"><img src={line} alt="line" /></a> </li>

                        </ul>
                    </div>
                    <div className='flex'>
                        <div className="info">
                        <p><span className="material-icons-outlined">
                            call
                        </span>0800-000-00</p>
                        </div>
                        <ul>
                            <li> <a href="#"><img src={fb} alt="fb" /></a> </li>
                            <li> <a href="#"><img src={ig} alt="ig" /></a> </li>
                            <li> <a href="#"><img src={line} alt="line" /></a> </li>

                        </ul>
                    </div>
                        <div className="info">
                            <p><span className="material-icons-outlined">
                                email
                            </span>glasses@business.com</p>
                        </div>                    


                    <div className="credit">
                        <p>Copyright © 2020 Glasses.All rights reserved.</p>
                        <ul>
                            <li>隱私權政策</li>
                            <li>服務條款</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export function PagesFrame ({children , title}){
    return(
        <div className="container container-pages">
        <h2 className="h2-pages">{title}</h2>
        {children}
        </div>
    )
}