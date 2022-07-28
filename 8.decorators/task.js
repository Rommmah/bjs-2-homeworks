function cachingDecoratorNew(func) {
  // Ваш код
  let cache = []
  return function (...args) {
    let key = args.join(',')

    let fromCache = cache.find( item => item.key === key)
    if(fromCache) {
      console.log('Из кэша: ' + fromCache.result);
      return 'Из кэша: ' + fromCache.result
    }

    let result = func(...args)
    cache.unshift({key, result})
    if(cache.length > 5) {
      cache.pop()
    }
    console.log('Вычисляем: ' + result);
    return 'Вычисляем: ' + result
  }
}


function debounceDecoratorNew(func, ms) {
  // Ваш код
  let allowEvoke = true
  let timer

  return function(...args){
    clearTimeout(timer)
    if(allowEvoke) {
      func.apply(this, args)
      timer = setTimeout( () => allowEvoke = true, ms)
    } else {
      timer = setTimeout( () => {
        func.apply(this, args)
        allowEvoke = true
      }, ms);      
    }
    allowEvoke = false
  }
}

function debounceDecorator2(func, ms) {
  // Ваш код
  let allowEvoke = true
  let timer

  wrap.count = 0

  function wrap(...args){
    clearTimeout(timer)
    if(allowEvoke) {
      func.apply(this, args)
      timer = setTimeout( () => allowEvoke = true, ms)
    } else {
      timer = setTimeout( () => {
        func.apply(this, args)
        allowEvoke = true
      }, ms);      
    }
    allowEvoke = false

    wrap.count += 1
  }

  return wrap
}
