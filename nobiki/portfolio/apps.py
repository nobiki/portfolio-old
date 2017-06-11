import os
from django.apps import AppConfig


class PortfolioConfig(AppConfig):
    env = os.environ.get('DOCKER_ENV')

    title = "Naoaki Obiki"
    name = "Portfolio"
