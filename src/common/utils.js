//字节防抖
export function debounce(func,delay){
  let timer = null
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}


export function formatDate(time){
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let second = date.getSeconds();
  return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + second;
}
