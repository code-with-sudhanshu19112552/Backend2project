const path=require('path')
const express=require('express');
const userRouters=require('./routes/userRouters');
const {hostRouters}=require('./routes/hostRouters');
const rootDir=require('./utils/pathutils');
 const pagenotefound= require('./controllers/errors')



const app=express(pagenotefound);

app.set('view engine','ejs');
app.set('views','views');



app.use(express.urlencoded());
app.use(userRouters);
app.use("/host",hostRouters);
app.use(express.static(path.join(rootDir,'public')));

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'page not found'});

})
const port=3020;

app.listen(port,(req,res)=>{
    console.log(   `server is on the port http://localhost:${port}`);
})