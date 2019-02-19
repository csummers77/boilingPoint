import React, {Component} from 'react'; 
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

class TemperatureApp extends Component{
    constructor(){
        super();
        this.state = {
            temperature: 18,
            scale: 'c'
        }
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.handleCelciusChange = this.handleCelciusChange.bind(this)
    }
    handleCelciusChange(value){
        console.log("Changed" +value);
        this.setState({
            temperature: value.target.value,
            scale: "c"
        })
    }
    handleFahrenheitChange(value){
        console.log("Changed" +value);
        this.state({
            temperature: value.target.value,
            scale:"f"
        })
    }
    render(){
        const scale = this.state.scale;
        const temp = this.state.temperature;
        if(scale === 'c'){
            const fTemp = (temp * 9 / 5) + 32;
            const cTemp = temp; 
        }else if(scale === 'f'){
            const fTemp = temp;
            const cTemp = (temp - 32) * 5 / 9
        }
        return(
            <div id="temp-app">
            <TemperatureInput scale="f" temperature={this.state.temperature} onChange={this.handleCelciusChange} />
            <TemperatureInput scale="c" temperature={this.state.temperature} onChange={this.handleCelciusChange} />
            <BoilingVerdict temperature={cTemp}/>
            </div>
        )
    }
}
export default TemperatureApp;