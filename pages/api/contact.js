const mailer = require('nodemailer-promise');

const nextSendMail = (req, res) => {
  const { email, name, phone, typeOption, subject, message } = req.body;
  console.log(req.body);
    
  var sendEmail = mailer.config({
    host: 'smtp.gmail.com',
    auth: {
      user: 'i9SiteContact@gmail.com',
      pass: 'i@Ka13wf9aqg2#123'
    }
  });

  const html = `
    <p>Nome: ${name}</p>
    <p>Email: ${email}</p>
    <p>Motivo do contato: ${typeOption}</p>
    <p>Telefone: ${phone}</p>
    <p>Assunto: ${subject}</p>
    <br />
    <p>Mensagem: ${message}</p>
  `;

  const mailOptions = {
    from: name + ' <' + email + '>',
    to: 'dsaantos1995@gmail.com',
    replyTo: email,
    subject,
    html
  }

  sendEmail(mailOptions)
    .then(function(info){
      // console.log(info);
      return res.status(200).send({message: 'ok'});
    })   
    .catch(function(err){
      // console.log('got error'); 
      // console.log(err)
      return res.status(200).send({message: 'not ok'});
    })
} 

module.exports = nextSendMail;