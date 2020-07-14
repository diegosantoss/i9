const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

const mailer = require('nodemailer-promise');

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.post('/api/contact',  (req, res) => {
    const { email, name, phone, subject, message } = req.body;
    
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
      <p>Telefone: ${phone}</p>
      <p>Assunto: ${subject}</p>
      <br />
      <p>Mensagem: ${message}</p>
    `;

    const mailOptions = {
      from: `${name} <${email}>`,
      to: 'dsaantos1995@gmail.com',
      replyTo: email,
      subject,
      html
    }

    sendEmail(mailOptions)
      .then(function(info){
        // console.log(info);
        return res.send({message: 'ok'});
      })   
      .catch(function(err){
        // console.log('got error'); 
        // console.log(err)
        return res.send({message: 'not ok'});
      })
    
    
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000')
  })
})