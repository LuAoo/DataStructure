function Queue() {
    // 属性
    this.items = [];
    // 方法
    // enqueue(): 向队列尾部添加一个新的项
    Queue.prototype.enqueue = function (element) {
        this.items.push(element);
        return element;
    } 
    // dequeue(): 移除队列的第一项，并返回被移除的元素
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    }
    // front(): 返回队列中的第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动
    Queue.prototype.front = function () {
        return this.items[0];
    }
    // isEmpty(): 判空
    Queue.prototype.isEmpty = function () {
        return this.items.length == 0;
    }
    // size(): 返回长度
    Queue.prototype.size = function () {
        return this.items.length;
    }
    // tostring(): 输出
    Queue.prototype.tostring = function () {
        var str='';
        for (let index = 0; index < this.items.length; index++) {
            str+=this.items[index]+' ';            
        }
        return str;
    }
}