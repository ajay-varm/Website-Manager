from flask import Flask, render_template,url_for,request
import os
import smtplib
email_address = os.environ.get('EMAIL_USER')
email_password = os.environ.get('EMAIL_PASS')

app = Flask(__name__)
@app.route('/')
@app.route ('/dist')

def dist():
    return render_template("welcome.html")



if __name__ =="__main__":
    app.run(debug=True,port=5000)