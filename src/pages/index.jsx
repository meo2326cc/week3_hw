import { Nav, Footer } from './component.jsx';
import section3_1 from '../resource/home-section3-1.png';
import section3_2 from '../resource/home-section3-2.png';
import section3_3 from '../resource/home-section3-3.png';
import section4_1 from '../resource/home-section4-1.png';
import section4_2 from '../resource/home-section4-2.png';
import section5_1 from '../resource/home-section5-1.png';
import section5_2 from '../resource/home-section5-2.png';
import section5_3 from '../resource/home-section5-3.png';
import section5_4 from '../resource/home-section5-4.png';


function Banner() {
    return (<>
        <div className="header">
            <div className="container"><div className="title"><h2>Promise-Desert 2020 早春系列</h2>
                <h1>看得清，才能看得遠</h1>
                <button type='button'>立即購買</button>
            </div>

            </div>

        </div>
    </>)
}

function Section({h3,cls,children}){
    return (<div className={cls}>
    <div className="container">
        <h3>{h3}</h3>
        {children}
    </div>
</div>)
}



function Intro2() {

    const cardInfo = [{ icon: <span className="material-icons-outlined">paid</span>, h4: '單一價格', p: '無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。' }, { icon: <span className="material-icons-outlined">schedule</span>, h4: '20 分鐘即可取件', p: '為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。' }, { icon: <span className="material-icons-outlined">favorite_border</span>, h4: '安心售後服務', p: '我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。' }, { icon: <span className="material-icons-outlined">voicemail</span>, h4: '關於鏡片', p: '使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。' }];
    
    function Card() {
        return (<ul className='cardContainer'>

            {cardInfo.map((i) => {
                return <li key={i} className='card'>{i.icon}<h4>{i.h4}</h4> <p>{i.p}</p></li>
            })}
        </ul>)
    }
    return (<Section h3='用專業的心，做專業的事' cls='intro2'><Card/></Section>)
}


function Intro3() {
    const info = [{
        img:section3_1,
        h4:'OPTICAL'
    },
    {
        img:section3_2,
        h4:'SUNGLASSES'
    },
    {
        img:section3_3,
        h4:'FUNCTIONAL'
    }];

    return(<Section cls='intro3' h3='經典系列鏡框'>
            <ul className='cardContainer'>
                {info.map((i,num)=>{
                    return(<li key={num} >
                        <img src={i.img} alt="" />
                        <h4>{i.h4}</h4>
                    </li>)
 
                })}
            </ul>
    </Section>)
}


function Intro4() {

    return(<Section cls='intro4' h3='聯名設計鏡框'>
        <div className="cardContainer">
            <div className='intro4-div'>
                <img src={section4_1} alt="" />
                <h4>DOUBLE A+</h4>
            </div>
            <div className='intro4-div'>
                <img src={section4_2} alt="" />
                <h4>YOUTH</h4>
            </div>
        </div>
    </Section>)
}

function Intro5() {

    const cardInfo = [
        {img:section5_1,
        user:'Jessy',
    p:'眼鏡品質優良，下次還會想來這邊購買！',date:'2021/06/20'},{img:section5_2,
        user:'凱倫',
    p:'做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！',date:'2021/04/18'},{img:section5_3,
        user:'悠悠',
    p:'謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！',date:'2020/12/25'},{img:section5_4,
        user:'Kyuan',
    p:'服務很好，品質沒有任何問題，非常喜歡。',date:'2020/10/31'}
    ]

    return(
        <Section cls='intro5' h3='顧客推薦'>
            <ul className="cardContainer">
                {cardInfo.map((item,index)=>{
                    return(<li key={index} className='card intro5-card'> 
                                <img src={item.img} alt="" />
                                <h4 className='user'>{item.user}</h4>
                                <p className='text'>{item.p}</p>
                                <p className='date'>{item.date}</p>
                            </li>)
                })}
            </ul>
        </Section>
    )
}

function ContactUs(){
    return(<Section cls='contactUs' h3='聯絡我們'>
        <p>我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。</p>
        <form action="" method='post'>
            <div>
                <label htmlFor="username" >姓名</label>
                <input id='username' type="text" name='username' placeholder='陳小明'/>
            </div>
            <div>
                <label htmlFor="phone" >聯絡電話</label>
                <input id='phone' type="tel" name='phone' placeholder='0912-345-678'/>
            </div>
            <div>
                <label htmlFor="email">電子郵件</label>
                <input id='email' type="email" name='email' placeholder='example@email.com'/>
            </div>
            <div>
                <label htmlFor="advice">意見反應</label>
                <textarea name="advice" id="advice" cols="30" rows="10" placeholder='請輸入您的意見'></textarea>
            </div>
            <div>
           <input type="checkbox" className='checkbox'/>
            我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。
            </div>
            <div>
                <button type='submit'>確認送出</button>
            </div>

        </form>
    </Section>)
}

export default function Index() {
    return (<>
        <Nav />
        <Banner />
        <Intro2 />
        <Intro3/>
        <Intro4/>
        <Intro5/>
        <ContactUs/>
        <Footer />
    </>)
}
