
from flask import Flask, jsonify
import pickle
from flask import request
# import libraries
import numpy as np
import pandas as pd
import json
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, confusion_matrix, roc_curve, roc_auc_score, classification_report, f1_score
from sklearn.linear_model import LogisticRegression

app = Flask(__name__)


dummy_cols =['Gender','Married','Education','Self_Employed','Property_Area','Dependents']
needed_cols = ['Gender', 'Married', 'Dependents', 'Education', 'Self_Employed',
       'ApplicantIncome', 'LoanAmount', 'Loan_Amount_Term', 'Credit_History',
       'Property_Area']


# load the models
MODEL = pd.read_pickle("./LOG.pkl")
ENCODER = pd.read_pickle("./ENCODER.pkl")
SCALER = pd.read_pickle("./Scaler.pkl")

def perfom_analysis(sample_input, the_model, the_scaler, the_one_enc):
    new_data = pd.DataFrame(sample_input.values()).T
    new_data.columns = needed_cols
    converted =pd.DataFrame(the_one_enc.transform(new_data[dummy_cols]).toarray(), columns=the_one_enc.get_feature_names_out())
    final_input = pd.concat([converted, new_data.drop(dummy_cols, axis=1)], axis=1)
    scaled_final_input = the_scaler.transform(final_input)
    predicted = the_model.predict_proba(scaled_final_input)[0]
    risky = "low risk" if 1 else "high risk"
    return {"label":str(predicted.argmax()), "SCORE":str(predicted.max()*100), "desc":risky}



@app.route("/", methods=["POST","GET"])
def index():
    if request.method =="POST":
        try:
            #get data if they are send from json format
            all_data = request.get_json(force=True)
        except Exception as e:
            #form data
            all_data =request.form.to_dict(flat=True)


        #get each data
        Gender= all_data.get("Gender", None)
        Married = all_data.get("Married", None)
        Dependents = all_data.get("Dependents", None)
        Education = all_data.get("Education", None)
        Self_Employed = all_data.get("Self_Employed", None)
        ApplicantIncome = all_data.get("ApplicantIncome", None)
        LoanAmount = all_data.get("LoanAmount", None)
        Loan_Amount_Term = all_data.get("Loan_Amount_Term", None)
        Credit_History = all_data.get("Credit_History", None)
        Property_Area = all_data.get("Property_Area", None)



        #getr data as var
        all_vars = [Gender,Married,Dependents,Education,Self_Employed,ApplicantIncome,LoanAmount,Loan_Amount_Term,Credit_History,Property_Area]
        all_vars_name = needed_cols
        print("Daata is " ,all_vars)
        if None in all_vars or "" in all_vars:
            return jsonify({"status":False, "desc":"Invalid data format"})
        else:
            try:
                #all_vars = [float(x) for x in all_vars if x in ['ApplicantIncome', "LoanAmount", "Loan_Amount_Term","Credit_History"]]
                var = dict(zip(all_vars_name,all_vars))
                print("To check", var)
                #get results
                res = perfom_analysis(var, MODEL, SCALER, ENCODER)
                print("RESULTS   ",  res)
                return jsonify(res)

            except Exception as e:
                return jsonify({"status":True, "desc":f"Exception Raised as {e}"})
    else:
        return  jsonify({"status":True, "desc":f"Get method passed"})

if __name__ =="__main__":
    app.run(debug=True)
