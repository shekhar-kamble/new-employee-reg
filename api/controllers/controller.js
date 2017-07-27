'use strict';


exports.mailQuery = function(req, res) {
	var transporter = nodeMailer.createTransport({
		service : 'Gmail',
  		auth : 
  		{
    		user:'youruser@gmail.com',
    		pass:'yourpassword'
  		}
  	});
  	var citizen;
  	if(req.body.citizen){
  		citizen='Indian'
  	}
  	else{
  		citizen='non-Indian'	
  	}
  	var emailContent='<p><ul><li>Name:'+ req.body.name+'</li><li> Address:'+req.body.address+'</li><li> Zip Code:'+req.body.zip+'</li><li> Email:'+req.body.email+'</li><li> Phone:'+req.body.phone+'</li><li> Date of Birth:'+req.body.dob+'</li><li> Email:'+req.body.email+'</li><li> Employee ID:'+req.body.empId+'</li><li> Amount:'+req.body.dAmount+'</li><li>Preferred Cause:'+req.body.cause+'</li><li> Citizen:'+citizen+'</li></ul>'
  	var mailOptions = 
  	{
		from:'System <youremail@gmail.com>',
    	to: 'senderID@gmail.com',
    	subject:'New Registration',
    	html:emailContent,
  	}

  	transporter.sendMail(mailOptions, function (err, info){
    	if(err){
      		console.log(err);
      		res.redirect('/');
    	}
    	else{
      		console.log('Message send');
      		res.redirect('/');
    	}
	});
	//console.log(emailContent);
	res.setHeader('Cache-Control', 'no-cache');
    return res.redirect('/');
};
