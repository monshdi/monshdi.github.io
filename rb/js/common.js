$(function() {

	// Картинки кругом
	let num = 8; // Число картинок
	let wrap = 245; // Размер "холста" для расположения картинок
	let radius = 340; // Радиус нашего круга

	for ( i=0; i<num; i++ ){
    let f = 2 / num * i * Math.PI;  // Рассчитываем угол каждой картинки в радианах
    let left = wrap + radius * Math.sin(f) + 'px';
    let top = wrap + radius * Math.cos(f) + 'px';
    $('.advant_items img').eq(i).css({'top':top,'left':left}); // Устанавливаем значения каждой картинке
  }

});
