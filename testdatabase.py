# DB instance: database-1
# Master username: admin
# password: nccs1234
# host: database-1.cusl7vahdcap.us-east-2.rds.amazonaws.com
# port: 3306

import pymysql

db = pymysql.connect(
        host='database-1.cusl7vahdcap.us-east-2.rds.amazonaws.com', user="admin",
        password="nccs1234", port=3306
    )
cursor = db.cursor()
# print(cursor)

# sql='''create database TestDatabase'''
# cursor.execute(sql)
sql1='''use TestDatabase'''
cursor.execute(sql1)
# sql2 = '''
# create table person (
# id int not null auto_increment,
# fname text,
# lname text,
# primary key (id)
# )
# '''
# cursor.execute(sql2)

sql3 = '''
insert into person(fname, lname) values('wajahat', 'ahmed')'''
cursor.execute(sql3)
db.commit()
