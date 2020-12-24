
import React from 'react'

export default function HowToFieldMultipleTest(){


        return(
                <div>
                <div style={{marginLeft:300+'px', marginTop:40+'px'}}>
                <ul style={{fontSize:20+'px',color:"black" ,background:"white",width:70+'%'}}>
                   <ol>
                           <strong>Number of question</strong> : this field doesn't be empty. In this field <br></br>
                           you write from 1 to .. numbers of questions
                   </ol>
                   <ol>
                           <strong>Question</strong> : this you write a question also this field doesn't be empty
                   </ol>
                   <p><strong>All of this options must contain asnwers</strong></p>
                   <ol>
                          Option A
                   </ol>
                   <ol>
                   Option B
                   </ol>
                   <ol>
                    Option C
                   </ol>
                   <p><strong>All of this fields must contain true or false does answer correct or no </strong></p>
                   <ol>
                           First Answer
                   </ol>
                   <ol>
                           Second Answer 
                   </ol>
                   <ol>
                           Third Answer
                   </ol>
                   <ol>
                           <strong>Complexicy</strong>  : this type complicity of question.
                                                        Scale of complicity from 1..3<br></br>
                                                        1 - Easy
                                                        2 - Medium
                                                        3 - Hard 
                   </ol>
                </ul>
                </div>
                <div>
                        <p style={{color:"whitesmoke",fontSize:30+"px"}}>Table filling example</p>
                <table class="table table-dark">
                <thead>
                <tr>
                <th scope="col">Number of Question</th>
                <th scope="col">Question</th>
                <th scope="col">OptionA</th>
                <th scope="col">OptionB</th>
                <th scope="col">OptionC</th>
                <th scope="col">FirstAnswer</th>
                <th scope="col">SecondAnswer</th>
                <th scope="col">ThirdAnswer</th>
                <th scope="col">Complicity</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>1</td>
                <td>Do you like programming?</td>
                <td>Yes</td>
                <td>No</td>
                <td>other</td>
                <td>True</td>
                <td>False</td>
                <td>False</td>
                <td>2</td>
                </tr>
                </tbody>
                </table>
                </div>
                </div>
        );

}