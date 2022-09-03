/**
 * 工具类
 */

/**
 * 获取唯一ID
 * @returns 字符串 319cd56c-ebf4-4423-a59a-20b17e4dcbf6
 */
export function GUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // eslint-disable-next-line
    const r = Math.random() * 16 | 0;
    // eslint-disable-next-line
    const v = c == "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * 防抖函数生产工厂，生成对应方法的防抖函数
 * @param {*} func
 * @param {number} [ms=1000]
 */
export function debounceCreator(func, ms = 1000) {
  let timer;
  return function () {
    if (timer) {
      timer = clearTimeout(timer);
      // 重新打开一个计时器
      const context = this;
      const args = [...arguments];
      timer = setTimeout(() => {
        func.apply(context, args);
      }, ms);
    } else {
      const context = this;
      const args = [...arguments];
      timer = setTimeout(() => {
        func.apply(context, args);
      }, ms);
    }
  }
}


/**
 * 返回时间类型串
 * 格式化时间，yyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w
 *
 * 各标识说明：
 *
 * | 标识  | 说明 |
 * | :--  | :-- |
 * | yyyy | 四位年份，如2001 |
 * | yy   | 两位年费，如01 |
 * | MM   | 两位月份，如08 |
 * | M    | 一位月份，如8 |
 * | dd   | 两位日期，如09 |
 * | d    | 一位日期，如9 |
 * | HH   | 两位小时，如07 |
 * | H    | 一位小时，如7 |
 * | mm   | 两位分钟，如03 |
 * | m    | 一位分钟，如3 |
 * | ss   | 两位秒数，如09 |
 * | s    | 一位秒数，如9 |
 * | ms   | 毫秒数，如234 |
 * | w    | 中文星期几，如一 |
 * | ct   | 12小时制中文后缀，上午/下午 |
 * | et   | 12小时制英文后缀，A.M./P.M. |
 * | cM   | 中文月份，如三 |
 * | eM   | 英文月份，如Mar |
 **/
var _getTimeData = (function () {
  var _map = {
    i: !0,
    r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
  }
  var _12cc = ['上午', '下午']
  var _12ec = ['A.M.', 'P.M.']
  var _week = ['日', '一', '二', '三', '四', '五', '六']
  var _cmon = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
  var _emon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  var _fmtnmb = function (_number) {
    _number = parseInt(_number) || 0
    return (_number < 10 ? '0' : '') + _number
  }
  var _fmtclc = function (_hour) {
    return _hour < 12 ? 0 : 1
  }

  return function (_time) {
    if (!_time && _time !== 0) {
      return ''
    }
    _time = new Date(_time * 1)
    _map.yyyy = _time.getFullYear()
    _map.yy = ('' + _map.yyyy).substr(2)
    _map.M = _time.getMonth() + 1
    _map.MM = _fmtnmb(_map.M)
    _map.eM = _emon[_map.M - 1]
    _map.cM = _cmon[_map.M - 1]
    _map.d = _time.getDate()
    _map.dd = _fmtnmb(_map.d)
    _map.H = _time.getHours()
    _map.HH = _fmtnmb(_map.H)
    _map.m = _time.getMinutes()
    _map.mm = _fmtnmb(_map.m)
    _map.s = _time.getSeconds()
    _map.ss = _fmtnmb(_map.s)
    _map.ms = _time.getMilliseconds()
    _map.w = _week[_time.getDay()]
    var _cc = _fmtclc(_map.H)
    _map.ct = _12cc[_cc]
    _map.et = _12ec[_cc]
    return _map
  }
})()

/**
 * 
 * @param {Date} _time 时间
 * @param {String} _format 格式
 * @returns 
 */
export function timeFormat(_time, _format) {
  var _map = _getTimeData(_time)
  _format = _format || 'yyyy-MM-dd'
  _format = '' + _format
  if (!_map || !_format) {
    return _format || ''
  }
  return _format.replace(_map.r, function ($1) {
    var _result = _map[!_map.i ? $1.toLowerCase() : $1]
    return _result !== null ? _result : $1
  })
}


/**
 * input 保留几位小数
 * @param {String} val 输入的内容
 * @param {Number} fixed 保留的位数
 * @returns 
 */
export function numberCheck(val, fixed = 1) {
  var str = val;
  var len1 = str.substr(0, 1);
  var len2 = str.substr(1, 1);
  // 如果第一位是 0, 第二位不是点, 就用数字把点替换掉
  if (str.length > 1 && len1 === 0 && len2 !== '.') {
    str = str.substr(1, 1);
  }
  // 第一位不能是.
  if (len1 === '.') {
    str = '';
  }
  // 限制只能输入一个小数点
  if (str.indexOf('.') !== -1) {
    var str_ = str.substr(str.indexOf('.') + 1);
    if (str_.indexOf('.') !== -1) {
      str = str.substr(0, str.indexOf('.') + str_.indexOf('.') + 1);
    }
  }
  // 正则替换, 保留数字和小数点
  let reg = new RegExp(`^\\d*(\\.?\\d{0,${fixed}})`, 'g')
  str = str.match(reg)[0] || null
  return str;
}

/**
 * utc时间格式化
 * @param {Date} UTCDateString UTC时间
 * @returns 
 */
export function utcTimeFormat(UTCDateString) {
  if (!UTCDateString) {
    return '-';
  }
  function formatFunc(str) {
    return str > 9 ? str : '0' + str;
  }
  var date2 = new Date(UTCDateString);
  var year = date2.getFullYear();
  var mon = formatFunc(date2.getMonth() + 1);
  var day = formatFunc(date2.getDate());
  var hour = date2.getHours();
  //var noon = hour >= 12 ? 'PM' : 'AM'; // 判断是上午还是下午
  hour = hour >= 12 ? hour : hour; // 24小时制
  //hour = hour >= 12 ? hour - 12 : hour; // 12小时制
  hour = formatFunc(hour);
  var min = formatFunc(date2.getMinutes());
  var sec = formatFunc(date2.getSeconds());
  var dateStr =
    year + '.' + mon + '.' + day + ' ' + hour + ':' + min + ':' + sec;
  return dateStr;
}