from re import A
from flask import Flask, request, jsonify
import random


generator = Flask(__name__)

@generator.route('/getmove', methods = ['POST', 'GET'])
def get_move():
    req_data = request.get_json()
    array = req_data['board']
    our_number = random.choice(array)
    if request.method == "GET":
        if our_number in array:
            array.remove(our_number)
            new_array = array
            print(new_array)
            req_data['array'] = new_array
            return jsonify(new_array)
    else:
        print(req_data)
        return req_data

if __name__ == '__main__':
    generator.run(debug=True)