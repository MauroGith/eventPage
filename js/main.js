$(document).ready(function() {
    $('.toggle-menu').click(function() {
        $('header nav').slideToggle()
        $('.toggle-menu').toggleClass('fa-bars')
        $('.toggle-menu').toggleClass('fa-xmark')
    })
    
    $('.event-day').click(function() {
        $(this).next().slideToggle()
        $(this).find('i').toggleClass('fa-chevron-up')
        $(this).find('i').toggleClass('fa-chevron-down')
    })

    const setCounterHTML = ({days, hours, minutes, seconds, diff}) => {
      $('.counter').html(
        `
          <div class="counter-field">
              <span>${padZero(days)} :</span>
              <p>days</p>
          </div>
          <div class="counter-field">
              <span>${padZero(hours)} :</span>
              <p>hours</p>
          </div>
          <div class="counter-field">
              <span>${padZero(minutes)} :</span>
              <p>minutes</p>
          </div>
          <div class="counter-field">
              <span>${padZero(seconds)}</span>
              <p>seconds</p>
          </div>
        `
      );

      function padZero(number) {
        return (number < 10) ? `0${number}` : number
      }

      if (diff < 0) {
        $('.counter-box').html('<h3>Event started!</h3>')
      }
    }

    let targetDate = new Date('2023-07-26 00:00')
    function updateCountdown() {
      let currentDate = new Date()
      let diff = targetDate - currentDate
      let days = Math.floor(diff / 1000 / 60 / 60 / 24)
      let hours = Math.floor(diff / 1000 / 60 / 60) % 24
      let minutes = Math.floor(diff / 1000 / 60) % 60
      let seconds = Math.floor(diff / 1000) % 60
  
      setCounterHTML({days, hours, minutes, seconds, diff})
    }
  
    setInterval(updateCountdown, 1000);
  });
  