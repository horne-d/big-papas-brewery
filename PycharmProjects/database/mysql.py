import MySQLdb as _mysql

db = _mysql.connect(
    db='nutrition',
    host='localhost',
    user='horned',
    passwd='password')

