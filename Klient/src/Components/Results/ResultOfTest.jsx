import React, { Component } from 'react'
import { useEffect } from 'react';
import Result from './Result.utils'
import ReactDOM from 'react-dom'
import Api from '../API/CheckTestApi'
import style from '../Results/Result.css'

export default class ResultOfTest extends React.Component {

  constructor(props) {
          super(props);
          this.styles = props.style;
          this.state = {
            score:0,
            text:"",
            text_style:""
          };
          this.GetScoreOfTest();
        }
                 
        redirectToRewiew(){
          window.location.assign("/rewiewTest");
        }
                         //alert("sdf");
                GetScoreOfTest = async () => {
                let api = new Api();
                const result =  await api.GetResultOfTest();
                console.log(result.data)
                if(result.data>70){
                  this.setState({text:"That's the good result"})
                  this.setState({text_style:"good"})
                }
                if(result.data>40&&result.data<70){
                  this.setState({text:"You could be better"})
                  this.setState({text_style:"middle"})
                }
                if(result.data<40){
                  this.setState({text:"Don't worry! You could be better"})
                  this.setState({text_style:"bad"})
                }
                this.setState({score:result.data})
                        }
          
        render() {
          return (
            <div className={this.styles}>
              <h1>Your score</h1>
              <p class="score">{this.state.score}%</p>
              <p class={this.state.text_style}>{this.state.text}</p>
              <a type="button"class="btn btn-info" onClick={()=>this.redirectToRewiew()}>Review</a>
              <br></br>
              <br></br>
              <button class="btn btn-danger">Finished</button>
            </div>
          );
        }
      }