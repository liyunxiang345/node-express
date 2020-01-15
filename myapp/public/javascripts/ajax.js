const $ajax = (options) => {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = 'json';
    let params = formatParams(options.data);
    let xhr = null;
    //考虑兼容性
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }else if(window.ActiveObject){//兼容IE6以下版本
        xhr=new ActiveXobject('Microsoft.XMLHTTP');
    }
    // 发送请求
    if(options.type === "GET"){
        xhr.open("GET",`${options.url}?${params}`,true);
        xhr.send();
    }else if(options.type=="POST"){
        xhr.open("post",options.url,true);
        //设置表单提交时的内容类型
        //Content-type数据请求的格式
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(params);
    }
    //超时设置
    setTimeout(() => {
        if(xhr.readyState != 4){
            xhr.abort();
        }
    },options.timeout)
    //回调函数
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            let status = xhr.status;
            if(status >= 200 && status < 300 || status === 304){
                options.success&&options.success(xhr.responseText,xhr.responseXML);
            }else{
                options.error&&options.error(status);
            }
        }
    }
}

//格式化请求参数
const formatParams = (data) =>{
    let arr=[];
    for(let name in data){
        arr.push(encodeURIComponent(name)+"="+encodeURIComponent(data[name]));
    }
    arr.push(("v="+Math.random()).replace(".",""));
    return arr.join("&");
}