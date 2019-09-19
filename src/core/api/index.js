import fly from "./http"

class Apis {
    test() {
        // 贝思客蛋糕
        return fly.get("/getjson.ashx", {
            v: "1562722622906",
            c: "Index",
            m: "GetBannerList",
            Type: "1",
            City: "上海",
            BrandType: "1"
        })
    }
    //商品列表
    getfood() {
        return fly.request("/customer/common/page/food/choose?ver=v2", {
            admin_id: "88997",
            lwm_appid: "dh129ahsd9898123gjhjfamnxoo1",
            food_type: 1,
            shop_id: 374933,
            from_type: 1
        },{
            method:"post",
            headers:{
                "content-type":"application/x-www-form-urlencoded"
            }
         })
    }
    //详情
    getdet(id) {
        return fly.request("/customer/common/food/food/foodDetail", {
            admin_id: "88997",
            lwm_appid: "dh129ahsd9898123gjhjfamnxoo1",
            food_type: "1",
            food_id:id,
            shop_id: "374933",
            from_type: "1"
        },{
            method:"post",
            headers:{
                "content-type":"application/x-www-form-urlencoded"
            }
         })
    }
    //评价详情
    geteval(id) {
        return fly.request("/customer/common/shop/shop/info?ver=v2", {
            admin_id: "88997",
            lwm_appid: "dh129ahsd9898123gjhjfamnxoo1",
            food_type: "1",
            shop_id: "374933",
            from_type: "1"
        },{
            method:"post",
            headers:{
                "content-type":"application/x-www-form-urlencoded"
            }
         })
    }
    //评价列表
    getlist(tag){
        return fly.request("/customer/crm/communion/comment/list", {
            shop_id: "374933",
            lwm_sess_token:" b8qrm9lkh9q3f29lkmjqh1cp34",
            lwm_appid: "dh129ahsd9898123gjhjfamnxoo1",
            admin_id:" 88997",
            page: "0",
            num: "20",
            tag:tag,
            timestamp: "1562911050",
            nonce: "83216",
            sign: "2EAEBC657C6540B465C7F92527CC77F4"
        },{
            method:"post",
            headers:{
                "content-type":"application/x-www-form-urlencoded"
            }
         })
    }
}
export default new Apis();