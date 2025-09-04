document.addEventListener('DOMContentLoaded', () => {
  const candles = document.querySelectorAll('.candle');

  candles.forEach(candle => {
    candle.addEventListener('click', () => {
      candle.classList.toggle('lit');
    });
  });
});
