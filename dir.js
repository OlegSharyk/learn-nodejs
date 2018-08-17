var fs = require('fs');

// fs.unlink('file.txt', function(){
//     console.log('file.txt removed')
// })


// fs.mkdirSync('newDir');
// fs.rmdirSync('newDir');

// fs.mkdir('newDir', function(){
//     fs.writeFile('./newDir/some_new_txt.txt', 'new text for new file', function(){
//         console.log('done')
//     })
// });


fs.unlink('./newDir/some_new_txt.txt', function(){
    console.log('./newDir/some_new_txt.txt removed')
})
fs.rmdir('newDir', function(){
    console.log('removed')
});