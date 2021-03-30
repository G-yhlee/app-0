```js
// 인프런 ;: rxjs
const {log,error} = console

import React from 'react';
import {Observable,fromEvent,BehaviorSubject,from,of } from 'rxjs'
import { share } from 'rxjs/operators';


// source
const source1 = ['d1','d2','d3']
const source2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('delivery')
    },3000)
  })

// stream
const stream1 = from(source2)
const stream2 = of(...source1)


// filter
const filter = {
  next: (data) => {log(data)},
  complete: () => {log('done')},
  error: (err) => {}
}

// stream-filter
stream2.subscribe(filter)

```