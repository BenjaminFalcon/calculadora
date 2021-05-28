const express = require ('express')
const path = require ('path')

const app = express()

const publicPath = path.resolve (__dirname, './Proyecto html') ;

app.listen(3030, () => { 
    console.log ("servidor corriendo en el purto 3000")
})

app.use (express.static(path.resolve(__dirname, './Proyecto html')))



app.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, './html/ejemplo.html'));
  });
  