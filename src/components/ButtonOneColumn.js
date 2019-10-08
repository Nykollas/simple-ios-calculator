import React, {Component} from 'react';



class ButtonOneColumn extends Component{

    constructor(props){
        super(props);
    }


    render = () => {
        return(
            <div onClick={this.props.onClick} className={this.props.operation ? 'button-one-active' : 'button-one'}>
                <p className={this.props.operation ? 'label-operation' : 'label'}>{this.props.label}</p>
            </div>
        )
    }
}

export default ButtonOneColumn;