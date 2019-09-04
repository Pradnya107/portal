const fs=require('fs');
const stream=fs.createReadStream('./test.txt');
stream.setEncoding('UTF8');        //main line for getting data n printing
stream.on('data',(chData)=>{      //got data
    console.log(chData);
});

//stream.on('end',()=>{
//  console.log('hi called');          //end of data
//});