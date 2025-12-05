





import pandas as pd

#print("version of pandas is: ",pd.__version__)



#ser = pd.Series([1,2,3],index=['a','b','c'])
#print(ser)


df = {
    'name':['a','b','c'],
    'marks':[12,13,14],
    'age':[27,28,29]
}

#print(df)

df = pd.read_csv('./test.csv')

#print(df)

print(pd.options.display.max_columns)

json_data = pd.read_json('./test.json')
#print(json_data)
#print(json_data.head())


#print(df)
#df = df.dropna()
#print(df)


df.loc[3,'age'] = 78

#print(df)




# matplotlib example

import matplotlib.pyplot as plt
import numpy as np

a = np.array([1,2,3,4,5,6])
b = np.array([1,2,3,4,5,6])

#plt.plot(a,b,color='r')


#plt.title("helth report")
#plt.xlabel("Average Pulse")
#plt.ylabel("Calorie Burnage")
#plt.grid(axis='y')
#plt.show()



my_lst = []

for i in a:
    if i < 3:
        my_lst.append("red")
    else:
        my_lst.append('green')

print(my_lst)

# bar chart
#plt.bar(a,b,color=my_lst,width=0.5)
#plt.title("helth report")
#plt.xlabel("Average Pulse")
#plt.ylabel("Calorie Burnage")

#plt.show()

plt.pie(a)

plt.show()












