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

Mock.mock('/post/add','post',function(param){
    let body = JSON.parse(param.body)
    let id = parseInt(body.id)
    let flag = true
    let userList;
    for (let item of userList) {
        if (item.id === id) flag = false
    }
    if (flag) {
        userList.push(
            {
                name: body.name,
                id
            }
        )
        return {
            userList,
            res: 0,
            msg: 'add success'
        }
    } else{
        return {
            userList,
            res: 1,
            msg: 'add failure'
        }
    }
});