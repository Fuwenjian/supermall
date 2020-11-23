//z这个文件里配置别名
module.exports ={
    configureWebpack:{
        resolve:{
            // extension:[]
            alias:{
                //下面这行是系统默认的配置的别名
                // "@":"src"
                "assets":"@/assets",
                "common":"@/common",
                "components":"@/components",
                "network":"@/network",
                "views":"@/views"
            }
        }
    }
}