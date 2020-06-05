import React, { Fragment, useState, useEffect } from "react"

const MeetUp = () => {
  const [events, setEvents] = useState([])

  const corsAPI = "https://cors-anywhere.herokuapp.com/"
  const meetupURL =
    "https://www.meetup.com/Syracuse-Software-Development-Meetup/events/json/"

  useEffect(() => {
    fetch(corsAPI + meetupURL, {
      method: 'GET',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    }).then(res => {
      res.json().then((res) => {
        console.log(res)
        setEvents(res)
      })
    })
  }, [])

  return (
    <div>
      <h1>Upcoming Events</h1>

      {events &&
        events.map((event, index) =>
          <Fragment key={index}>
            <p>{event.title}</p>
            <p>{event.descr}</p>
          </Fragment>
        )}
    </div>
  )
}

export default MeetUp
