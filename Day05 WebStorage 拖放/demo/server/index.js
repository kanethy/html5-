const express = require('express');
const server = express();
const fs = require('fs');
// 加载MySQL模块
const mysql = require('mysql');
// 创建连接池
const pool = mysql.createPool({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:'',
  database:'multer',
  connectionLimit:20
});
// 加载UUID模块
const uuid = require('uuid');
// 加载Multer模块
const multer = require('multer');
/*
// 创建Multer对象(简化版) -- 指定上传的位置
const upload = multer({
  // 指定上传文件的存储的位置,destination(目标)
  dest: 'upload'
});
*/
// 定义存储规则
let storage = multer.diskStorage({
  //上传时目录的规则
  //req,代表的是当前的HTTP请求对象
  //file,代表是当前上传的文件对象
  //cb(callback),回调函数,让Multer按照指定的规则进行相关的操作
  destination:function(req,file,cb){
    //cb(null,destination)
    //null代表错误对象
    //destination代表文件上传的目录
    cb(null,'upload');
  },
  //上传时文件名称的规则
  filename:function(req,file,cb){
    // 为上传的文件重新生成一个带有扩展名的文件名称
    //1. 生成主文件名称(按时间戳+随机数来生成主文件名)                   
    //let mainname = '' + Date.now() + Math.ceil(Math.random() * 99999);
    //产生基于时间戳的UUID
    let mainname = uuid.v1();
    // file代表的当前上传的文件对象,它包含有以下属性
    // originalname,文件对象的原始名称,如23456435745.jpg
    //2. 获取文件原来的扩展名 
    let extension = file.originalname.substr(file.originalname.lastIndexOf('.') + 1).toLowerCase();
    //3. 将1和2拼接在一起形成新的文件名称 
    let filename = mainname + '.' + extension;
    // 4.通过回调函数告诉Multer,让其按指定的规则进行命名
    cb(null,filename);
  }
});
// 使用存储规则创建Multer对象
const upload = multer({
  storage:storage
})

// 静态资源托管
server.use(express.static('public'));

server.get('/', (req, res) => {
  let data = fs.readFileSync('./default.html', { encoding: 'utf8' });
  res.send(data);
});

server.post('/',upload.array('avatar'),(req, res) => {
  //获取到上传文件形成的对象数组
  let files = req.files;
  //遍历操作,将上传的文件信息依次写入到数据库
  let sql = 'INSERT upload(path) VALUES(?)';
  files.forEach(file=>{
      pool.query(sql,[file.filename],(error,results)=>{
        if(error) throw error;
      })
  });
  res.send('文件上传成功');
});

server.listen(3000, () => {
  console.log('server is running...');
});