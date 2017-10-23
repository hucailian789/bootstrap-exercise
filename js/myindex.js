 /**
         *  1. 需求： 当屏幕宽度变化的时候 获取屏幕宽度进行判断 如果是大屏幕加载pcImg整个标签 如果是小屏就加载mobileImg
         *  2. 实现思路
         *         1. 监听屏幕变化事件onresize
         *         2. 在屏幕变化事件里面获取当前屏幕的宽度
         *         3. 判断屏幕的宽度是否大于640 认为是大屏幕 小于640就是小屏幕
         *         4. 大图获取所有轮播图的item项 分别插入对应的pcImg
         *         5. 小图获取所有轮播图的item项 分别插入对应的mobileImg
         *         6. 在插入pcImg的时候 路径提前存储到item身上
         *         7. 循环遍历所有item项 获取当前item项存储的大图路径 拼接到大图a标签的背景图里面
         *         8. 循环遍历所有item项 获取当前item项存储的小图路径 拼接到小图a标签里面的img的src里面
         *         9. onresie事件默认不会触发需要改变屏幕宽度 jquery手动触发事件 trigger('事件名')
         */

$(function(){

    $('[data-toggle="tooltip"]').tooltip(); /*工具提示插件默认是没有效果的 需要手动加一句JS代码初始化一下工具提示插件*/
    
    $(window).on('resize',function(){
        var windowWidth = $(window).width();
        if (windowWidth > 640){
            var items = $(".carousel-inner .item");
            items.each(function(index,value){
                var pcImaSrc = $(value).data('large-image');
                $(value).html ('<a href = "#" class = "pcImg" style="background-image:url('+pcImaSrc+')"> </a>');
            })                            
        }else {
             var items = $(".carousel-inner .item");
            items.each(function(index,value){
                var mobileImaSrc = $(value).data('small-image');
                $(value).html ('<a href = "#" class = "mobileImg"><img src=" '+mobileImaSrc+' " alt=""> </a>');
            })              
        }

    }).trigger('resize');
})