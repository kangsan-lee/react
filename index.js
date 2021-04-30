const express = require('express')
const app = express()
const port = 3000
const {User} = require("./models/User")
const bodyParser= require('body-parser');
const { urlencoded } = require('body-parser');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json 을 분석해서 가져옴
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kangsan:1q2w3e4r@boilerplate.zhyvn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('MongoDb Connected...')).catch(err=>console.log(err))




app.get('/',(req,res)=>res.send('Hello World! 123123'))

app.post('/register',(req,res)=>{

    //회원가입할때 필요할때의 정보를 클라이언트에서 받아오면 그것들을 데이터베이스에 넣어준다



    const user= new User(req.body)//고객 정보를 가져온다 고객정보가 담겨있따 
    user.save((err,userInfo)=>{
        if (err) return res.json({success:false,err})
        return res.status(200).json({
            success:true //성공
        })
    })
     //몽고디비로 부터오는 메세지를 세이브한다

})

app.listen(port,()=>console.log(`Example app listening on port ${port}`))