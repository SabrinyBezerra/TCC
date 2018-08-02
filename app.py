from flask import Flask, Blueprint
from flask_restful import Api
from flask_cors import CORS
from resources.AcidenteResource import AcidenteResource

#Criar o servidor
app = Flask(__name__)

app.config['DEBUG'] = True

api_bp = Blueprint('api', __name__)
api = Api(api_bp, prefix='/api')

#Resources
api.add_resource(AcidenteResource, '/acidente')

app.register_blueprint(api_bp)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

if __name__ == '__main__':
    app.run()
#app.run(host='0.0.0.0')