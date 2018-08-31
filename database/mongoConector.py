from pymongo import MongoClient

MONGODB_URI = 'mongodb://localhost:27017/'

cliente = MongoClient(MONGODB_URI)

db = cliente.get_database('test')

acidente = db.acidente 

