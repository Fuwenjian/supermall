export default{
  // addCart(state, payload) {
  //   //1.
  //   // let oldProduct = null
  //   // for (let item of state.cartList){
  //   //   if (item.iid == payload.iid){
  //   //     oldProduct = item
  //   //   }
  //   // }
  //   // if (oldProduct){
  //   //   oldProduct.count += 1
  //   // }else {
  //   //   payload.count = 1
  //   //   state.cartList.push(payload)
  //   // }
  //
  //   //2.
  //   let oldProduct =state.cartList.find(item => item.iid ==payload.iid )
  //   if(oldProduct){
  //     oldProduct.count += 1
  //   }else {
  //     payload.count = 1
  //     state.cartList.push(payload)
  //   }
  // },
  addCounter(state,payload){
    payload.count++
  },
  addToCart(state,payload){
    payload.checked = true
    state.cartList.push(payload)
  }
}
