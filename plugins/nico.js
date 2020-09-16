/* eslint-disable */
let e, nicoJS
nicoJS = (function () {
  function t(t) {
    ;(this.version = '1.1.8'),
      (this.timer = null),
      (this.interval = null),
      (this.fps = 1e3 / 100),
      (this.step = 2e3),
      (this.comments = []),
      (this.app = t.app),
      (this.font_size = t.font_size || 50),
      (this.color = t.color || '#fff !important'),
      (this.width = t.width || 500),
      (this.height = t.height || 300),
      this.render()
  }
  return (
    (t.prototype.render = function () {
      return (
        (this.app.style.whiteSpace = 'nowrap'),
        (this.app.style.overflow = 'hidden'),
        (this.app.style.position = 'relative'),
        (this.app.style.width = this.width + 'px'),
        (this.app.style.height = this.height + 'px'),
        console.log('nicoJS@' + this.version),
        console.log(' ├─ author     : yuki540'),
        console.log(' ├─ homepage   : http://yuki540.com'),
        console.log(' └─ repository : https://github.com/yuki540net/nicoJS')
      )
    }),
    (t.prototype.resize = function (t, e) {
      return (
        (this.width = t),
        (this.height = e),
        (this.app.style.width = this.width + 'px'),
        (this.app.style.height = this.height + 'px')
      )
    }),
    (t.prototype.send = function (t, e, i) {
      let s, o, n
      return (
        (i = i || this.font_size),
        (e = e || this.color),
        (t = t || ''),
        (o = this.width),
        (n = Math.random() * (this.height - this.font_size)),
        (s = document.createElement('div')),
        (s.innerHTML = t),
        (s.style.position = 'absolute'),
        (s.style.left = o + 'px'),
        (s.style.top = n + 'px'),
        (s.style.fontSize = i + 'px'),
        (s.style.textShadow = '0 0 5px #111'),
        (s.style.color = e),
        (s.style.zIndex = 202),
        this.app.appendChild(s),
        this.comments.push({
          ele: s,
          x: o,
          y: n,
        })
      )
    }),
    (t.prototype.flow = function () {
      let t, e, i, s, o
      for (
        o = [], e = i = 0, s = this.comments.length;
        s >= 0 ? i < s : i > s;
        e = s >= 0 ? ++i : --i
      )
        (t = -1 * this.comments[e].ele.getBoundingClientRect().width),
          this.comments[e].x > t
            ? ((this.comments[e].x -= 4),
              o.push(
                (this.comments[e].ele.style.left = this.comments[e].x + 'px')
              ))
            : o.push(void 0)
      return o
    }),
    (t.prototype.listen = function () {
      return (
        this.stop(),
        (this.timer = setInterval(
          (function (t) {
            return function () {
              return t.flow()
            }
          })(this),
          this.fps
        ))
      )
    }),
    (t.prototype.loop = function (t) {
      let e, i
      return (
        (e = 0),
        (i = t.length),
        this.listen(),
        this.send(t[e++]),
        (this.interval = setInterval(
          (function (s) {
            return function () {
              return i < e && (e = 0), s.send(t[e++])
            }
          })(this),
          this.step
        ))
      )
    }),
    (t.prototype.stop = function () {
      return clearInterval(this.timer), clearInterval(this.interval)
    }),
    t
  )
})()
try {
  module.exports = nicoJS
} catch (t) {
  e = t
}
/* eslint-enable */
