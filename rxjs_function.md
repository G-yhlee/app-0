```js

const addDom = (text) =>{
  (
    (p_dom,dom) => { p_dom.append(dom) }
  )
  (  
    document.getElementById("D_Test"),
    document.createElement("li").appendChild(document.createTextNode(text))
  )
}







```

## oo == observable , producer == p , o == observal
```js
const p= (o)=>{
  try{
    o.next('hey guys')
    setInterval(()=>{
      o.next('look')
    },2000)
    // o.complete()
    o.next('hey hihi')
  }catch(err){
    o.error(err)
  }
}


const oo = new Observable(p).pipe(share())
const o  = {
  next: x => log('Observer got a next value: ' + x),
  error: err => error('Observer got an error: ' + err),
  complete: () => log('Observer got a complete notification'),
};

const ooo = oo.subscribe(o)
const ooo2 = oo.subscribe(o2)


const _ = ooo.add(ooo2)



setTimeout(() => {
  ooo.unsubscribe();
}, 10000);

```



```js
import {fromEvent } from 'rxjs'

const oo = fromEvent(document,'mousemove')

setTimeout(() => {
  oo.subscribe(()=> log(1) )
}, 2000);

```


```js
const oo = new Subject()

oo.subscribe(
  data => log(data)
)

oo.next('The asdasd')
```



## Subject
```js
// 강의 33분 :: https://www.youtube.com/watch?v=PhggNGsSQyg
const oo = new Subject()

oo.subscribe(
  data => log(data)
)

oo.next('The asdasd')




const o2 = oo.subscribe(
  data => log(data)
)

oo.next('The 2')
oo.next('The 23')


```

## Subject
```js
// 강의 33분 :: https://www.youtube.com/watch?v=PhggNGsSQyg
const oo = new Subject()

oo.subscribe(
  data => log(data)
)

oo.next('The asdasd')




const o2 = oo.subscribe(
  data => log(data)
)

oo.next('The 2')
oo.next('The 23')


```