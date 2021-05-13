import "../css/index.scss";

import avatarUrl from '../images/avatar.jpg';

const IndexPage = React.createClass({
     render(){
         return(
             <div className="index_page">
                 <ul className="teacher_list">
                     <li className="teacher_list_li">
                         <a href="#">
                             <div className="teacher_avatar" style={{backgroundImage:"url("+avatarUrl+")"}}></div>
                             <div className="teacher_detail">
                                <div className="teacher_person_info">
                                </div>
                             </div>
                         </a>
                     </li>
                 </ul>
             </div>
         )
     }
});

ReactDOM.render(<IndexPage/>,document.getElementById("app"));
