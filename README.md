# 05 Module 5: Work Day Scheduler

## Description

This project is the fourth challenge from the U of A coding bootcamp. It is a simple app that saves daily events to local storage and loads them on the screen even if the page has been closed or reloaded. The colors of the text areas change depending on whether the time block is in the past, present, or future. In this project, I utilized Bootstrap to style the time blocks and JQuery for most of the coding in the script.js document. Condital statements, loops, and event listeners are some of the other coding methods I used to dynamically change the color of the textarea depending on the time, save data to local storage, and load data from local storage. 

Through the process of writing this code, I really appreciated how much simpler writing JQuery was compared to vanilla JavaScript. Seeing as JQuery is not utlized as much as it used to be, I'm motivated to look at other options that would help me simplify the process of writing JavaScript. On the other hand, though Bootstrap really simplifies some CSS tools like Grid, it also makes the HTML look cluttered and hard to read. So I will look at ways to simplify using Bootstrap in my future code.  While the code originally used the Moments.js API for dates and time, I decided to use Day.js instead for two reasons. First, while Moment.js seems still commonly used, it has the potentional to slow down some web applications due to it's size and mutability. Second, I wanted to challenge myself to read documentation on a different API, understand it, and implement it in my code.

Deployed Website: [Work Day Scheduler](https://ggorosave.github.io/Work_Scheduler/

![Work Day Scheduler](./assets/Work%20Day%20Scheduler.png)

## Credits

I used the following APIs to help me build this project:
- [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
- [JQuery](https://api.jquery.com/)
- [Day.js](https://day.js.org/en/)

## License

Licensed under the [MIT](https://github.com/ggorosave/M5-Challenge/blob/main/LICENSE) license.