
说明
    
    github上面自动补全的插件很多 但是大多数都有问题
    如使用以后组件位置错乱等 本插件在AutoCompleteView构建了一个隐藏的遮罩层 并且通过context进行传递 保证所有组件都能平级的调用 并且做到可以自适应编辑框位置 使用很方便

安装
> npm i --save react-native-autocomplete

## AutoCompleteViewProps

Prop            | Type   | Optional | Default   | Description
--------------- | ------ | -------- | --------- | -----------
style           | style  | Yes      |           | 补全View页面总体风格
itemData        | array  | Yes      |           | 补全需要显示的数据
itemKey         | string | Yes      |           | 假设你现在的itemData:[{name:'111'}]这样的结构的话 并且你的itemKey:'name' 那么就代表使用数组对象中的name作为item的标题来显示 因为每个人的接口字段都不一致 所以这里为了抹平使用这种方式来实现
itemView        | style  | Yes      |           | 设置itemView的风格
itemButtonView  | style  | Yes      |           | 设置每个item按钮的风格
itemTextView    | style  | Yes      |           | 设置每个item中文本的风格

## AutoCompleteInputProps
Prop            | Type   | Optional | Default   | Description
--------------- | ------ | -------- | --------- | -----------
style           | style  | Yes      |           | 编辑框外层view主体风格
inputStyle      | style  | Yes      |           | 编辑框风格
onItemPress     | fun    | Yes      |           | 编辑框点击事件 会返回itemData中选中那条的所有数据

如遇到麻烦 欢迎提问题 也可以加我的QQ:469373256进行沟通