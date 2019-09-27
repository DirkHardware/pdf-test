import React, {Component} from 'react'
import ImageCard from './ImageCard'


function ImageContainer(props) {

    return(
        <div id='image-container-container'>
            <div className="image-container" id='image-container1'>
                <bookmark title="Chapter 1" level="0" ></bookmark>
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
                <bookmark title="Chapter 2" level="0" ></bookmark>
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