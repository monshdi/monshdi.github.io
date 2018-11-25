let stepOneHead = document.querySelectorAll('.step_choose')[0],
	stepTwoHead = document.querySelectorAll('.step_choose')[1],
	stepThreeHead = document.querySelectorAll('.step_choose')[2],
	inputName = document.getElementsByName('user_name')[0],
	inputLastName = document.getElementsByName('user_lastname')[0],
	inputCity = document.getElementsByName('user_city')[0],
	inputEmail = document.getElementsByName('email')[0],
	inputPhone = document.getElementsByName('tel')[0],
	stepOneBtn = document.querySelectorAll('.step_button')[0],
	stepTwoBtn = document.querySelectorAll('.step_button')[1],
	stepThreeBtn = document.querySelectorAll('.step_button')[2],
	stepOne = document.getElementById('step1'),
	stepTwo = document.getElementById('step2'),
	stepThree = document.getElementById('step3');

// Шаг 1

stepOneBtn.style.display = 'none';

inputName.addEventListener('input', function(){
	if (inputName.value.length > 0) {
		stepOneBtn.style.display = 'inline-block'
	} else {
		stepOneBtn.style.display = 'none'
	}
});

stepOneBtn.addEventListener('click', function(){
	stepTwo.classList.add('active'),
	stepOne.classList.remove('active'),
	stepOneHead.classList.remove('active_nav'),
	stepTwoHead.classList.add('active_nav')
});

// Шаг 2

stepTwoBtn.addEventListener('click', function(){
	stepThree.classList.add('active'),
	stepTwo.classList.remove('active'),
	stepTwoHead.classList.remove('active_nav'),
	stepThreeHead.classList.add('active_nav')
});

// Шаг 3
function btnOn(){
	if (inputPhone.value != '' || inputEmail.value != '') {
		stepThreeBtn.removeAttribute('disabled')
	} else {
		stepThreeBtn.setAttribute("disabled", "disabled")
	};

};

stepThree.addEventListener('input', btnOn);




