/**
 * 判断是否是手机端
 * @export
 * @returns
 */
export function isMobile () {
  const sUserAgent = navigator.userAgent.toLowerCase()
  const bIsIpad = sUserAgent.match(/ipad/i) === 'ipad'
  const bIsIphoneOs = sUserAgent.match(/iphone os/i) === 'iphone os'
  const bIsMidp = sUserAgent.match(/midp/i) === 'midp'
  const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) === 'rv:1.2.3.4'
  const bIsUc = sUserAgent.match(/ucweb/i) === 'ucweb'
  const bIsAndroid = sUserAgent.match(/android/i) === 'android'
  const bIsCE = sUserAgent.match(/windows ce/i) === 'windows ce'
  const bIsWM = sUserAgent.match(/windows mobile/i) === 'windows mobile'
  const bIsWebview = sUserAgent.match(/webview/i) === 'webview'
  return (
    bIsIpad ||
        bIsIphoneOs ||
        bIsMidp ||
        bIsUc7 ||
        bIsUc ||
        bIsAndroid ||
        bIsCE ||
        bIsWM ||
        bIsWebview
  )
}

export function getQueryStrings (url) {
  const ps = {}
  const u = url || window.location.href
  if (u.indexOf('?') !== -1) {
    const s = u.split('?')[1]
    const strs = s.split('&')
    for (let i = 0; i < strs.length; i++) {
      const p = strs[i].split('=')
      ps[p[0]] = decodeURIComponent(p[1])
    }
  }
  return ps
}

/**
 * 获取url参数值
 * @export
 * @param {any} name
 * @returns
 */
export function getQueryString (name) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  let r
  try {
    r = window.location.href.split('?')[1].match(reg)
  } catch (err) {
    r = null
  }
  if (r != null) {
    return (r[2])
  }
  return null
}

export function escapeHtml (string) {
  const matchHtmlRegExp = /["'&<>]/
  const str = `${string}`
  const match = matchHtmlRegExp.exec(str)

  if (!match) {
    return str
  }

  let escape
  let html = ''
  let index = 0
  let lastIndex = 0

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;'
        break
      case 38: // &
        escape = '&amp;'
        break
      case 39: // '
        escape = '&#39;'
        break
      case 60: // <
        escape = '&lt;'
        break
      case 62: // >
        escape = '&gt;'
        break
      default:
        continue
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index)
    }

    lastIndex = index + 1
    html += escape
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html
}

export function cutStr (str, len) {
  if (typeof str === 'number') {
    str = str.toString()
  }
  if (str.toString.length * 2 <= len) {
    return str
  }
  var strlen = 0
  var s = ''
  for (var i = 0; i < str.length; i++) {
    s = s + str.charAt(i)
    if (str.charCodeAt(i) > 128) {
      strlen = strlen + 2
      if (strlen >= len) {
        return s.substring(0, s.length - 1) + '..'
      }
    } else {
      strlen = strlen + 1
      if (strlen >= len) {
        return s.substring(0, s.length - 2) + '..'
      }
    }
  }
  return s
}
