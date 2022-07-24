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
    if(cache.length > 5) cache.length = 5
    console.log('Вычисляем: ' + result);
    return 'Вычисляем: ' + result
  }
}


function debounceDecoratorNew(func, ms) {
  // Ваш код
  let allowEvoke = true
  let timer

  return function(){
    if(allowEvoke) func()
    allowEvoke = false;
    clearTimeout(timer);
    timer = setTimeout(function() {
      allowEvoke = true
    }, ms);
  }
}

function debounceDecorator2(func, ms) {
  // Ваш код
  let allowEvoke = true
  let timer

  function wrap(){
    if(allowEvoke) func()
    allowEvoke = false;
    clearTimeout(timer);
    timer = setTimeout(function() {
      allowEvoke = true
    }, ms);
    wrap.count += 1
  }
  wrap.count = 0
  return wrap
}
