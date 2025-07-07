const clock = document.getElementById('clock');
const date = document.getElementById('date');
const week = document.getElementById('week');
const changeBg = document.getElementById('change-bg');

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

days.forEach(day => {
    const div = document.createElement('div');
    div.className = 'text-center text-sm border rounded shadow p-1';
    div.innerText = day;
    week.appendChild(div);
})

const updateClock = () => {
    const d = new Date();
    const hours = d.getHours();
    const convertedHours = hours % 12 || 12;
    const realHours = convertedHours.toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const seconds = d.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    clock.innerText = `${realHours}:${minutes}:${seconds} ${ampm}`;
    const dt = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleString('default', { month: 'long' });
    const year = d.getFullYear();
    date.innerText = `${month} ${dt}, ${year}`;
    week.children[d.getDay()].classList.add('bg-blue-500', 'text-white', 'font-bold');
}

updateClock();
setInterval(updateClock, 1000);

const changeColor = () => {
    const hexNumber = "0123456789abcdef";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
        newColor += hexNumber[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = newColor;
}
changeColor();
changeBg.addEventListener('click', changeColor);