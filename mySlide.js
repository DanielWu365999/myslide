/*
*****MySilde  侧滑弹窗*****
* MySilde.open(Param)
*@Param
*   title 弹窗标题
*   content  用户自定义内容
*   btn      Array 是,否按钮名称
*   yes      是 回调函数
*   no       否 回调函数
*
*
* */
    function MySlide(){

    }
    var fn = MySlide.prototype;
    fn.Container = function(){
        return '<div class="myslide layui-form" style="right:-300px">\
                    <h4 class="tit">\
                        <span class="left"></span>\
                        <span class="title">'+this.title+'</span>\
                    </h4>\
                    <div style="height: 1px; background: #E5E5E5"></div>\
            </div>';
    }
    fn.open = function(param){
        this.title = param.title || ''; //弹窗标题
        this.content = param.content;   //自定义DOM
        this.btn = param.btn || new Array('确定','取消');  //底部操作按钮
        this.yes = param.yes;   //底部操作按钮 yes 回调
        this.no = param.no || function(){  //底部操作按钮 no 回调
            $('.myslide').css('right','-300px');
        };
        var tpl = this.Container(this.title);
        $('.myslide').css('right','-300px');

        $('.myslide').remove();
        $('body').append(tpl);
        this.content.removeClass('hidden');

        $('.myslide').append(this.content);
        $('.myslide').append(this.initBtn());
        setTimeout(function(){  //延时滑动
            $('.myslide').css('right','0');
        },1)
        this.initEvent();
        //点击其他收起
        var _thisContent = this.content;
        $('.layui-main').on('click',function(ev){
            ev.stopPropagation();
            $('.myslide').css('right','-300px');
            $('body').append(_thisContent);
            _thisContent.addClass('hidden');
        });

    }
    fn.initBtn = function(){
        return '<div class="btn-group clearfix">' +
            '<button class="ll-btn btn-yes fl">'+this.btn[0]+'</button>' +
            '  <button class="ll-btn btn-no fl">'+this.btn[1]+'</button>' +
            '</div>'
    }
    fn.close = function(){
        setTimeout(function(){
            $('.myslide').css('right','-300px');
            /*this.content.addClass('hidden');*/
        },1500)
    }
    fn.initEvent = function(){

        //确定回调
        $('.myslide').delegate('.btn-yes','click',this.yes);

        //取消回调
        $('.myslide').delegate('.btn-no','click',this.no);

    }
	window.MySlide = MySlide;
})