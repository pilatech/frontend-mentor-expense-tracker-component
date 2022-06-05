const container = document.querySelector('.widget-main-section')

fetch('./data.json')
.then(res => res.json())
.then(data => {

 let largest = data[1].amount

 const newMarkup = data.map(day => {
  
  if(day.amount > largest) { 
   largest = day.amount
  }
  const size = `${day.amount * 3}px`
  return `<p class="day">
  <span class="day-bar" style="height: ${size};"></span>
  sun
  </p>`
 })

 const markUp = newMarkup.join("")
 container.innerHTML += markUp

})
