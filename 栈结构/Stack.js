 // 封装栈类
 function Stack(params) {
    // 栈中的属性
    this.items=[];
    // 栈中的相关操作
    // push（element）：添加一个新元素到栈顶位置
    Stack.prototype.push=function(element){
        this.items.push(element);
        return element;
    }

    // pop():移除栈顶元素，同时返回被移除的元素
    Stack.prototype.pop=function(){
        return this.items.pop();
    }

    // peek():返回栈顶元素，不对栈做任何修改（这个方法不会移除栈顶元素，仅仅返回它）
    Stack.prototype.peek=function(){
        return this.items[this.items.length-1];
    }


    // isEmpty():判空
    Stack.prototype.isEmpty=function(){
        return this.items.length==0;
    }

    // size():返回长度
    Stack.prototype.size=function(){
        return this.items.length;
    }


    // tostring():输出
    Stack.prototype.tostring=function(){
        var str='';
        for (let index = 0; index < this.items.length; index++) {
            str+=this.items[index]+' '
        }
        return str;
    }
}