from flask_restful import Resource, marshal_with, abort
from database.mongoConector import acidente
from util.jsonEncode import *

class AcidenteResource(Resource):

    # GET Acidentes
    def get(self):
        primeiroAcidente = acidente.find_one() #consulta
        primeiroAcidente["_id"] = JSONEncoder().default(primeiroAcidente["_id"])
        return primeiroAcidente
