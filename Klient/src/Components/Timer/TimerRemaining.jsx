import React, {Component} from "react";
import { HubConnection, TransportType, ConsoleLogger, LogLevel } from '@aspnet/signalr'

export default class TimeRemaining extends Component
{
        
      constructor(props){
        super(props);
        this.state={
          connection:null
        }
      }
      componentDidMount = () => {
        var transport = TransportType.WebSockets;
        let logger = LogLevel.Information;
        const hubConnection = new HubConnection('https://localhost:44323', transport, logger );
     
        this.setState({ hubConnection }, () => {
          this.state.hubConnection
            .start()
            .then(() => console.log('Connection started!'))
            .catch(err => console.log('Error while establishing connection :('));
        });
      }
render(){
              return(
                      <div>
                      <p>    </p>
                      </div>
              )
}

}