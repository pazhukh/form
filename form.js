$('#myForm').on('submit', function(event){
		event.preventDefault();
		var formData = $(this).serialize();
		console.log(decodeURI(formData));

		//check the validate form for brauser wich not support required
		var req = $(this).find("[required]");
		$(req).each(function(){
			//if form not ok => alert message
			if ( $(this).val() == '' ){	
				alert("Обовязково заповніть всі поля");
				event.preventDefault();
				return false;
				//if form ok => send to server
			} else {
				$.ajax({
					type: 'POST',
					url: 'http://client.it-kitchen.com.ua/mukha/wp-content/themes/mukha/form.php',
					data: {'formData':formData},
					cache:false,
					response: 'text',
					success: function(data){
						console.log('server resp--- '+data);
						if(data=="done"){
							$('.formSent').fadeIn(); //show success message
							$('#registerFitting').hide(); //hide form
						} else {
							alert('Sorry, error happend. Please try again or contact us manually!');
						}
					},
					error: function(xhr, status, error)
					{
						alert('An error occured.. ' + xhr.responseText + '..' + error );
					}
				});
			}
		});
	});
