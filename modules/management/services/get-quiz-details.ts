import moment from "moment/moment";

type QuizDetails = {
    startedDate: moment,
    nextQuizDate: moment
}

type QuizStats = {
    key: string, value: string
}

type QuizPeople = {
    team: number,
    users: number
}

type QuizOverallStats = {
    details: QuizDetails,
    stats: QuizStats[],
    people: QuizPeople
}

export const mockedQuizDetails: QuizOverallStats = {
    details: {
        nextQuizDate: moment('2025-06-27'),
        startedDate: moment('2022-11-11')
    },
    people: {
        team: 4,
        users: 153
    },
    stats: [
        {key: 'Total Days', value: "792"},
        {key: 'Total Income', value: "$ 2,400"},
        {key: 'Total Quizzers', value: "1,343"},
        {key: 'Total Quizzes', value: "27"},
        {key: 'Best Team Overall', value: "Pablo"},
    ]
}
