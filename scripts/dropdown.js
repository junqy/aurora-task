window.addEventListener('load', function() {
    document.addEventListener('click', function(event) {
      document.querySelectorAll('.dropdown-content').forEach(function(el) {
        if (el !== event.target) el.classList.remove('show')
      });
      if (event.target.matches('.dropbtn')) {
        event.target.closest('.dropdown').querySelector('.dropdown-content').classList.toggle('show')
      }
    })
  })