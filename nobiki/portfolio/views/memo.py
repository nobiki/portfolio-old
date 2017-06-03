import os
from portfolio.apps import PortfolioConfig

from django.views.generic import TemplateView

class MemoView(TemplateView):

    template_name = "top/memo.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context
