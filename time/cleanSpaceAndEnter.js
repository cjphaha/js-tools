// 晴空空格和回车
export function cleanSpaceAndEnter(src) {
    // 去掉空格
    var tmp = src.replace(/\ +/g, '')
    // 去掉回车换行
    return tmp.replace(/[\r\n]/g, '')
}