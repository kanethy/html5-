    let canvasEle=document.getElementById("canvas");
    let ctx=canvasEle.getContext('2d');
    canvasEle.width=800;
    canvasEle.height=340;

    let texts=[
            // '这个什么烂演技',
            // '编剧有毒',
            // '要给编剧寄刀片了',
            // '那个时候有大哥大吗?瞎演'
    ]

        //创建Barrage类
    class Barrage{
            //创建构造函数
        constructor(text,size,color,speed){
            this.text=text;
            //弹幕开始的x轴的位置，从画布的左边框开始
            this.x=canvasEle.width;
            //弹幕的y轴的位置，上下边距20像素
            this.y=Math.ceil(Math.random() * (canvasEle.height-40))+20;
            this.color='#'+color;
            //字号后面要加空格
            this.font=size + ' Microsoft Yahei';
            this.speed=speed;
        }
    }

    //声明一个空数组barrages，用于存储每个barrage文本对象
    let barrages=[];

    function send(){
        //获取用户传递弹幕的数据
        let textEle=document.getElementById('text');
        let textval=textEle.value;

        let sizeEle=document.getElementById('size');
        let sizeval=sizeEle.value;

        let colorEle=document.getElementById('color');
        let colorval=colorEle.value;

        let speedEle=document.getElementById('speed');
        let speedval=speedEle.value;

        //将获取的弹幕数据填充到barrage对象中
        let barrage=new Barrage(textval,sizeval,colorval,speedval);

        //将填充后的barrage对象添加到barrages数组中
        barrages.push(barrage);
        //console.log(barrage);
    }

    //初始化
    function init(){
        for(let n=0;n<texts.length;n++){
            //生成每个barrage文本对象
             let barrage=new Barrage(texts[n],'24px','f00','4');
            //每个barrage文本对象添加到数组barrages
            barrages.push(barrage);

            //修改文本弹幕颜色
            ctx.fillStyle=barrage.color;
            //修改文本字体样式
            ctx.font=barrage.font;
            //绘制文本
            ctx.fillText(barrage.text,barrage.x,barrage.y);
        }
    }


    function animation(){
        //先清理画布
        ctx.clearRect(0,0,canvasEle.width,canvasEle.height);
            
        for(let n=0;n<barrages.length;n++){
            //每一个弹幕文本对象
            let barrage=barrages[n];

            //修改文本弹幕颜色
            ctx.fillStyle=barrage.color;
            //修改文本字体样式
            ctx.font=barrage.font;

            //弹幕文本的x轴在上一个x轴的位置上往左移动
            barrage.x -= barrage.speed;
            //绘制文本
            ctx.fillText(barrage.text,barrage.x,barrage.y);
        }
        //循环绘制动画帧
        window.requestAnimationFrame(animation);
    }



    init();
    animation();
