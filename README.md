# myslide
*****MySilde  侧滑弹窗*****
* MySilde.open(Param)
*@Param
*   title 弹窗标题
*   content  用户自定义内容
*   btn      Array 是,否按钮名称
*   yes      按钮确定是 回调函数
*   no       按钮取消否 回调函数
*
* 
*语法类似layer.open语法，有layui经验的很容易使用，
*使用方法：引用js和css即可。
*eg:
*mySlide.open({
*    title:'新建分类',
*    content:$('#addGroupContent'),
*    btn:['确定','取消'],
*    skin:'blue',
*    yes:function(){
*        此处是确定回调
*    },
*    no:function(){
*       此处是取消回调
*    }
*})
