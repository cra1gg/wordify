import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import requests

cred = credentials.Certificate("firebasecreds.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://wordify-4eccd.firebaseio.com/"
})

ref = db.reference('/words')
snapshot = ref.order_by_key().limit_to_first(1).get()
res = list(snapshot.keys())[0] 
ref2 = db.reference('/words/' + str(res))
ref2.delete()
