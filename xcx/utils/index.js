import * as Mock from "./mock"
// 防止opt没有传该传的
const DEFAULT_REQUEST_OPTIONS={
    url:"",
    data:{},
    header:{
        "Content-type":"json"
    },
    method:"GET",
    dataType:"json"
};
let util={
    request(opt){
        // 生成对象
        let options=Object.assign({},DEFAULT_REQUEST_OPTIONS,opt);  //这句代码很重要
        // console.log(options);
        let {url,data,header,method,dataType,mock=false}=options    //解构
        // console.log(url,data,header,method,dataType,mock);
        return new Promise((resolve,reject)=>{
            // resolve("ok");
            if(mock){
                let res={
                    statusCode:200,
                    data:Mock[url]
                }
                resolve(res.data);
                return;
            }
            wx.request({
                url,
                data,
                header,
                method,
                dataType,
                success(res){
                    resolve(res.data);
                },
                fail(res){
                    reject(res.data);
                }
            });
        });
    }
}

export default util