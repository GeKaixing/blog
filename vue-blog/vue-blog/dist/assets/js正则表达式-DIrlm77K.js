const n=`### 正则表达式
* 普通字符
    明确的关键字
    但需要匹配的字符在正则表达式中有特殊含义时需要\\转译成所匹配一部分,如不转译则会成为表达式的语法
    需要转译的字符
    (){}[]\\|+*.$?^脱字符号
\`\`\`js
    const str = 'hello+ world';
    const new_regexp=/hello\\+/;
    console.log(new_regexp.exec(str))
\`\`\`
* 字符集合
    关键字的值范，包含在一对[]中间
    \`\`\`js
    const new_regexp1=/w[oe]rld/
    //脱字符号，表示不匹配oe
    const new_regexp2=/w[^oe]rld/
    console.log(new_regexp1.exec(str));//只返回匹配成功的第一个world
    console.log(new_regexp2.exec(str));//当匹配任何字符就返回null
    \`\`\`
* 限定符
    给前一个字符追加出现次数范围
    *表示出现0次或多次
    +表示出现1次或多次
    ?表示出现0次或1次
    当限定符不满足出现的范围可使用{}标志具体次数
    {1}表示出现1次
    {1,}表示出现1或1次以上
    {1,3}表示出现1到3次 
    \`\`\`js
    const str2='gooooooood'
    const reg=/go+d/
    const reg3=/go*d/   
    const reg4=/go?d/
    console.log(reg.exec(str2));
    console.log(reg3.exec(str2));
    console.log(reg4.exec(str2));//null
    \`\`\`
    如前面为模糊匹配范围时，会参生贪婪匹配的问题
    \`\`\`js
    //贪婪匹配
    const reg5=/d[a-z]+m/
    //非贪婪匹配
    const reg6=/d[a-z]+?m/
    \`\`\`
* 定位符
    标记匹配位置的元字符
    ^表示字符串开始的位置
    $表示字符串结尾的位置
    \\b表示单词边界，字符与空格的位置
    \\B表示非单词边界
* 子表达式
    子表达式，内嵌正则表达式，包含在一对()中
    子表达式也可以作为多种情况的匹配范围，用｜分割多个子表达（多种情况）
    子表达式匹配结果默认会单独存储，希望不存储，可以添加标记?:
    子表达式可作为预查匹配项，可以理解式自定义的定位符号
* 省略符
    为了简化正则表达式的元字符,一般\\开头
    |\\d|匹配一个数字字符|
    |----|----|
    |\\D|匹配一个非数字字符|
    |等|。。。|
    
* 修饰符
    指定匹配策略    
    |i|将匹配设置为不区分大小写，如A和a没有区别|
    |----|----|
    |g|查找所有的匹配项|
    |m|多行匹配|
    |s|默认情况下的圆点.是匹配换行符\\n之外的任何字符，加上s修饰符之后，.中包行换行符\\n|
    |等|。。。|
* 转译
    当我们需要匹配的是正则表达式的关键字时需要对他进行使用\\反斜杠进行转译例如//就是匹配/斜杠
\`\`\`js
     const tocRegex = /<h[1-6]>(.*?)<\\/h1-6>/g;

\`\`\`
`;export{n as default};
