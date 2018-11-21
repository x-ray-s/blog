---
title: css优先级

category: css
---
所谓CSS优先级，即是指CSS样式在浏览器中被解析的先后顺序。
<ul>
	<li>1.每个ID选择符(#id)，加 0,1,0,0。</li>
	<li>2.每个class选择符(.class)、每个属性选择符(形如[attr=value]等)、每个伪类(形如:hover等)加0,0,1,0。</li>
	<li>3.每个元素或伪元素(:firstchild)等，加0,0,0,1。</li>
	<li>4.其它选择符包括全局选择符*，加0,0,0,0。相当于没加，不过这也是一种specificity，后面会解释。</li>
</ul>
<table width="100%" border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>h1 {color:blue;}</td>
<td>1</td>
</tr>
<tr>
<td>p em {color:purple;}</td>
<td>1+1=2</td>
</tr>
<tr>
<td>.apple {color:red;}</td>
<td>10</td>
</tr>
<tr>
<td>p.bright {color:yellow;}</td>
<td>1+10=11</td>
</tr>
<tr>
<td>p.bright em.dark {color:brown;}</td>
<td>1+10+1+10=22</td>
</tr>
<tr>
<td>#id316 {color:yellow}</td>
<td>100</td>
</tr>
</tbody>
</table>
通过上面，就可以很简单的看出，HTML标记的权重是1,CLASS的权重是10,ID的权重是100，继承的权重为0。
按这些规则将数字符串逐位相加，就得到最终的权重，然后在比较取舍时按照从左到右的顺序逐位比较。
优先级问题其实就是一个冲突解决的问题，当同一个元素（内容）被CSS选择符选中时，就要按照优先级取舍不同的CSS规则。

简单说下CSS继承，能继承的属性常用：list-style;font;color;line-height;text-align;text-indent;不常用:letter-spacing;word-spacing;

附加说明：
<ul>
	<li>1.优先级由近及远，行内优先级最高；</li>
	<li>2.!important高于一切;</li>
	<li>3.如果优先权一样，则按照在源码中出现的顺序决定，后来者居上;</li>
	<li>4.继承的优先级最低;</li>
	<li>5.关于经由@import加载的外部样式，由于@import必须出现在所有其它规则定义之前(如不是，则浏览器应该忽略之)，所以按照后来居上原则，一般优先权冲突时是占下风的。</li>
</ul>
最后一条很少用，所以做个备注。
