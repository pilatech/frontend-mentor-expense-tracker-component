const container = document.querySelector('.widget-main-section')

fetch('./data.json')
.then(res => res.json())
.then(data => {
 const highest = Math.max(...data.map(item => item.amount))
 const newMarkup = data.map(day => {
  
  const size = `${day.amount * 3}px`
  return `<p class="day">
  <span class="day-bar" style="height: ${size};  background: ${highest === day.amount && "hsl(186, 34%, 60%)"};"></span>
  sun
  </p>`
 })

 const markUp = newMarkup.join("")
 container.innerHTML += markUp

})

