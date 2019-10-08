import './App.css';
import Button2 from './components/ButtonTwoColumn';
import Button1 from './components/ButtonOneColumn';
import Input from './components/Input';
import Row from './components/Row';
import React, {Component} from 'react';

class App extends Component{

  state = {
      input_value:'0',
      input_value_2:null,
      isOperating:false,
      isSubtracting:false,
      isAdding:false,
      isDividing:false,
      isMultiplying:false,
      isPercenting:false,
      actual_value:'0',
  }

ac = () => {
    this.setState({input_value:'0', isOperating:false, input_value_2:null, actual_value:'0'});
}

percent = () => {
    this.setState({
      isOperating:true,
      isPercenting:true,
      actual_value:'',
    });  
    if(this.state.input_value_2 && this.state.input_value){
      let res = Number(this.state.input_value_2) / 100 * Number(this.state.input_value);
      this.setState({
        input_value:res,
        input_value_2:null,
        isOperating:false,
        isPercenting:false,
        actual_value:res,
      });
    }
}

plusAndMinus = () => {
  if(this.state.input_value[0] != '-'){
    this.setState(previousState => {
      this.setState({
          input_value:'-'+previousState.input_value,
          actual_value:'-'+previousState.input_value,
          
        });
    })
  }else{
    this.setState(previousState => {
      this.setState({
        input_value:previousState.input_value.slice(1),
        actual_value:'-'+previousState.input_value,
      });
    })
  }
}

add  = () => {
  this.setState({
      isOperating:true,
      isAdding:true,
      actual_value:'',
  });
  if(this.state.input_value_2){
    console.log(Number(this.state.input_value_2));
    let sum  = Number(this.state.input_value) + Number(this.state.input_value_2);
    this.setState({
      input_value: sum,
      actual_value:sum,
      input_value_2:null,
      isOperating:false,
      isAdding:false,
    });
  }else{
    return;
  }
}

divide  = () => {
  this.setState({
    isOperating:true,
    isDividing:true,
    actual_value:'',
  });
  if(this.state.input_value_2){
    console.log(Number(this.state.input_value_2));
    let sum  = Number(this.state.input_value) / Number(this.state.input_value_2);
    this.setState({
      input_value: sum,
      actual_value:sum,
      input_value_2:null,
      isOperating:false,
      isDividing:false,
    });
  }else{
    return;
  }
}
multiply  = () => {
  this.setState({
    isOperating:true,
    isMultiplying:true,
    actual_value:'',
  });
  if(this.state.input_value_2){
    console.log(Number(this.state.input_value_2));
    let sum  = Number(this.state.input_value) * Number(this.state.input_value_2);
    this.setState({
      input_value: sum,
      input_value_2:null,
      isOperating:false,
      actual_value:sum,
      isMultiplying:false,
    });
  }else{
    return;
  }
}

subtract  = () => {
  this.setState({
    isOperating:true,
    isSubtracting:true,
    actual_value:'',
  });
  if(this.state.input_value_2){
    console.log(Number(this.state.input_value_2));
    let sum  = Number(this.state.input_value) - Number(this.state.input_value_2);
    this.setState({
      input_value: sum,
      input_value_2:null,
      isOperating:false,
      isSubtracting:true,
      actual_value:sum,
    });
  }else{
    return;
  }
}

equals = () => {
  if(this.state.isAdding){
    this.add();
    return;
  }else if(this.state.isDividing){
    this.divide();
    return;
  }else if (this.state.isMultiplying){
    this.multiply();
    return;
  }else if (this.state.isPercenting){
    this.percent();
    return;
  }else if(this.state.isSubtracting){
    this.subtract();
    return;
  }
}

setValue = (value) => {

      this.setState((previousState) => { 
                let previous_value = previousState.input_value;
                previous_value = new String(previous_value);
                if(previousState.input_value == '0'){
                    previous_value = '';
                }
                if(!this.state.isOperating){
                  let new_value = previous_value.concat(value);
                  this.setState({
                    input_value:new_value,
                    actual_value:new_value,
                  });
                }else{
                  
                  let new_value;
                  if(this.state.input_value_2){
                    let previous_value_2 = previousState.input_value_2;
                    new_value =   previous_value_2.concat(value);
                  }else{
                    new_value = value;
                  }
                  this.setState({
                    actual_value:new_value,
                    input_value_2:new_value,
                  });
                }

        } );
}


render = () => {
    return (
      <div className='main'>
        <Row>
          <Input label={this.state.actual_value}></Input>
        </Row>
        <Row>
          <Button1 onClick={this.ac} appRef = {this} label='AC'></Button1>
          <Button1 onClick={this.plusAndMinus} appRef = {this} label='+/-'></Button1>
          <Button1 onClick={this.percent} appRef = {this} label='%'></Button1>
          <Button1 onClick={this.divide} operation label='/'></Button1>
        </Row>
        <Row>
          <Button1 onClick={() => {this.setValue('7')}} appRef = {this} label='7'></Button1>
          <Button1 onClick={() => {this.setValue('8')}} appRef = {this} label='8'></Button1>
          <Button1 onClick={() => {this.setValue('9')}} appRef = {this} label='9'></Button1>
          <Button1 onClick={this.multiply} operation label='x'></Button1>
        </Row>
          <Row>
          <Button1 onClick={() => {this.setValue('4')}} appRef = {this} label='4'></Button1>
          <Button1 onClick={() => {this.setValue('5')}} appRef = {this} label='5'></Button1>
          <Button1 onClick={() => {this.setValue('6')}} appRef = {this} label='6'></Button1>
          <Button1 onClick={this.subtract} operation label='-'></Button1>
        </Row>
        <Row>
          <Button1 onClick={() => {this.setValue('1')}} appRef = {this} label='1'></Button1>
          <Button1 onClick={() => {this.setValue('2')}} appRef = {this} label='2'></Button1>
          <Button1 onClick={() => {this.setValue('3')}} appRef = {this} label='3'></Button1>
          <Button1 onClick={this.add} operation label='+'></Button1>
        </Row>
        <Row>
            <Button2 onClick={() => {this.setValue('0')}} appRef = {this} label="0"></Button2>
            <Button1 onClick={() => {this.setValue('.')}} appRef = {this} label="."></Button1>
            <Button1 onClick={this.equals} operation label="="></Button1>
        </Row>
      </div>
    );
  }
}

export default App;
