import os
from django import forms

# from django.core.mail import send_mail

# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import sendgrid

class ContactForm(forms.Form):
    name = forms.CharField(
            required=True,
            widget=forms.TextInput(attrs={
                'placeholder': 'Name',
                'data-contact': 'name'
                })
            )
    email = forms.CharField(
            required=True,
            widget=forms.EmailInput(attrs={
                'placeholder': 'Email',
                'data-contact': 'email'
                })
            )
    message = forms.CharField(
            required=True,
            widget=forms.Textarea(attrs={
                'rows': '6',
                'placeholder': 'Message',
                'data-contact': 'message'
                })
            )
    g_recaptcha_response = forms.CharField(required=False)

    def send_email(self):
        subject         = self.cleaned_data['name']
        message         = self.cleaned_data['message']+"\n\n\n\n\n-------------------------------------\n\nPortfolio から送信\n"
        from_address    = self.cleaned_data['email']
        to_address      = [os.environ.get("PORTFOLIO_ENV_DESTINATION_CONTACT")]

        # send_mail(subject, message, from_address, to_address)

		client = sendgrid.SendGridClient(os.environ.get("PORTFOLIO_ENV_EMAIL_API_KEY"))
		message = sendgrid.Mail()

		message.add_to(to_address)
		message.set_from(from_address)
		message.set_subject(subject)
		message.set_html(message)

		client.send(message)
