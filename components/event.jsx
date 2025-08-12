import './event.css'

export default function Event() {
    function handleClick() {
        alert("Event handled!");
    }
    return (
     <main className="event--container">
        <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKJQyKgZyn2aIMQ65pa0AtVcddlZZpGp2tDDMvOoAbAS2Wn0uer3OYUdsnjI69qT9IyI&usqp=CAU"
            alt="Random"
            className="event--photo"
        />
        <h1 className="event--title">Event Title</h1>
        <p className="event--date">Date: 2023-10-01</p>
        <p className="event--description">This is a description of the event. It will be fun and engaging!</p>
        <button className="event--button" onClick={handleClick}>Join Event</button>
        <p className="event--status">Status: Upcoming</p>
     </main>  
    )
}
