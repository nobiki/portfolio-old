import os
from portfolio.apps import PortfolioConfig
from portfolio.forms import ContactForm

from django.views.generic import TemplateView
from django.views.generic.edit import FormView

class IndexView(FormView):

    template_name = "top/index.html"
    form_class = ContactForm
    success_url = '/memo/'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["name"] = PortfolioConfig.name
        context["title"] = PortfolioConfig.title
        context["contact_form"] = ContactForm
        return context

    def form_valid(self, form, **kwargs):
        context = self.get_context_data(**kwargs)
        context['contact_form'] = form
        # context[show_results] = True
        return super(IndexView,self).form_valid(form)
        # return self.render_to_response(context)
