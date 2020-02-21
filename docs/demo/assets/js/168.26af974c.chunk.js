(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{674:function(n,t,e){"use strict";e.r(t),t.default="const {Scene, Sprite, Label} = spritejs;\nconst container = document.getElementById('stage');\nconst scene = new Scene({\n  container,\n  width: 1600,\n  height: 800,\n  // contextType: '2d',\n});\nconst layer = scene.layer();\n\nconst images = [\n  'https://p1.ssl.qhimg.com/t016dc86e4b2c9b83a4.jpg',\n  'https://p0.ssl.qhimg.com/t01408bb4e2bed11d2e.jpg',\n  'https://p2.ssl.qhimg.com/t014e6d3eddccf40638.jpg',\n  'https://p2.ssl.qhimg.com/t014db3a8e2bf146c5b.jpg',\n  'https://p4.ssl.qhimg.com/t01ff1bf2a37a741821.jpg',\n  'https://p2.ssl.qhimg.com/t01dc1341ab5d0fe663.jpg',\n  'https://p5.ssl.qhimg.com/t01a0acf6aa37d00f91.jpg',\n  'https://p1.ssl.qhimg.com/t013b8514570a69a1c8.jpg',\n  'https://p2.ssl.qhimg.com/t011c71494e6d98d92b.jpg',\n  'https://p4.ssl.qhimg.com/t01ab40609e924d995c.jpg',\n  'https://p0.ssl.qhimg.com/t01794495bebb84f47d.jpg',\n  'https://p4.ssl.qhimg.com/t01a30bb66a9d11d624.jpg',\n  'https://p4.ssl.qhimg.com/t01b3d2c0b0093a957d.jpg',\n  'https://p0.ssl.qhimg.com/t010da5e7311c8dd3a9.jpg',\n  'https://p5.ssl.qhimg.com/t0189dd547c322b2357.jpg',\n  'https://p4.ssl.qhimg.com/t01feb50457ebbada10.jpg',\n];\n\nconst label = new Label('\u52a0\u8f7d\u4e2d... 0 / 16');\nlabel.attr({\n  anchor: [0.5, 0.5],\n  font: '36px Arial',\n  lineHeight: 40,\n  pos: [800, 300],\n});\n\nlayer.append(label);\n\nconst button = new Label('\u70b9\u51fb\u52a0\u8f7d');\nbutton.attr({\n  anchor: [0.5, 0.5],\n  font: '44px Arial',\n  pos: [800, 400],\n  border: [2, 'black'],\n  borderRadius: 12,\n  padding: [10, 10],\n});\nlayer.append(button);\n\nasync function loadRes() {\n  button.remove();\n\n  scene.addEventListener('preload', (evt) => {\n    label.text = `\u52a0\u8f7d\u4e2d... ${evt.detail.loaded.length} / ${evt.detail.resources.length}`;\n  });\n\n  const imgs = await scene.preload(...images);\n\n  label.remove();\n\n  imgs.forEach((texture, i) => {\n    const sprite = new Sprite();\n    sprite.attr({\n      texture,\n      x: 55 + (i % 8) * 170,\n      y: 150 + Math.floor(i / 8) * 200,\n      size: [150, 150],\n    });\n    layer.append(sprite);\n  });\n}\n\nbutton.addEventListener('mouseenter', (evt) => {\n  scene.container.style.cursor = 'pointer';\n});\nbutton.addEventListener('mouseleave', (evt) => {\n  scene.container.style.cursor = 'default';\n});\nbutton.addEventListener('mousedown', (evt) => {\n  evt.target.attr('scale', 0.8);\n});\nbutton.addEventListener('mouseup', (evt) => {\n  evt.target.attr('scale', 1);\n  loadRes();\n});"}}]);