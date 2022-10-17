from flask import Flask, request, jsonify, redirect, url_for
import urllib.request, json
from flask_cors import CORS, cross_origin

api = Flask(__name__)
CORS(api, support_credentials=True)

@api.route('/search', methods = ["POST", "GET"])
@cross_origin(supports_credentials=True)
def test():
    url = "https://health.gov/myhealthfinder/api/v3/topicsearch.json?keyword="
    data = request.data.decode('UTF-8')
    new_data = data.replace("\"", "")
    final = url + new_data
    return final
    

if __name__ == '__main__':
    api.run(host='0.0.0.0', port=8000, debug=True)