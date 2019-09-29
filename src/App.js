import React from 'react';
// import ReactDOM from 'react-dom';
import ImageCard from './ImageCard.js';
import ImageContainer from './ImageContainer.js';
import './index.css';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import "./App.css";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

var fonts = {
	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Medium.ttf',
		italics: 'fonts/Roboto-Italic.ttf',
		bolditalics: 'fonts/Roboto-MediumItalic.ttf'
	}
};

var docDefinition = {
	content: [
		'First paragraph',
		'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
	]
};

pdfMake.createPdf(docDefinition).download();


function App() {
    console.log("app online")
    return(<ImageContainer
      print = {() => newTest(fullLorem)}
    />)
  }

let contentArray = [{title: 'Thing 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nascetur ridiculus mus mauris vitae ultricies. Donec pretium vulputate sapien nec sagittis. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim tortor at auctor urna nunc id cursus. Sit amet mauris commodo quis. Egestas fringilla phasellus faucibus scelerisque. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Senectus et netus et malesuada fames ac turpis. Habitant morbi tristique senectus et. Mollis aliquam ut porttitor leo a. Nunc id cursus metus aliquam eleifend. Bibendum arcu vitae elementum curabitur. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. In iaculis nunc sed augue lacus. Lectus proin nibh nisl condimentum id venenatis a. Vel turpis nunc eget lorem. Auctor augue mauris augue neque gravida in fermentum et. Purus viverra accumsan in nisl nisi scelerisque. Odio pellentesque diam volutpat commodo. Viverra nam libero justo laoreet sit. Proin nibh nisl condimentum id venenatis a. Aliquet risus feugiat in ante metus dictum at. Blandit libero volutpat sed cras ornare arcu dui vivamus. In aliquam sem fringilla ut morbi tincidunt augue interdum. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Sed tempus urna et pharetra pharetra massa. Pretium nibh ipsum consequat nisl. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Diam volutpat commodo sed egestas egestas. Mauris pharetra et ultrices neque. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Id aliquet risus feugiat in ante metus dictum at tempor. Dignissim suspendisse in est ante. A erat nam at lectus urna duis convallis convallis. Ultrices sagittis orci a scelerisque purus semper eget. Interdum consectetur libero id faucibus nisl tincidunt. Massa vitae tortor condimentum lacinia quis vel eros. Semper risus in hendrerit gravida rutrum quisque non tellus. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Etiam dignissim diam quis enim lobortis scelerisque. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna porttitor. Diam in arcu cursus euismod quis viverra nibh. Curabitur vitae nunc sed velit. In fermentum et sollicitudin ac orci phasellus. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Lectus urna duis convallis convallis tellus. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ultrices mi tempus imperdiet nulla malesuada. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Enim ut tellus elementum sagittis vitae et leo duis ut. Ac turpis egestas integer eget aliquet nibh praesent tristique. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Neque sodales ut etiam sit amet nisl purus in mollis. Tincidunt praesent semper feugiat nibh. Aliquet lectus proin nibh nisl. Dolor morbi non arcu risus quis varius. Urna molestie at elementum eu facilisis sed odio morbi. Arcu cursus vitae congue mauris rhoncus. Volutpat odio facilisis mauris sit amet massa vitae tortor. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Arcu non odio euismod lacinia at quis risus. In fermentum et sollicitudin ac orci phasellus. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Urna molestie at elementum eu facilisis sed. Augue eget arcu dictum varius duis at consectetur lorem. Feugiat vivamus at augue eget arcu dictum varius. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Turpis egestas sed tempus urna et pharetra pharetra. Tinc'}, {title: 'Thing 2', content: 'Ive seen things you people wouldnt believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die.'}]

function print(contentArray) {
  console.log('split =', contentArray[0].content.match(/.{1,500}/g))
  // let text1 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
  // let text2 = 'Goodspeed You! Black Emperor'
  const filename  = 'ThisIsYourPDFFilename.pdf';
  console.log('this is firing')
  let pdf = new jsPDF('p', 'mm', 'a4', {orientation: 'landscape'});
  pdf.setLineWidth(1)
  let i;
  for (i = 0; i < contentArray.length; i++) {
    let splitTitle = pdf.splitTextToSize(contentArray[i].content, 180);
    //you need to add conditional hypons every 71 characters
    pdf.text(15, 20, splitTitle);
    // pdf.addPage();
    // pdf.text(20, 20, text2);
    if(i != contentArray.length -1){
      pdf.addPage()
    }
  }
  pdf.save(filename);
}

function newTest(text) {
  let splitPages = text.match(/.{71}/g)
  const filename  = 'ThisIsYourPDFFilename.pdf';
  let pdf = new jsPDF('p', 'mm', 'a4', {orientation: 'landscape'});
  pdf.text(splitPages, 15, 20)
  pdf.save(filename)
}

//maybe break them up every 41 lines?
function pageSplit(text) {
  const filename  = 'ThisIsYourPDFFilename.pdf';
  let pdf = new jsPDF('p', 'mm', 'a4', {orientation: 'landscape'});
  let splitPages = text.match(/.{71}/g)
  console.log(splitPages.length)
  let i
  for (i = 0; i < splitPages.length; i++) {
    let splitText = pdf.splitTextToSize(splitPages[i], 180);
    //you need to add conditional hypons every 71 characters
    pdf.text(15, 20, splitText);
    // pdf.addPage()
    // pdf.addPage();
    // pdf.text(20, 20, text2);
    if(i != splitPages.length -1){
      pdf.addPage()
    }
    // if(i != splitPages.length -1 && i % 41 === 0){
    //   pdf.addPage()
    // }
  }
  pdf.save(filename);
}
function sentenceSplit() {

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

let fullLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna porttitor. Diam in arcu cursus euismod quis viverra nibh. Curabitur vitae nunc sed velit. In fermentum et sollicitudin ac orci phasellus. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Lectus urna duis convallis convallis tellus. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ultrices mi tempus imperdiet nulla malesuada. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Enim ut tellus elementum sagittis vitae et leo duis ut. Ac turpis egestas integer eget aliquet nibh praesent tristique. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Neque sodales ut etiam sit amet nisl purus in mollis. Tincidunt praesent semper feugiat nibh. Aliquet lectus proin nibh nisl. Dolor morbi non arcu risus quis varius. Urna molestie at elementum eu facilisis sed odio morbi. Arcu cursus vitae congue mauris rhoncus. Volutpat odio facilisis mauris sit amet massa vitae tortor. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Arcu non odio euismod lacinia at quis risus. In fermentum et sollicitudin ac orci phasellus. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Urna molestie at elementum eu facilisis sed. Augue eget arcu dictum varius duis at consectetur lorem. Feugiat vivamus at augue eget arcu dictum varius. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Turpis egestas sed tempus urna et pharetra pharetra. Tincidunt arcu non sodales neque sodales. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Vulputate mi sit amet mauris commodo quis imperdiet massa. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Pharetra pharetra massa massa ultricies mi quis hendrerit. Tristique senectus et netus et malesuada. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Pulvinar sapien et ligula ullamcorper. At auctor urna nunc id cursus metus aliquam eleifend. Consequat mauris nunc congue nisi vitae suscipit. Lectus quam id leo in vitae turpis massa sed. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Nibh venenatis cras sed felis eget velit aliquet sagittis. Sem viverra aliquet eget sit amet tellus. Est sit amet facilisis magna etiam. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Quis risus sed vulputate odio ut enim. At augue eget arcu dictum varius. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Amet justo donec enim diam vulputate ut pharetra sit. Metus dictum at tempor commodo. Mattis pellentesque id nibh tortor id aliquet lectus. Facilisis volutpat est velit egestas dui id ornare arcu. Pharetra vel turpis nunc eget. Nibh tortor id aliquet lectus. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Varius morbi enim nunc faucibus a. Risus ultricies tristique nulla aliquet enim tortor at auctor. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Mattis enim ut tellus elementum sagittis vitae et leo duis. Nunc consequat interdum varius sit amet. Lorem donec massa sapien faucibus et molestie ac. Lorem ipsum dolor sit amet consectetur adipiscing elit. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Interdum posuere lorem ipsum dolor sit amet. Tristique senectus et netus et malesuada fames. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Donec ultrices tincidunt arcu non sodales neque sodales. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Aliquet sagittis id consectetur purus ut faucibus. Volutpat consequat mauris nunc congue nisi vitae suscipit. Pellentesque id nibh tortor id aliquet lectus proin nibh. Vestibulum lectus mauris ultrices eros in cursus turpis. Porttitor eget dolor morbi non arcu risus quis. Ac orci phasellus egestas tellus. Eros in cursus turpis massa tincidunt dui ut ornare. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Sit amet tellus cras adipiscing enim eu turpis. Est sit amet facilisis magna etiam tempor orci. Porttitor rhoncus dolor purus non enim praesent elementum. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Volutpat ac tincidunt vitae semper quis lectus nulla. Eget nunc lobortis mattis aliquam faucibus purus in massa. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Non blandit massa enim nec dui. Turpis egestas sed tempus urna. Volutpat maecenas volutpat blandit aliquam etiam. Placerat vestibulum lectus mauris ultrices. In massa tempor nec feugiat nisl pretium fusce. Ante in nibh mauris cursus mattis molestie a. Nec feugiat nisl pretium fusce id. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Felis bibendum ut tristique et egestas quis. Congue quisque egestas diam in. Pellentesque habitant morbi tristique senectus et netus et malesuada. Facilisis mauris sit amet massa vitae tortor condimentum. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Massa tempor nec feugiat nisl pretium. Ipsum consequat nisl vel pretium lectus. In metus vulputate eu scelerisque felis imperdiet. Volutpat est velit egestas dui id ornare arcu. Ac tortor vitae purus faucibus ornare suspendisse sed. Arcu odio ut sem nulla pharetra diam sit amet. Commodo ullamcorper a lacus vestibulum. Libero id faucibus nisl tincidunt eget nullam. Enim nulla aliquet porttitor lacus luctus accumsan. Neque convallis a cras semper auctor. Quam id leo in vitae turpis massa. Imperdiet sed euismod nisi porta. Ac feugiat sed lectus vestibulum mattis. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Egestas fringilla phasellus faucibus scelerisque. Massa massa ultricies mi quis hendrerit dolor. In nibh mauris cursus mattis molestie a iaculis at. Massa ultricies mi quis hendrerit dolor magna. Consectetur adipiscing elit duis tristique. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Leo vel orci porta non pulvinar neque. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Felis eget velit aliquet sagittis id. Turpis tincidunt id aliquet risus feugiat. Nunc eget lorem dolor sed viverra ipsum. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Aliquam malesuada bibendum arcu vitae elementum curabitur. Nisl pretium fusce id velit ut tortor pretium. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Tellus id interdum velit laoreet id donec ultrices. Lacus luctus accumsan tortor posuere ac ut consequat. Morbi tristique senectus et netus et malesuada fames. Sed velit dignissim sodales ut eu sem integer vitae. Vel risus commodo viverra maecenas. Risus viverra adipiscing at in tellus integer. Dolor magna eget est lorem ipsum dolor. Mi ipsum faucibus vitae aliquet nec. In pellentesque massa placerat duis ultricies lacus sed turpis. Phasellus egestas tellus rutrum tellus pellentesque. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Habitant morbi tristique senectus et. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Ut pharetra sit amet aliquam id diam. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Aliquet porttitor lacus luctus accumsan tortor posuere. Ullamcorper a lacus vestibulum sed arcu non odio. Dictumst quisque sagittis purus sit amet volutpat consequat. Ac felis donec et odio pellentesque diam volutpat. Ipsum faucibus vitae aliquet nec ullamcorper. Cursus eget nunc scelerisque viverra. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sed vulputate odio ut enim blandit volutpat. Consequat ac felis donec et odio pellentesque diam. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Feugiat in fermentum posuere urna nec. Eu consequat ac felis donec et odio pellentesque diam. Rhoncus urna neque viverra justo nec ultrices. Vitae tempus quam pellentesque nec nam.'