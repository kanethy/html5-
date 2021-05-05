//获取视频元素
let videoEle=document.getElementById('video');

//播放和暂停
//获取控制播放暂停的按钮元素
let ctrlBtn=document.getElementById('control-button');
//获取播放暂停图标元素
let ctrlImg=document.getElementById('control-icon');
//添加点击事件
ctrlBtn.addEventListener('click',()=>{
    
    if(videoEle.paused || videoEle.ended){
        videoEle.play();
        ctrlImg.src='icons/pause.png'
    }else{
        videoEle.pause();
        ctrlImg.src='icons/play.png'
        }
    })


//是否静音
//获取控制音量的按钮元素
let volBtn=document.
getElementById('volume-button');
//获取音量图标元素
let volImg=document.
getElementById('volume-icon');
//添加点击事件
volBtn.addEventListener('click',()=>{
    videoEle.muted =! videoEle.muted;
    //如果当前的视频音量是静音 或者当前滑块的值为0 
    if(videoEle.muted || volumeEle.dataVolume==0){
        //设置静音之前，把当前的滑块的值保存下来
        //保存在自定义属性data-volume中
        volumeEle.dataVolume=volumeEle.value;
        //设置静音时，滑块到最左侧
        volumeEle.value=0;
        //设置音量图标是非静音
        volImg.src='icons/volume-off.png';
    }else{
        //设置音量图标是静音
        volImg.src='icons/volume-on.png';
        //调整音量滑块的值为之前保存的自定义属性值
        volumeEle.value=volumeEle.dataVolume;
  

    }
})

//音量滑块对象
let volumeEle=document.
getElementById('volume');
//添加滑块滑动事件
volumeEle.addEventListener('input',()=>{
    //然后视频静音，拖动滑块，视频不静音，图标变成非静音图标
    if(videoEle.muted){
        videoEle.muted=false;
        volImg.src='icons/volume-on.png';
    }
    //滑动滑块到最左端
    if(volumeEle.value == 0){
        volImg.src='icons/volume-off.png';
    }else{
        volImg.src='icons/volume-on.png';
    }

    //设置video的音量与滑块的值对应
    videoEle.volume=volumeEle.value;
    //将滑块音量存储到自定义属性data-volume中，
    //为防止用户两次拖动滑块直接单击静音键
    volumeEle.dataVolume=volumeEle.value;
})


//时间
let telapsed=document.getElementById('time-elapsed');
let duration=document.getElementById('duration');


videoEle.onloadeddata = ()=>{
    //获取当前时间
    telapsed.innerText = formatTime(videoEle.currentTime);
    //获取总时长
    duration.innerText = formatTime(videoEle.duration);
}
//获取当前时间
videoEle.ontimeupdate = ()=>{
    telapsed.innerText = formatTime(videoEle.currentTime);
}

//格式化时间的自定义函数  00:00
function formatTime(time){
    time=parseInt(time);
    let minutes=parseInt(time/60);
    let seconds=parseInt(time%60);
    minutes=minutes<10?'0'+minutes:minutes;
    seconds=seconds<10?'0'+seconds:seconds;
    return minutes +":"+seconds;
}


//全屏
//获取播放器对象
let videoContainerEle=document.getElementById('video-container');
//获取当前要点击的全屏按钮
let fullscreenButtonEle=document.getElementById('fullscreen-button');
//获取全屏图标
let fullscreenImg=document.getElementById('fullsceen-icon');
//全屏按钮事件
fullscreenButtonEle.addEventListener('click',()=>{
    //获取全屏元素，如果有值
    if(document.fullscreenElement){
        //退出全屏
        document.exitFullscreen();
        fullscreenImg.src='icons/fullscreen.png';
    }else{
        //否则进入全屏
        //播放器对象进入全屏，不能用video对象进入全屏，因为video进去后就出不来了
        videoContainerEle.requestFullscreen();
        fullscreenImg.src='icons/fullscreen-exit.png';
    }
})