import { Nav , Footer , PagesFrame} from "./component";
import store1 from '../resource/store-1-1.png';
import googlemap from '../resource/mapx2.png'

function Content() {
    return(<>
    <PagesFrame title='門市據點'>

        <h3 className="h3-pages mt-32">選擇分店 <select name="store" disabled="disabled" id=""> <option value="台北中山旗艦店">台北中山旗艦店</option> </select> </h3>
        <div className="flex-store mt-40 justify-content-between">
            <div className="store-card">
                <img src={store1} alt="" />
                <div className="store-card-inner">                
                    <h3 className="h3-pages fw-n h3-pages-box pl-27">台北中山旗艦店</h3>
                <div className="py-16 pl-27">   
                    <p className="mb-8"> <span className="material-icons-outlined">call</span> 電話：(02)000-1234</p>
                    <p className="mb-8"> <span className="material-icons-outlined">schedule</span> 營業時間：10:00-21:00</p>
                    <p className="mb-8"> <span className="material-icons-outlined">location_on</span> 地址：台北市中山區南京東路25巷2-1號</p>
                </div></div>
                

            </div>
            <div className="googlemap">
                <img src={googlemap} alt="" />
            </div>
        </div>

    </PagesFrame>
    </>)
}

export default function Store () {
    return(<>
    <Nav/>
    <Content/>
    <Footer/>
    </>)
}