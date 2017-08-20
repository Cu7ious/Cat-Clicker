;(function () {
  'use strict'

  var app = {}

  app.Model = {
    currentCat: null,
    cats: [
      {
        name: 'Vaska',
        pic: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
        clicks: 0
      },
      {
        name: 'Murzik',
        pic: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
        clicks: 0
      },
      {
        name: 'Twins',
        pic: 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',
        clicks: 0
      },
      {
        name: 'Meow',
        pic: 'https://lh4.ggpht.com/dUJNejPqb_qLsV1kfWcvviqc7adxsw02BSAm8YLWNklP4lI6fQCLKXd-28uKuchtjoEUpqFN0K6kkTSDHw=s0#w=588&h=640',
        clicks: 0
      }
    ]
  }

  app.Octo = {
    init: function () {
      app.Model.currentCat = app.model.cats[0]

      app.catListView.init()
      app.catView.init()
    },

    getCurrentCat: function () {
      return app.model.currentCat
    },

    getCats: function () {
      return app.model.cats
    },

    setCurrentCat: function (cat) {
      app.model.currentCat = cat
    },

    incrementCounter: function () {
      app.model.currentCat.clicks++
      catView.render()
    }
  }

  app.catListView = {

  }

  app.catView = {
    init: function () {

    }
  }

  window.app = app
})()

;(function () {
  'use strict'

  var _staticCounter = 0

  window.createCatsList = function (name) {
    var li = document.createElement('li')
    li.dataset.id = name
    li.innerHTML = name

    if (!_staticCounter) {
      li.className = 'active'
    }

    var list = document.getElementById('list')

    list.appendChild(li)
    _staticCounter++
  }
})()

function createClickableCat (nameOfCat, imgUrl) {
  'use strict'

  var clickCounter = 0

  var div = document.createElement('div')
  div.style.position = 'relative'
  div.className = 'cat-holder'
  div.dataId = nameOfCat

  var pic = document.createElement('img')
  pic.src = imgUrl
  pic.style.width = '100%'

  div.appendChild(pic)

  var counterBubble = document.createElement('i')
  counterBubble.id = nameOfCat
  counterBubble.style.position = 'absolute'
  counterBubble.style.top = '0'
  counterBubble.style.right = '0'
  counterBubble.style.backgroundColor = 'red'
  counterBubble.style.color = 'white'
  counterBubble.style.display = 'block'
  counterBubble.style.width = '50px'
  counterBubble.style.height = '50px'
  counterBubble.style.textAlign = 'center'
  counterBubble.style.lineHeight = '50px'

  counterBubble.innerHTML = clickCounter

  div.appendChild(counterBubble)

  var catName = document.createElement('h2')
  catName.style.position = 'absolute'
  catName.style.bottom = '0'
  catName.style.left = '20px'
  catName.style.color = '#FFF'
  catName.style.textShadow = '0 0 5px #000'
  catName.innerHTML = nameOfCat

  div.appendChild(catName)

  pic.addEventListener('click', function (e) {
    var el = document.getElementById(nameOfCat)
    el.innerHTML = ++clickCounter
  }, false)

  document.getElementById('stage').appendChild(div)
}

var catsCollection = app.Model.cats

for (var i = 0; i < catsCollection.length; i++) {
  createCatsList(catsCollection[i].name)
  createClickableCat(catsCollection[i].name, catsCollection[i].pic)
}

var listItems = document.getElementById('list')

listItems.addEventListener('click', function (e) {
  if (e.target && e.target.nodeName === 'LI') {
    var id = e.target.dataset.id
    var catHolders = document.getElementsByClassName('cat-holder')
    var activeCat = document.getElementById(id).parentNode

    for (var i = 0; i < catHolders.length; i++) {
      listItems.childNodes[i].className = ''
      catHolders[i].style.display = 'none'
    }

    e.target.className = 'active'
    activeCat.style.display = 'block'
  }
}, false)
