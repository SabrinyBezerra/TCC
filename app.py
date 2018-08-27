from flask import Flask, Blueprint
from flask_restful import Api
from flask_cors import CORS
from resources.UF_Resource import UF_Acidente
from resources.BR_Resource import BR_Acidente
from resources.DiaSemana_Resource import DiaSemana

#Criar o servidor
app = Flask(__name__)

app.config['DEBUG'] = True

api_bp = Blueprint('api', __name__)
api = Api(api_bp, prefix='/api')

#Resources
api.add_resource(UF_Acidente, '/UF')
api.add_resource(BR_Acidente, '/BR')
api.add_resource(DiaSemana, '/dia')

app.register_blueprint(api_bp)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

if __name__ == '__main__':
    app.run()
#app.run(host='0.0.0.0')


