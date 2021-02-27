/* 
快速排序
*/

function quickSort(arr) {
    // 交换数组位置
    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // 数组分区
    function partition(arr, left, right) {
        let stortIndex = left;//从最左边取游标
        let Point = arr[right];//特殊线标

        // 从最左边遍历
        for (let i = left; i < right; i++) {
            // 如果当前元素小于Point游标，交换stortIndex与i位置
            if (arr[i] < Point) {
                swap(arr,stortIndex,i);
                // 交换后将游标下移
                stortIndex++;
            }
        }
        // 分区完成后,将Point与当前游标交换
        swap(arr,stortIndex,right);
        return stortIndex
    }

    function sort(arr,left,right) {
        if (left>right) {
            return;
        }
        // 去特殊点point
        let stortIndex=partition(arr,left,right);
        // 左
        sort(arr,left,stortIndex-1);
        // 右
        sort(arr,stortIndex+1,right);
    }
    sort(arr,0,arr.length-1);
    return arr;
}
var array=[9,56,4,32,76,89,6,2,10];
console.log(array);
console.log(quickSort(array));

