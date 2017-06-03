import os
from django import forms
from django.core.mail import send_mail

class ContactForm(forms.Form):
    name = forms.CharField(
            required=True,
            widget=forms.TextInput(attrs={
                'placeholder': 'Name'
                })
            )
    email = forms.CharField(
            required=True,
            widget=forms.EmailInput(attrs={
                'placeholder': 'Email'
                })
            )
    message = forms.CharField(
            required=True,
            widget=forms.Textarea(attrs={
                'rows': '6',
                'placeholder': 'Message'
                })
            )

    def send_email(self):
        subject         = self.cleaned_data['name']
        message         = self.cleaned_data['message']
        from_address    = self.cleaned_data['email']
        to_address      = [os.environ.get("PORTFOLIO_ENV_DESTINATION_CONTACT")]

        send_mail(subject, message, from_address, to_address)
