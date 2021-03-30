```js

const observable = new Ob((observer)=>{
  try{
    observer.next('hey guys')
    setInterval(()=>{
      observer.next('look')
    },2000)
    // observer.complete()
    observer.next('hey hihi')
  }catch(err){
    observer.error(err)
  }
})



const observer = {
  next: x => log('Observer got a next value: ' + x),
  error: err => error('Observer got an error: ' + err),
  complete: () => log('Observer got a complete notification'),
};


const observer_log = {
  next: x => log('Observer got a next value: ' + x),
  error: err => error('Observer got an error: ' + err),
  complete: () => log('Observer got a complete notification'),
};

const o_node = observable.subscribe(observer)
const o_node2 = observable.subscribe(observer_log)

const add = o_node.add(o_node2)

```