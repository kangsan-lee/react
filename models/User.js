const mongoose = require('mongoose')

const userSchema= mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true, //이메일내에 빈곤간(스페이스)을 매꿔준다
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        //관리자 or 일반유저를 주기위해
        type:Number, //0이면 관리자 1이면 일반유저
        default:0 //값을 지정하지않으면  0 으로 할당
    },
    image:{
        String
    },
    token:{
        type:String //유효성 관리
    },
    tokenExp:{
        //토큰 사용기간
        type:Number
    }
})

//모델로 감싸준다
const User=mongoose.model('User',userSchema)

module.exports={User}