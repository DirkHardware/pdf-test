import React, {Component} from 'react'
import ImageCard from './ImageCard'


function ImageContainer(props) {

    return(
        <div>
            <div className="image-container" id='image-container1'>
                <ImageCard 
                print = {props.print}
                />
                <ImageCard 
                print = {props.print}
                />
                <ImageCard 
                print = {props.print}
                />
            </div>
            <div className="image-container" id='image-container2'>
                <ImageCard 
                print = {props.print}
                />
                <ImageCard 
                print = {props.print}
                />
                <ImageCard 
                print = {props.print}
            />
            </div>
        </div>
    )
}

export default ImageContainer