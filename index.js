
        document.addEventListener('DOMContentLoaded', () => {
        const clockDiv = document.querySelector('#clock');
        const timer = () => {
        const now = new Date();
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const markup = `
        <span>${hour < 10 ? '0' + hour : hour}</span> :
        <span>${minutes < 10 ? '0' + minutes : minutes}</span> :
        <span>${seconds < 10 ? '0' + seconds : seconds}</span>
        <span>${hour >= 12 ? 'PM' : 'AM'}</span>`;
        clockDiv.innerHTML = markup;
 }
 setInterval(() => {
 timer();
 }, 1000)
  
 });
    
  