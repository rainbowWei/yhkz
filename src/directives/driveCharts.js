const bind = function(el, binding, vnode) {

}

const inserted = function(el, binding, vnode) {
  const { arg, value } = binding
  if (typeof value === 'function') {
    value(el, arg)
  } else {
    throw new Error('v-drive 指令接收一个函数作为参数')
  }
}

export default {
  bind,
  inserted
}
