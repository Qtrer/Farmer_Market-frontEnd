import Mock from 'mockjs'

Mock.mock('/test', {
    "res":0,
    "data":
        {
            "datatime": "@datetime",
            "weekday|1-7": 7,
            "name": "@cname",
        }
})

Mock.mock('/post/test1', 'post', function (param) {
    console.log(param.body)
    return {
        res: 1,
        msg: 'success'
    }
})