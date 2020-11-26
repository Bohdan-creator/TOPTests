import React,{Component} from 'react'
import Api from '../API/CheckTestApi'
import jwt_decode from "jwt-decode";
import { Progress } from 'reactstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "./ProgressProvider";
import style from '../UserProfile/Profile.css'
export default class UserProfile extends Component{
        constructor(){
                super();
                let decoded=null;
                this.id=null;
               if(sessionStorage.getItem("accessToken")!==null){
                decoded = jwt_decode(sessionStorage.getItem("accessToken"));
               this.id =  decoded[
                       "sub"
                     ];
                     this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                }
                this.state = {
                        text:[]
                      };
                this.GetResultsOfTest();
        }
        GetResultsOfTest = async () => {
                let api = new Api();
                console.log(this.id);
                const result =  await api.GetResultsOfTest(this.id);
                console.log(result.data)
                this.setState({text:result.data});        
        }
        render(){
                return(
                        <div>
                        <div class="rightSide">
                {this.state.text.map(item =>
                <div>
                <div class="item_result">
                <span class="result">{item.dateTime} {this.monthNames[item.month]}</span>
                </div>
                <div class="item_result">
                <span class="result">Test : {item.nameOfTest}</span>
                </div>
                <br></br>
                <ProgressProvider valueStart={0} valueEnd={item.score}>
              {(value) => <CircularProgressbar value={value} text={`${value}%`} />}
                 </ProgressProvider>          </div>)
               }
                        </div>
                        <div class="leftSide">
                                <h1>Profile</h1>
                        <h2 class="oneSymbol" style={{fontSize:75+'px'}}>
                        {sessionStorage.getItem("name").charAt(4)}</h2>
                        <a href="" style={{fontSize:30+'px'}} onClick={()=>this.GetResultsOfTest()}>Results of tests</a>
                        <br></br>
                        <a href=""style={{fontSize:30+'px'}} >Average Result</a>
                        <br></br>
                        <a href=""style={{fontSize:30+'px',color:'red'}} >Delete Account</a>
                        </div>
                        </div>
                );
        }
}
