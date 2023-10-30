interface ClassInfo {
  name: string;
  time: string;
  instructor: string;
}

export const ScheduleList: Record<string, ClassInfo[]> = {
    monday: [
        {name: "Strength Training", time: "6:00am - 7:00am", instructor: "Charles Poliquin"},
        {name: "Boxing", time: "9:00am - 10:00am", instructor: "Dan Jackson"},
        {name: "BJJ - Gi", time: "10:00am - 11:30am", instructor: "Eddie Bravo"},
        {name: "Kickboxing", time: "6:00pm - 7:00pm", instructor: "Trevor Wittman"},
        {name: "Strength Training", time: "6:00pm - 7:00pm", instructor: "Charles Poliquin"},
        {name: "BJJ - Gi", time: "7:00pm - 8:00pm", instructor: "Eddie Bravo"},
        {name: "Wrestling", time: "7:00pm -  8:30pm", instructor: "Matt Serra"},
        {name: "Boxing", time: "7:30pm - 8:30pm", instructor: "Dan Jackson"},
        {name: "Kickboxing", time: "7:30pm - 8:45pm", instructor: "Trevor Wittman"},
        {name: "BJJ - Gi", time: "8:00pm - 9:30pm", instructor: "Eddie Bravo"},
    ],
    tuesday: [
        {name: "Strength Training", time: "6:00am - 7:00am", instructor: "Charles Poliquin"},
        {name: "Kickboxing", time: "9:00am - 10:00am", instructor: "Trevor Wittman"},
        {name: "MMA", time: "10:00am - 11:15am", instructor: "Matt Hume"},
        {name: "Kickboxing", time: "6:00pm - 7:00pm", instructor: "Trevor Wittman"},
        {name: "Strength Training", time: "6:00pm - 7:00pm", instructor: "Charles Poliquin"},
        {name: "BJJ - Gi", time: "7:00pm - 8:00pm", instructor: "Eddie Bravo"},
        {name: "Boxing", time: "7:30pm - 8:30pm", instructor: "Dan Jackson"},
        {name: "Kickboxing", time: "7:00pm - 8:45pm", instructor: "Trevor Wittman"},
        {name: "BJJ - Gi", time: "8:00pm - 9:30pm", instructor: "Eddie Bravo"},
    ],
    wednesday: [
        {name: "Strength Training", time: "6:00am - 7:00am", instructor: "Charles Poliquin"},
        {name: "BJJ - Gi", time: "10:00am - 11:30am", instructor: "Eddie Bravo"},
        {name: "Boxing", time: "6:00pm - 7:00pm", instructor: "Dan Jackson"},
        {name: "Kickboxing", time: "6:00pm - 7:00pm", instructor: "Trevor Wittman"},
        {name: "Strength Training", time: "6:00pm - 7:00pm", instructor: "Charles Poliquin"},
        {name: "BJJ - Gi", time: "7:00pm - 8:00pm", instructor: "Eddie Bravo"},
        {name: "Boxing", time: "7:30pm - 8:30pm", instructor: "Dan Jackson"},
        {name: "Kickboxing", time: "7:30pm - 8:45pm", instructor: "Trevor Wittman"},
        {name: "BJJ - No Gi", time: "8:00pm - 9:30pm", instructor: "Eddie Bravo"},
    ],
    thursday: [
        {name: "Strength Training", time: "6:00am - 7:00am", instructor: "Charles Poliquin"},
        {name: "MMA", time: "10:00am - 11:15am", instructor: "Matt Hume"},
        {name: "Kickboxing", time: "6:00pm - 7:00pm", instructor: "Trevor Wittman"},
        {name: "Strength Training", time: "6:00pm - 7:00pm", instructor: "Charles Poliquin"},
        {name: "BJJ - Gi", time: "7:00pm - 8:00pm", instructor: "Eddie Bravo"},
        {name: "Wrestling", time: "7:00pm - 8:30pm", instructor: "Matt Serra"},
        {name: "Boxing", time: "7:30pm - 8:30pm", instructor: "Dan Jackson"},
        {name: "Kickboxing", time: "7:00pm - 8:45pm", instructor: "Trevor Wittman"},
        {name: "BJJ - Gi", time: "8:00pm - 9:30pm", instructor: "Eddie Bravo"},
    ],
    friday: [
        {name: "Strength Training", time: "6:00am - 7:00am", instructor: "Charles Poliquin"},
        {name: "Kickboxing", time: "9:00am - 10:00am", instructor: "Trevor Wittman"},
        {name: "BJJ - No Gi", time: "10:00am - 11:30am", instructor: "Eddie Bravo"},
        {name: "Boxing", time: "6:30pm - 7:30pm", instructor: "Dan Jackson"},
        {name: "BJJ - Gi", time: "7:00pm - 8:00pm", instructor: "Eddie Bravo"},
        {name: "BJJ - No Gi", time: "8:00pm - 9:00pm", instructor: "Eddie Bravo"},
    ],
    saturday: [
        {name: "Strength Training", time: "9:00am - 10:00am", instructor: "Charles Poliquin"},
        {name: "BJJ - No Gi", time: "10:00am - 11:00am", instructor: "Eddie Bravo"},
        {name: "Kickboxing", time: "10:00am - 11:00am", instructor: "Trevor Wittman"},
        {name: "MMA", time: "11:30am - 12:45pm", instructor: "Matt Hume"},
        {name: "Wrestling", time: "11:30am - 1:00pm", instructor: "Matt Serra"},
    ],
}