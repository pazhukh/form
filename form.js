	$('#myForm').on('submit', function(event){
		event.preventDefault();
		var formData = $(this).serialize();
		console.log(decodeURI(formData));
		$.ajax({
			type: 'POST',
			url: 'http://client.it-kitchen.com.ua/mukha/wp-content/themes/mukha/form.php',
			data: {'formData':formData},
			cache:false,
			response: 'text',
			success: function(data){
				console.log('server resp--- '+data);
				if(data=="done"){
					$('.formSent').fadeIn(); // показуємо повідомлення якщо форма відправлення
					$('#registerFitting').hide(); // ховаємо форму після вдалої відправки
				} else {
					alert('Sorry, error happend. Please try again or contact us manually!')
				}
			},
			error: function(xhr, status, error)
			{
				alert('An error occured.. ' + xhr.responseText + '..' + error );
			}
		});
	});
