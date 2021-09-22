const prompt = require('prompt-sync')();

const user = (prompt('Select 1 for deconstruct or 2 for construct'));




// color deconstruction
if (user==="1"){

const color=(prompt('select one color'));

if ( color=== "purple") {
    console.log('purple breaks down into red and blue' );
}

else if (color==="orange") {
    console.log('orange breaks down into red and yellow');
}

else if (color==='green') {
    console.log('greeen breaks down into blue and yellow');
}
else {
    console.log('Error');
}
}
// color construction
if (user==="2"){

    const color1=(prompt('select first color'));
    const color2=(prompt('select second color'));

if (color1==='red' && color2 ==='blue'||color1==='blue' && color2==='red'){
    console.log('purple');
}
if (color1==='red' && color2 ==='yellow'||color1==='yellow' && color2==='red') {
    console.log('orange');
}
if (color1==='blue'&& color2 === 'yellow'||color1==='yellow' && color2==='blue') {
    console.log('green');
}
else{
console.log('Error');
}
}