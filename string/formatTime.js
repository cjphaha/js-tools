// 把unix时间转换为正常的时间
export function formatTime(time) {
    // 例如将毫秒时间戳“1600336219000”转换为"YYYY-MM-dd  HH24:mi:ss"格式的string类型的时间格式
    // 创建一个指定的日期对象
    var temp_time = new Date(time)
    // 取得4位数的年份
    var year = temp_time.getFullYear()
    // 取得日期中的月份，其中0表示1月，11表示12月
    var month = temp_time.getMonth() + 1
    // 小于10月的月份补全0 例如1月补全为01月
    month = month < 10 ? '0' + month : month
    // 返回日期月份中的天数（1到31）
    var day = temp_time.getDate()
    day = day < 10 ? '0' + day : day
    // 返回日期中的小时数（0到23）
    var hour = temp_time.getHours()
    hour = hour < 10 ? '0' + hour : hour
    // 返回日期中的分钟数（0到59）
    var minute = temp_time.getMinutes()
    minute = minute < 10 ? '0' + minute : minute
    // 返回日期中的秒数（0到59）
    var second = temp_time.getSeconds()
    second = second < 10 ? '0' + second : second
  
    // 拼接需要的时间格式
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
  }