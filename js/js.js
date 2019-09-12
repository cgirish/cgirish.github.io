// TextScramble
// ——————————————————————————————————————————————————
class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
const phrases = [
  'Front-end Development',
  'CSS(CSS3, SCSS, Less)',
  'HTML(React, Haml)',
  'UI/UX Design',
  'Typography',
  'Photoshop and Gimp',
  'Illustrator, Sketch and Inkscape',
  '3D using Blender',
  'SVG',
  'Ajax',
  'Json',
  'Jquery',
  'JavaScript',
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)
let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1500)
  })
  counter = (counter + 1) % phrases.length
}

next();
// Credit:
// https://codepen.io/zenonchaos/pen/NMEyJz


// Baseline
document.querySelector('.toggle-baseline').addEventListener('click', function() {
  document.querySelector('body').classList.toggle('baseline');
});


// Modal
document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
    if (target.hasAttribute('data-target')) {
      var m_ID = target.getAttribute('data-target');
      document.getElementById(m_ID).classList.add('open');
      document.querySelector('body').classList.toggle('overflow-hidden');
      ;(function() {
        var bLazy = new Blazy({ });
      })();
      e.preventDefault();
    }
  }

  // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
  if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
    var modal = document.querySelector('[class="modal open"]');
    modal.classList.remove('open');
    document.querySelector('body').classList.toggle('overflow-hidden');
    e.preventDefault();
  }
}, false);


// BE LAZY
;(function() {
  var bLazy = new Blazy({});
})();


var elm = document.querySelector('nav');
var ms = new MenuSpy(elm);
