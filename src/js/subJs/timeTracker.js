const counterYear = document.getElementById("counterYear");
const counterMonth = document.getElementById("counterMonth");
const counterWeek = document.getElementById("counterWeek");
const counterDay = document.getElementById("counterDay");
const unixTracker = document.getElementById("unixTracker");
const btnAnniversary = document.getElementById("btnAnniversary");
const btnBirthday = document.getElementById("btnBirthday");
const timerTitle = document.getElementById("timerTitle");

var setDate = [
  { date: "May 2, 2019 7:05:00", title: "Anniversary" },
  { date: "November 19, 2002 0:00:00", title: "Maria Katherine's Birthday" },
  { date: "May 7, 2002 0:00:00", title: "Nicko's Birthday" },
];
let currentDateIndex = 0;

var startDate = new Date(setDate[currentDateIndex].date);

export function calculateTimeDifference() {
  const now = new Date();
  const timeDifference = now - startDate;

  // Calculate years, months, days
  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * 30.44)
  );
  const days = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );

  // Calculate weeks more accurately
  const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const daysInYears = years * 365 + Math.floor(years / 4); // Approximate leap years
  const weeks = Math.floor((totalDays - daysInYears) / 7);

  // Update the display
  counterYear.innerHTML = years;
  counterMonth.innerHTML = months;
  counterWeek.innerHTML = weeks;
  counterDay.innerHTML = days;
  unixTracker.innerHTML = now.getTime();

  timerTitle.textContent = setDate[currentDateIndex].title;
}

// Function to change the current date
btnBirthday.addEventListener("click", () => {
  currentDateIndex =
    ((currentDateIndex - 1 + setDate.length) % (setDate.length - 1)) + 1; // Cycle within 1 and 2
  startDate = new Date(setDate[currentDateIndex].date);
  calculateTimeDifference();
});

btnAnniversary.addEventListener("click", () => {
  currentDateIndex = 0; // Set to the index of the anniversary date
  startDate = new Date(setDate[currentDateIndex].date);
  calculateTimeDifference();
});

// Update the display every second
setInterval(calculateTimeDifference, 1000);
