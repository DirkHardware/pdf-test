import React from 'react';
// import ReactDOM from 'react-dom';
import ImageCard from './ImageCard.js';
import ImageContainer from './ImageContainer.js';
import './index.css';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import "./App.css";

// let pdf = new jsPDF('p', 'mm', 'a4')

// componentDidMount(){
//   // console.log('TankContainer mounted')
//   fetch('http://localhost:3000/tanks')
//   .then(resp => resp.json())
//   .then(data => this.setState({
//       allTanksArray: data,
//       ww2Array: data.filter(tank => tank.era === 'World War II'),
//       coldWarArray: data.filter(tank => tank.era === 'Cold War'),
//       selectedArray: data
//   }))
// }

// const

// function printTest() {
//   const filename  = 'ThisIsYourPDFFilename.pdf';
//   let pdf = new jsPDF('p', 'mm', 'a4')
//   html2canvas(document.getElementById('image-container1')).then(canvas => {
//     pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
//     pdf.addPage()
//     // pdf.save(filename);
//   });
//   html2canvas(document.getElementById('image-container2')).then(canvas => {
//     pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
//     // pdf.addPage()
//     pdf.save(filename);
//   });
// }

function App() {
    console.log("app online")
    return(<ImageContainer
      print = {print}
    />)
  }


// function print() {
//   const filename  = 'ThisIsYourPDFFilename.pdf';

//   html2canvas(document.getElementById('image-container1')).then(canvas => {
//     let pdf = new jsPDF('p', 'mm', 'a4');
//     pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
//     pdf.save(filename);
//   });
// }
// }

// let contentArray = [{title: 'Thing 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nascetur ridiculus mus mauris vitae ultricies. Donec pretium vulputate sapien nec sagittis. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim tortor at auctor urna nunc id cursus. Sit amet mauris commodo quis. Egestas fringilla phasellus faucibus scelerisque. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Senectus et netus et malesuada fames ac turpis. Habitant morbi tristique senectus et. Mollis aliquam ut porttitor leo a. Nunc id cursus metus aliquam eleifend. Bibendum arcu vitae elementum curabitur. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. In iaculis nunc sed augue lacus. Lectus proin nibh nisl condimentum id venenatis a. Vel turpis nunc eget lorem. Auctor augue mauris augue neque gravida in fermentum et. Purus viverra accumsan in nisl nisi scelerisque. Odio pellentesque diam volutpat commodo. Viverra nam libero justo laoreet sit. Proin nibh nisl condimentum id venenatis a. Aliquet risus feugiat in ante metus dictum at. Blandit libero volutpat sed cras ornare arcu dui vivamus. In aliquam sem fringilla ut morbi tincidunt augue interdum. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Sed tempus urna et pharetra pharetra massa. Pretium nibh ipsum consequat nisl. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Diam volutpat commodo sed egestas egestas. Mauris pharetra et ultrices neque. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Id aliquet risus feugiat in ante metus dictum at tempor. Dignissim suspendisse in est ante. A erat nam at lectus urna duis convallis convallis. Ultrices sagittis orci a scelerisque purus semper eget. Interdum consectetur libero id faucibus nisl tincidunt. Massa vitae tortor condimentum lacinia quis vel eros. Semper risus in hendrerit gravida rutrum quisque non tellus. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Etiam dignissim diam quis enim lobortis scelerisque. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero.'}, {title: 'Thing 2', content: 'Ive seen things you people wouldnt believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die.'}]

function print() {
  let contentArray = [{title: 'Thing 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nascetur ridiculus mus mauris vitae ultricies. Donec pretium vulputate sapien nec sagittis. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim tortor at auctor urna nunc id cursus. Sit amet mauris commodo quis. Egestas fringilla phasellus faucibus scelerisque. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Senectus et netus et malesuada fames ac turpis. Habitant morbi tristique senectus et. Mollis aliquam ut porttitor leo a. Nunc id cursus metus aliquam eleifend. Bibendum arcu vitae elementum curabitur. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. In iaculis nunc sed augue lacus. Lectus proin nibh nisl condimentum id venenatis a. Vel turpis nunc eget lorem. Auctor augue mauris augue neque gravida in fermentum et. Purus viverra accumsan in nisl nisi scelerisque. Odio pellentesque diam volutpat commodo. Viverra nam libero justo laoreet sit. Proin nibh nisl condimentum id venenatis a. Aliquet risus feugiat in ante metus dictum at. Blandit libero volutpat sed cras ornare arcu dui vivamus. In aliquam sem fringilla ut morbi tincidunt augue interdum. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Sed tempus urna et pharetra pharetra massa. Pretium nibh ipsum consequat nisl. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Diam volutpat commodo sed egestas egestas. Mauris pharetra et ultrices neque. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Id aliquet risus feugiat in ante metus dictum at tempor. Dignissim suspendisse in est ante. A erat nam at lectus urna duis convallis convallis. Ultrices sagittis orci a scelerisque purus semper eget. Interdum consectetur libero id faucibus nisl tincidunt. Massa vitae tortor condimentum lacinia quis vel eros. Semper risus in hendrerit gravida rutrum quisque non tellus. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Etiam dignissim diam quis enim lobortis scelerisque. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero.'}, {title: 'Thing 2', content: 'Ive seen things you people wouldnt believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die.'}]
  console.log(contentArray)
  // let text1 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
  // let text2 = 'Goodspeed You! Black Emperor'
  const filename  = 'ThisIsYourPDFFilename.pdf';
  console.log('this is firing')
  let pdf = new jsPDF('p', 'mm', 'a4', {orientation: 'landscape'});
  pdf.setLineWidth(1)
  let i;
  for (i = 0; i < contentArray.length; i++) {
    let splitTitle = pdf.splitTextToSize(contentArray[i].content, 180);
    pdf.text(15, 20, splitTitle);
    pdf.addPage();
    // pdf.text(20, 20, text2);
  }
  pdf.save(filename);

}

// function print() {
//     let text1 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
//     let text2 = 'Goodspeed You! Black Emperor'
//     const filename  = 'ThisIsYourPDFFilename.pdf';
//     console.log('this is firing')
//     html2canvas(document.getElementById("image-card-id")).then(canvas => {
//         let pdf = new jsPDF('p', 'mm', 'a4', {orientation: 'landscape'});
//         // pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
//         pdf.setLineWidth(1)
//         var splitTitle = pdf.splitTextToSize(text1, 180);
//         pdf.text(15, 20, splitTitle);
//         pdf.addPage();
//         pdf.text(20, 20, text2);
//         pdf.save(filename);
//     });
// }




export default App;