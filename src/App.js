import React from 'react';
// import ReactDOM from 'react-dom';
import ImageCard from './ImageCard.js';
import ImageContainer from './ImageContainer.js';
import './index.css';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import "./App.css";

// import App from './App.css'
// import App from './App';

function App() {
    console.log("app online")
    return(<ImageContainer
      print = {print}
    />)


function print() {
  const filename  = 'ThisIsYourPDFFilename.pdf';

  html2canvas(document.getElementById('image-container1')).then(canvas => {
    let pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
    pdf.save(filename);
  });
}
}

// function print() {
//     let text1 = 'Sed ut perspiciatis, \n unde omnis iste natus error sit voluptatem \n accusantium doloremque laudantium, \ ntotam rem aperiam eaque ipsa, quae ab illo inventore veritatis \n et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?'

//     let text2 = 'Goodspeed You! Black Emperor'
//     const filename  = 'ThisIsYourPDFFilename.pdf';
//     console.log('this is firing')
//     html2canvas(document.getElementById("image-card-id")).then(canvas => {
//         let pdf = new jsPDF('p', 'mm', 'a4', {orientation: 'landscape'});
//         // pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
//         pdf.setLineWidth(1)
//         pdf.text(20, 20, text1);
//         pdf.addPage();
//         pdf.text(20, 20, text2);
//         pdf.save(filename);
//     });




export default App;