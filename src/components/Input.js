import React, {Component} from 'react';



class Input extends Component{

    constructor(props){
        super(props);
    }
    render = () => {
        return(
            <div className={"input"}>
                <p className={'label-input'}>{this.props.label}</p>
            </div>
        )
    }
}

export default Input;