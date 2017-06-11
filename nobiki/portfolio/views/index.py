import os
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
        response = super(AjaxableResponseMixin, self).form_valid(form)

        if self.request.is_ajax():
            data = {
                    "name": "hoge",
                    }
            return JsonResponse(data)
        else:
            return response

class IndexView(AjaxableResponseMixin, FormView):

    template_name = "top/index.html"
    form_class = ContactForm
    success_url = '/'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["name"] = PortfolioConfig.name
        context["title"] = PortfolioConfig.title
        context["ws"] = PortfolioConfig.ws
        context["contact_form"] = ContactForm
        return context

    # ContactForm
    def form_valid(self, form, **kwargs):

        form.send_email()

        return super(IndexView,self).form_valid(form)
