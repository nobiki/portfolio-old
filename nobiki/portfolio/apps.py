import os
from django.apps import AppConfig


class PortfolioConfig(AppConfig):
    title = "Naoaki Obiki"
    name = "Portfolio"

    env = os.environ.get('DOCKER_ENV')

    if env == "development":
        ws = "ws.9zilla.local"
    elif env == "production":
        ws = "ws.portfolio.oji.0j0.jp"
