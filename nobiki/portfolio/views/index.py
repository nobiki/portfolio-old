import os
import json
import urllib.request

from portfolio.apps import PortfolioConfig
from portfolio.forms import ContactForm

from django.views.generic import TemplateView
from django.views.generic.edit import FormView
from django.http import JsonResponse

class AjaxableResponseMixin(object):

    def form_invalid(self, form):
        response = super(AjaxableResponseMixin, self).form_invalid(form)
        if self.request.is_ajax():
            return JsonResponse(form.errors, status=400)
        else:
            return response

    # ContactForm (Ajax Handling)
    def form_valid(self, form):
        # print(form.cleaned_data)
        response = super(AjaxableResponseMixin, self).form_valid(form)

        if True == self.recaptcha_valid(form.cleaned_data["g_recaptcha_response"]):
            recaptcha = True
            form.send_email()
        else:
            recaptcha = False

        if self.request.is_ajax():
            data = {
                "recaptcha": recaptcha,
            }
            return JsonResponse(data)
        else:
            return response

    def recaptcha_valid(self, g_recaptcha_response):

        verify_url = PortfolioConfig.recaptcha["verify_url"]+"?secret="+PortfolioConfig.recaptcha["secret_key"]+"&response="+g_recaptcha_response

        with urllib.request.urlopen(verify_url) as res:
            res_json = res.read().decode("utf-8")
            res_dict = json.loads(res_json)

        return res_dict["success"]

class IndexView(AjaxableResponseMixin, FormView):

    template_name = "top/index.html"
    form_class = ContactForm
    success_url = '/'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["name"] = PortfolioConfig.name
        context["title"] = PortfolioConfig.title
        context["ws"] = PortfolioConfig.ws
        context["recaptcha"] = PortfolioConfig.recaptcha
        context["contact_form"] = ContactForm
        return context

    # ContactForm
    def form_valid(self, form, **kwargs):
        return super(IndexView,self).form_valid(form)

