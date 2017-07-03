import os
from django.apps import AppConfig


class PortfolioConfig(AppConfig):
    title = "Naoaki Obiki"
    name = "Portfolio"

    recaptcha = {
        "site_key": "6LecuScUAAAAALN69kO8LhmY81qvHbCKkWFqAgVw",
        "secret_key": os.environ.get("PORTFOLIO_ENV_RECAPTCHA_SECRET_KEY"),
    }

    env = os.environ.get('DOCKER_ENV')

    if env == "development":
        ws = "ws.portfolio.9zilla.local"
    elif env == "production":
        ws = "ws.portfolio.oji.0j0.jp"
