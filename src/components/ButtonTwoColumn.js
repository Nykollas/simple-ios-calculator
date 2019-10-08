import React, {Component} from 'react';



class ButtonTwoColumn extends Component{

    constructor(props){
        super(props);
    }
    render = () => {
        return(
            <div onClick ={this.props.onClick} className={"button-two"}>
                <p className={'label'}>{this.props.label}</p>
            </div>
        )
    }
}

export default ButtonTwoColumn;