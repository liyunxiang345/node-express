var express = require('express');
var router = express.Router();
router.get('/cake-list',(req,res,next) => {
    let params = {
        err_code: 0,
        data: {
            type_list: [
                { name: "全部分类" },
                { name: "蛋糕" },
                { name: "冰淇淋" },
                { name: "咖啡下午茶" },
                { name: "面包" },
                { name: "设计师礼品" }
            ],
            flavor_list: [
                { name: "全部口味" },
                { name: "乳脂奶油" },
                { name: "巧克力" },
                { name: "乳酪" },
                { name: "慕斯" },
                { name: "抹茶" },
                { name: "含酒" },
                { name: "咖啡" },
                { name: "冰淇淋" }
            ]
        }
    }
    res.send(params)
})
module.exports = router;