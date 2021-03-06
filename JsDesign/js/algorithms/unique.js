Array.prototype.unique1  = function(){
    var arr = [];  //一个新的临时数组

    //遍历当前数组
    for(var i = 0; i < this.length; i++){
        // 如果当前数组的第i已经保存进了临时数组，那么跳过，
        // 否则把当前项push到临时数组里面
        if(arr.indexOf(this[i]) == -1) arr.push(this[i]);
    }
    return arr;
}

Array.prototype.unique2 =  function(){
    var n = {}, r = []; // n为hash表，r为临时数组
    for(var i = 0; i < this.length; i++){
        if(!n[this[i]]){ //如果hash表中没有当前项
            n[this[i]] = true;  //存入hash表
            r.push(this[i]);    //把当前数组的当前项push到临时数组里面
        }
    }
    return r;
}

Array.prototype.unique3  = function(){
    var n = [this[0]];  // 结果数组
    for(var i = 1; i< this.length; i++){ //从第二项开始遍历
        //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
        //那么表示第i项是重复的，忽略掉。否则存入结果数组
        if(this.indexOf(this[i]) == i) n.push(this[i]);
    }
    return n;
}

Array.prototype.unique4 = function(){
    this.sort();

    var re  = [this[0]];
    for(var i = 1; i< this.length; i++){
        if(this[i] !== re[re.length-1]){
            re.push(this[i]);
        }
    }
    return re;
}