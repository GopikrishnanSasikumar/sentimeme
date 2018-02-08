import csv
from ghee.action import action_train, action_predict
training_data = []
with open('negative_processed.csv', 'r') as f:
    reader = csv.reader(f)

    for row in reader:
        k = {}
        k["sentence"] = row[0]
        k["intent"] = "neg"
        training_data.append(k)

with open('positive_processed.csv', 'r') as f:
    reader = csv.reader(f)
    for row in reader:
        k = {}
        k["sentence"] = row[0]
        k["intent"] = "pos"
        training_data.append(k)
action_train(training_data, 3000, 'senti')
print(action_predict("this is awesome", 'senti'))

