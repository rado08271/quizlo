import moment from "moment";
import {QuizStatus} from "./get-quiz-events";

type Address = {
    placeholder: string,
    street?: string,
    city?: string,
    zipCode?: string,
    streetNumber?: string,
    country?: string
}

export type EventDetail = {
    id: string,
    place: Address,
    eventName: string,
    quizDate: moment,
    spots: number,
    participants: number,
    status: QuizStatus
    imageUrl: string
    description: string
    winner: string
}

export const eventDetail: EventDetail = {
    id: "8",
    eventName: "Quiz at the place",
    description: `
### Ready to get quizzical? Here's the lowdown:

Mark your calendars for **Friday, June 27, 2025**, because the brain games kick off sharp at **7:00 PM** (that's **19:00** for the super-smart among us). We're taking over the magnificent **Bar at the Skies**, so you can ponder perplexing questions while enjoying, well, the sky!

Rally your dream team, but keep it tight – we're talking a **maximum of 6** brainiacs per squad. And for a **mere 5 euros per person**, you'll get your chance at glory (and probably a good laugh at your friends' terrible guesses). So, start cramming those random facts, because your moment in the trivia spotlight awaits!

We are looking forward to meeting you, and your teams!
`,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA63P4tjKZRoI3J0mSyWAlWbQtc9Ma7_aAuQHOvNQYylDThwZ5qsvkfiwr4-tH9Od8T093H6-lAQEFg0JX6RN6MIo0Uon8DFLc3PJCjXnRvr-IJjx4O_UULy9UyCT-MyHQoHZ2o-4UrKM-B7LramGwJUYr1XRx-OWaS3eqCeXlBGfPC0WHdHy3BC_R8dJyAZhkJhEIcAMCKLfRZzrQpGpfllsr1CtIL19EpXFEBRtyiALW-huwzj45hiRCcKMSiI7bbTBmHou11_UHa",
    participants: 72,
    spots: 12,
    place: {
        placeholder: "Bar place at the place"
    },
    quizDate: moment("27.06.2025;19:00", "DD.MM.YYYY;HH:mm"),
    status: "active",
    winner: "TImely team"
}