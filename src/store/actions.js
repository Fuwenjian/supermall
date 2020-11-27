export default {
  addCart(context,payload){
  //find用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
  let oldProduct =context.state.cartList.find(item => item.iid == payload.iid )

  if(oldProduct){
    // oldProduct.count += 1
    context.commit("addCounter",oldProduct)
  }else {
    payload.count = 1
    // context.state.cartList.push(payload)
    context.commit("addToCart",payload)
  }
}
}
