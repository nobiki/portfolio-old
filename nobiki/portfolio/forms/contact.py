from django import forms

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
