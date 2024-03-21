# import dateTime
# print(datetime.datetime)

from datetime import datetime

current_date = datetime.now()

print(current_date)

print(datetime.now().strftime("%Y/%m/%d, %H:%M:%S"))