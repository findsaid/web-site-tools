$(document).ready(function(){
	$('.menu_burger').click(function(){
        $('.menu_burger, .header_menu').toggleClass('active_menu');
        $('body').toggleClass('lock');
    });	
	$('.text').keyup(function(){
		text = $('.text').val().charCodeAt(0);
		$('.char').html(text);
	});
	oper = '';
	inptAr = '.input_area, .input_area_2'
		$('.ac').on('click', function(){
			$(inptAr).val(function(){
				return null;
			});		
		});
		$('.sqr').click(function(){
			val = $(inptAr).val();
			$('.input_boof').val(val);
		});
		$('.sqr').on('click', function(){
			$('.oper').val('sqr');
		});
		$('.sqrt').click(function(){
			val = $(inptAr).val();
			$('.input_boof').val(val);
		});
		$('.sqrt').on('click', function(){
			$('.oper').val('sqrt')		
		});
		$('.div').click(function(){
			val = $(inptAr).val();
			$('.input_boof').val(val);
		});
		$('.div').on('click', function div(div, oper){
			$(inptAr).val(null);
			$('.oper').val('/')		
		});
		$('.seven').on('click', function(){
			$(inptAr).val(function(i, val){
				return val + 7;
			});		
		});
		$('.eight').on('click', function(){		
				$(inptAr).val(function(i, val){
					return val + 8;
				});			 					
		});
		$('.nine').on('click', function(){
			$(inptAr).val(function(i, val){
				return val + 9;
			});		
		});
		$('.mult').click(function(){
			val = $(inptAr).val();
			$('.input_boof').val(val);
		});
		$('.mult').on('click', function(oper){
			$(inptAr).val(null);
			$('.oper').val('*')		
		});
		$('.four').on('click', function(){
			$(inptAr).val(function(i, val){
				return val + 4;
			});		
		});
		$('.five').on('click', function(){
			$(inptAr).val(function(i, val){
				return val + 5;
			});		
		});
		$('.six').on('click', function (){
			$(inptAr).val(function six(i, val){
				return val + 6;
			});		
		});
		$('.minus').click(function(){
			val = $(inptAr).val();
			$('.input_boof').val(val);
		});
		$('.minus').on('click', function(){
			$(inptAr).val(null);
			$('.oper').val('-')	
		});
		$('.one').on('click', function(){
			$(inptAr).val(function(i, val){
				return val + 1;
			});		
		});
		$('.two').on('click', function(){
			$(inptAr).val(function(i, val){
				return val + 2;
			});		
		});
		$('.three').on('click', function(){
			$(inptAr).val(function(i, val){
				return val + 3;
			});		
		});
		$('.plus').click(function(){
			val = $(inptAr).val();
			$('.input_boof').val(val);
		});
		$('.plus').on('click', function(){
			$(inptAr).val(null);
			$('.oper').val('+')
		});
		$('.plus-minus').on('click', function(){
			$(inptAr).val(function(i, val){
				return -val;
			});		
		});
		$('.zero').on('click', function(){
			$(inptAr).val(function(i, val){
				return val + 0;
			});
		});
		$('.dot').on('click', function(){
			val = $(inptAr).val();
			$(inptAr).val(val + '.');
		});
		$('.equal').on('click', function(equal){
			x = Number($('.input_boof').val());
			y = Number($('.input_area').val());	
			oper = $('.oper').val();		
			switch (oper){
				case 'sqr': $('.input_area').val(y**2);
				break;
				case 'sqrt': $('.input_area').val(Math.sqrt(y));
				break;
				case '/': $('.input_area').val(x/y);
				break;
				case '*': $('.input_area').val(y*x);
				break;
				case '-': $('.input_area').val(x-y);
				break;
				case '+': $('.input_area').val(y+x);
				break;
				default: $('.input_area').val('Error');
			}
		});
		$('.convert').on('click', function(){
			x = Number($('.input_area_2').val());
			selout = $('.sel-out').val();	//Select output
			selin = $('.sel-in').val();		//Select input	
			if (selin == 'h'){
				if (selout == 'h'){
					$('.input_area_1').val(x);
				} else if (selout == 'm'){
					$('.input_area_1').val(x*60);
				} else if (selout == 's'){
					$('.input_area_1').val((x*60)*60);
				} else $('.input_area_1').val('Ошибка');	
			};
			if (selin == 'm'){
				if (selout == 'h'){
					$('.input_area_1').val(x/60);
				} else if (selout == 'm'){
					$('.input_area_1').val(x);
				} else if (selout == 's'){
					$('.input_area_1').val(x*60);
				} else $('.input_area_1').val('Ошибка');
			}
			if (selin == 's'){
				if (selout == 'h'){
					$('.input_area_1').val((x/60)/60);
				} else if (selout == 'm'){
					$('.input_area_1').val(x/60);
				} else if (selout == 's'){
					$('.input_area_1').val(x);
				} else $('.input_area_1').val('Ошибка');
			}
		});
		let dec = 7;
		console.log((dec).toString(2));
});
