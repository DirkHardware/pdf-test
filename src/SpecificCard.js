import React, { Component } from "react";

class SpecificCard extends Component {

    render() {
        // console.log('tank card render firing')
        // this.props.print()
        return (
            <div id='image-card-id' style={{alignContent:'center'}} className="image-card">
                <img src={this.props.img} alt=''/>
                <button onClick={() => this.props.print()}>Print!</button>
            </div>
        )
        
    }

}

export default SpecificCard; 