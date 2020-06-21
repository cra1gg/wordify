from firebase import firebase

firebase = firebase.FirebaseApplication("https://wordify-4eccd.firebaseio.com/", None)
data = {
    'Name': 'Parwiz Forogh',
    'Email': 'par@gmail.com',
    'Phone': '44707904449'
}

result = firebase.post('testing/james', data)
print(result)
