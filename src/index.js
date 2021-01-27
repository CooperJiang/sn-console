const logger = window.console.log;

/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | info ]
 */
const typeColor = function (type = 'default') {
    let color = ''
    switch (type) {
        case 'primary':
            color = '#146aa9'
            break
        case 'success':
            color = '#19be6b'
            break
        case 'info':
            color = '#909398'
            break
        case 'warning':
            color = '#ff9900'
            break
        case 'danger':
            color = '#f03f14'
            break
        case 'default':
            color = '#35495E'
            break
        case 'line':
            color = '#f4f4f5'
            break;
        case 'log':
            color = '#f4f4f5'
            break;
        default:
            color = type
            break
    }
    return color
}

/**
 * @param {String} text 
 * @param {String} type [ primary | success | warning | danger | info ]
 */
const print = (text, title, type) => {
    const arr = [ "primary", "success", "warning", "danger", "info" ]
    if(typeof title  != 'string'){
        throw new Error("Only one variable can be printed at a time,The second parameter only supports type is string,")
    }
    logger(
        `%c ${title} `,
        `background: ${typeColor(type)}; border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;`,
        text
    )
}

const info = (text, title = "info") => {
    print(text, title, "info")
}

const success = (text, title = "success") => {
    print(text, title, "success")
}

const primary = (text, title = "primary") => {
    print(text, title, "primary")
}

const warning = (text, title = "warning") => {
    print(text, title, "warning")
}

const danger = (text, title = "danger") => {
    print(text, title, "danger")
}

const clear = () => {
    console.clear()
}

/**
 * @description print a split line
 */
const line = function () {
    let text = '-----------------split line-----------------'
    logger(
        ` %c ${text} %c`,
        `border:1px solid ${typeColor('line')}; padding: 1px; border-radius: 4px; background: ${typeColor('line')}; color: #919398;`,
        'background:transparent'
    )
}

/**
 * @description print welcome 
 */
const welcome = function () {
    var res = `
____ ____ ____ ____ ____ ____ ____ 
||w |||e |||l |||c |||o |||m |||e ||
||__|||__|||__|||__|||__|||__|||__||
|/__\|/__\|/__\|/__\|/__\|/__\|/__\|					   
	`
    logger(res);
}

/**
 * @description print img
 * @param {string} img 
 */
const img = (img) => {
    logger("%c+",
        `font-size: 1px;
	padding: 60px 122px;
	background-image: url('${img}');
	background-size: contain;
	background-repeat: no-repeat;
	color: transparent;`);
}

/**
 * @description clear all, if you use,window.logger will invalid
 */
const clearAll = () => {
    window.console.log = (str) => {
        return;
    }
}

const copyright = () => {
    let styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
    let styleTitle2 = `
font-style: oblique;
font-size:14px;
color: rgb(244,167,89);
font-weight: 400;
`
    let styleContent = `
color: rgb(30,152,255);
`
    /* 内容代码 */
    let title1 = '🌒 SN-LOG '
    let title2 = 'author: snine'
    let myUrl = 'http://www.jlongyan.com'
    let content = `
版 本 号：1.0.2 
编译日期：2021-01-20 22:19:39 
版权声明：
1. SN-LOG版权完全属于 "Snine".
2. SN-LOG可以免费使用，npm下载即可：
	1）有问题请联系作者：wx:Ami9897
    2）保留此版权信息在控制台输出
    3）此提示信息只会打印三次
我们保留对此版权信息的最终解释权.

🏠 官网:  ${myUrl}
📞 微信:  Ami9897
`
    logger(`%c${title1} %c${title2}%c${content}`, styleTitle1, styleTitle2, styleContent)
}

const performance = () => {
    setTimeout(() => {
        let performance = window.performance;
        if (performance) {
            let time = performance.getEntriesByType("navigation")[0];
            let resource = 0;
            time || (resource = (time = performance.timeOrigin).navigationStart);
            let detail = [{
                key: "Redirect",
                desc: "网页重定向的耗时",
                value: time.redirectEnd - time.redirectStart
            }, {
                key: "AppCache",
                desc: "检查本地缓存的耗时",
                value: time.domainLookupStart - time.fetchStart
            }, {
                key: "DNS",
                desc: "DNS查询的耗时",
                value: time.domainLookupEnd - time.domainLookupStart
            }, {
                key: "TCP",
                desc: "TCP连接的耗时",
                value: time.connectEnd - time.connectStart
            }, {
                key: "Waiting(TTFB)",
                desc: "从客户端发起请求到接收到响应的时间 / Time To First Byte",
                value: time.responseStart - time.requestStart
            }, {
                key: "Content Download",
                desc: "下载服务端返回数据的时间",
                value: time.responseEnd - time.responseStart
            }, {
                key: "HTTP Total Time",
                desc: "http请求总耗时",
                value: time.responseEnd - time.requestStart
            }, {
                key: "DOMContentLoaded",
                desc: "dom加载完成的时间",
                value: time.domContentLoadedEventEnd - resource
            }, {
                key: "Loaded",
                desc: "页面load的总耗时",
                value: time.loadEventEnd - resource
            }];
            console.table(detail)
        }
    }, 0)
}

const help = () => {
    let styleContent = `
color: rgb(30,152,255);
`
    let content = `
共支持以下方法：
@param {any} info : What needs to be printed
@param {string} title : Print the header label of the content
  * Basic API
    1： log.info(info,title)
    2： log.danger(info,title)
    3： log.success(info,title)
    4： log.primary(info,title)
    5： log.warning(info,title)
  * Other API 
    1:  log.img(link)
    2:  log.clear()
    3:  log.clearAll()
    4:  log.welcome()
    5:  log.clearAll()
    6:  log.copyright()
    7:  log.performance()
  * Help API
        log.help()
`
logger(`%c${content}`,styleContent)
}

const log = {
    img,
    line,
    info,
    help,
    clear,
    danger,
    success,
    primary,
    warning,
    welcome,
    clearAll,
    copyright,
    performance
}
window.log = log;
export default log