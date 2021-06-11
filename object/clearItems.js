// 清空对象内的元素
export function clearItems(src) {
    for (const key in src) {
      switch (typeof src[key]) {
        case 'number':
          src[key] = 0
          break
        case 'string':
          src[key] = ''
          break
        case 'object':
          if (src[key] === null) {
            src[key] = ''
          } else if (typeof src[key].length === 'number') {
            src[key] = []
          } else {
            src[key] = {}
          }
          break
        case 'boolean':
          src[key] = false
      }
    }
  }