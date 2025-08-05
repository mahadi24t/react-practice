export default function Time()
{
  const hours =new Date().getHours()
  let timeofDay 

  if(hours <12) {
    timeofDay ="morning"
  }
  else if(hours >=12 &&hours <17)
  {
    timeofDay = "afternoon"

  }
  else if(hours < 21)
  {
    timeofDay = "evening"
  }
  else {
    timeofDay = "night"
  }

  return(
    <h1>Good {timeofDay}</h1>
  )
}