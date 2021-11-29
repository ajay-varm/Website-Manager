
from flask import Flask, app,render_template,url_for,request
import os 
import smtplib
email_address = os.environ.get('EMAIL_USER')
email_password = os.environ.get('EMAIL_PASS')
@app.route
def notify_user():
 smtp=smtplib.SMTP('smtp.gmail.com',587)

 smtp.ehlo()
 smtp.starttls()
 smtp.ehlo()
 smtp.login(email_address, email_password)

 subject = 'subject'
 body = 'body'
 msg = f'subject: {subject}\n\n{body}'

 smtp.sendmail(email_address, 'ajaybhupathiraju555@gmail.com', msg)
for i in range(1,10000):    
 try:
    r = request.get('https://ajay.com', timeout=5)
    if r.status_code != 200:
     notify_user() 
     break
 except Exception as e:
    notify_user()
    break

