import moment from "moment/moment";

export type QuizStatus = "passed" | "planned" | "active" | "cancelled"

export type QuizItem = {
    id: string,
    quizName: string,
    quizDate?: moment,
    spots?: number,
    status: QuizStatus
    imageUrl: string
}

export const mockedQuizzes: QuizItem[] = [
    {
        id: "1",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA63P4tjKZRoI3J0mSyWAlWbQtc9Ma7_aAuQHOvNQYylDThwZ5qsvkfiwr4-tH9Od8T093H6-lAQEFg0JX6RN6MIo0Uon8DFLc3PJCjXnRvr-IJjx4O_UULy9UyCT-MyHQoHZ2o-4UrKM-B7LramGwJUYr1XRx-OWaS3eqCeXlBGfPC0WHdHy3BC_R8dJyAZhkJhEIcAMCKLfRZzrQpGpfllsr1CtIL19EpXFEBRtyiALW-huwzj45hiRCcKMSiI7bbTBmHou11_UHa",
        quizName: "Pub Quiz at Place1 with a very well known common theme of long words phobia known as Hippopotomonstrosesquippedaliophobia",
        status: "active",
        quizDate: moment('01.01.2026', 'DD-MM-YYYY')
    },
    {
        id: "2",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA63P4tjKZRoI3J0mSyWAlWbQtc9Ma7_aAuQHOvNQYylDThwZ5qsvkfiwr4-tH9Od8T093H6-lAQEFg0JX6RN6MIo0Uon8DFLc3PJCjXnRvr-IJjx4O_UULy9UyCT-MyHQoHZ2o-4UrKM-B7LramGwJUYr1XRx-OWaS3eqCeXlBGfPC0WHdHy3BC_R8dJyAZhkJhEIcAMCKLfRZzrQpGpfllsr1CtIL19EpXFEBRtyiALW-huwzj45hiRCcKMSiI7bbTBmHou11_UHa",
        quizName: "Pub Quiz at Place2",
        status: "planned",
        quizDate: moment('01.10.2025', 'DD-MM-YYYY')
    },
    {
        id: "3",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA63P4tjKZRoI3J0mSyWAlWbQtc9Ma7_aAuQHOvNQYylDThwZ5qsvkfiwr4-tH9Od8T093H6-lAQEFg0JX6RN6MIo0Uon8DFLc3PJCjXnRvr-IJjx4O_UULy9UyCT-MyHQoHZ2o-4UrKM-B7LramGwJUYr1XRx-OWaS3eqCeXlBGfPC0WHdHy3BC_R8dJyAZhkJhEIcAMCKLfRZzrQpGpfllsr1CtIL19EpXFEBRtyiALW-huwzj45hiRCcKMSiI7bbTBmHou11_UHa",
        quizName: "Pub Quiz 12",
        status: "planned",
        quizDate: moment('21.10.2025', 'DD-MM-YYYY')
    },
    {
        id: "4",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA63P4tjKZRoI3J0mSyWAlWbQtc9Ma7_aAuQHOvNQYylDThwZ5qsvkfiwr4-tH9Od8T093H6-lAQEFg0JX6RN6MIo0Uon8DFLc3PJCjXnRvr-IJjx4O_UULy9UyCT-MyHQoHZ2o-4UrKM-B7LramGwJUYr1XRx-OWaS3eqCeXlBGfPC0WHdHy3BC_R8dJyAZhkJhEIcAMCKLfRZzrQpGpfllsr1CtIL19EpXFEBRtyiALW-huwzj45hiRCcKMSiI7bbTBmHou11_UHa",
        quizName: "Pub Quiz 13",
        status: "planned",
        quizDate: moment('20.11.2025', 'DD-MM-YYYY')
    },
    {
        id: "4",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA63P4tjKZRoI3J0mSyWAlWbQtc9Ma7_aAuQHOvNQYylDThwZ5qsvkfiwr4-tH9Od8T093H6-lAQEFg0JX6RN6MIo0Uon8DFLc3PJCjXnRvr-IJjx4O_UULy9UyCT-MyHQoHZ2o-4UrKM-B7LramGwJUYr1XRx-OWaS3eqCeXlBGfPC0WHdHy3BC_R8dJyAZhkJhEIcAMCKLfRZzrQpGpfllsr1CtIL19EpXFEBRtyiALW-huwzj45hiRCcKMSiI7bbTBmHou11_UHa",
        quizName: "Pub Quiz 1",
        status: "passed",
        quizDate: moment('01.11.2023', 'DD-MM-YYYY')
    },
    {
        id: "5",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA63P4tjKZRoI3J0mSyWAlWbQtc9Ma7_aAuQHOvNQYylDThwZ5qsvkfiwr4-tH9Od8T093H6-lAQEFg0JX6RN6MIo0Uon8DFLc3PJCjXnRvr-IJjx4O_UULy9UyCT-MyHQoHZ2o-4UrKM-B7LramGwJUYr1XRx-OWaS3eqCeXlBGfPC0WHdHy3BC_R8dJyAZhkJhEIcAMCKLfRZzrQpGpfllsr1CtIL19EpXFEBRtyiALW-huwzj45hiRCcKMSiI7bbTBmHou11_UHa",
        quizName: "Pub Quiz 2",
        status: "passed",
        quizDate: moment('01.12.2023', 'DD-MM-YYYY')
    },
    {
        id: "6",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA63P4tjKZRoI3J0mSyWAlWbQtc9Ma7_aAuQHOvNQYylDThwZ5qsvkfiwr4-tH9Od8T093H6-lAQEFg0JX6RN6MIo0Uon8DFLc3PJCjXnRvr-IJjx4O_UULy9UyCT-MyHQoHZ2o-4UrKM-B7LramGwJUYr1XRx-OWaS3eqCeXlBGfPC0WHdHy3BC_R8dJyAZhkJhEIcAMCKLfRZzrQpGpfllsr1CtIL19EpXFEBRtyiALW-huwzj45hiRCcKMSiI7bbTBmHou11_UHa",
        quizName: "Pub Quiz 3",
        status: "passed",
        quizDate: moment('01.01.2025', 'DD-MM-YYYY')
    },
    {
        id: "7",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA63P4tjKZRoI3J0mSyWAlWbQtc9Ma7_aAuQHOvNQYylDThwZ5qsvkfiwr4-tH9Od8T093H6-lAQEFg0JX6RN6MIo0Uon8DFLc3PJCjXnRvr-IJjx4O_UULy9UyCT-MyHQoHZ2o-4UrKM-B7LramGwJUYr1XRx-OWaS3eqCeXlBGfPC0WHdHy3BC_R8dJyAZhkJhEIcAMCKLfRZzrQpGpfllsr1CtIL19EpXFEBRtyiALW-huwzj45hiRCcKMSiI7bbTBmHou11_UHa",
        quizName: "Pub Quiz 4",
        status: "passed",
        quizDate: moment('26.02.2024', 'DD-MM-YYYY')
    },
    {
        id: "8",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA63P4tjKZRoI3J0mSyWAlWbQtc9Ma7_aAuQHOvNQYylDThwZ5qsvkfiwr4-tH9Od8T093H6-lAQEFg0JX6RN6MIo0Uon8DFLc3PJCjXnRvr-IJjx4O_UULy9UyCT-MyHQoHZ2o-4UrKM-B7LramGwJUYr1XRx-OWaS3eqCeXlBGfPC0WHdHy3BC_R8dJyAZhkJhEIcAMCKLfRZzrQpGpfllsr1CtIL19EpXFEBRtyiALW-huwzj45hiRCcKMSiI7bbTBmHou11_UHa",
        quizName: "Pub Quiz 5",
        status: "passed",
        quizDate: moment('21.04.2025', 'DD-MM-YYYY')

    },
    {
        id: "9",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA63P4tjKZRoI3J0mSyWAlWbQtc9Ma7_aAuQHOvNQYylDThwZ5qsvkfiwr4-tH9Od8T093H6-lAQEFg0JX6RN6MIo0Uon8DFLc3PJCjXnRvr-IJjx4O_UULy9UyCT-MyHQoHZ2o-4UrKM-B7LramGwJUYr1XRx-OWaS3eqCeXlBGfPC0WHdHy3BC_R8dJyAZhkJhEIcAMCKLfRZzrQpGpfllsr1CtIL19EpXFEBRtyiALW-huwzj45hiRCcKMSiI7bbTBmHou11_UHa",
        quizName: "Pub Quiz 6",
        status: "active",
        quizDate: moment('27.06.2025', 'DD-MM-YYYY')

    },
    {
        id: "10",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA63P4tjKZRoI3J0mSyWAlWbQtc9Ma7_aAuQHOvNQYylDThwZ5qsvkfiwr4-tH9Od8T093H6-lAQEFg0JX6RN6MIo0Uon8DFLc3PJCjXnRvr-IJjx4O_UULy9UyCT-MyHQoHZ2o-4UrKM-B7LramGwJUYr1XRx-OWaS3eqCeXlBGfPC0WHdHy3BC_R8dJyAZhkJhEIcAMCKLfRZzrQpGpfllsr1CtIL19EpXFEBRtyiALW-huwzj45hiRCcKMSiI7bbTBmHou11_UHa",
        quizName: "Pub Quiz 8",
        status: "cancelled",
        quizDate: moment('01.01.2043', 'DD-MM-YYYY')
    }
]
