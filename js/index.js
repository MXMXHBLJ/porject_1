window.addEventListener('load', function(){
	var ul = document.querySelector('.navbar-right');
	var a = ul.querySelectorAll('a');
	
	for (var i = 0; i < a.length; i++){
		a[i].addEventListener('click', function(){
			a[i].className = '';
			
		})
		this.className = 'active';
			console.log('dsad');
	}
});