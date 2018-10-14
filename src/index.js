import * as moment from 'moment'

console.log('Hello world')

var array = [1, 2, 3]

Array.from(array).forEach($item => {
  console.log($item)
})

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
} else {
  console.log('Looks like we are in production mode!')
}

console.log(moment.locale());
