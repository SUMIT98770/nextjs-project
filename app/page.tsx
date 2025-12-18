import Explorebtn from "./component/explorebtn"
import Eventcard from "./component/Eventcard"
import { title } from "process"

const events = [
  {
    image: '/images/event1.png',
    title: 'Event 1',
    slug: 'event-1',
    location: 'location-1',
    date: 'Date-1',
    time: 'Time-1',
   },
  {
    image: '/images/event2.png',
    title: 'Event 2',
    slug: 'event-2',
    location: 'location-2',
    date: 'Date-2',
    time: 'Time-2',
   },
  {
    image: '/images/event3.png',
    title: 'Event 3',
    slug: 'event-3',
    location: 'location-3',
    date: 'Date-3',
    time: 'Time-3',
   },
  {
    image: '/images/event4.png',
    title: 'Event 4',
    slug: 'event-4',
    location: 'location-4',
    date: 'Date-4',
    time: 'Time-4',
   },
  {
    image: '/images/event5.png',
    title: 'Event 5',
    slug: 'event-5',
    location: 'location-5',
    date: 'Date-5',
    time: 'Time-5',
   },
  {
    image: '/images/event6.png',
    title: 'Event 6',
    slug: 'event-6',
    location: 'location-6',
    date: 'Date-6',
    time: 'Time-6',
   },
]

const page = () => {
  return (
    <section>
      <h1 className="text-center">The Hub For Every Dev <br/> Event You Can't Miss</h1>
      <p className="text-center mt-5">Hackathons, Meetups, and Confrences, All in One Place</p>

      <Explorebtn/>

      <div className="mt-20 space-y-7">
        <h3>Feature Events</h3>

        <ul className="events">
          {events.map((event)=>(
            <li key={event.title}>
              <Eventcard {...event}/>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default page