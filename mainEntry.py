# coding:utf8

from common import logger
import sys, os
from entry import frameui

# 和 cx_freeze 这个库有关。这是一个用于在 windows 下将程序打包成 exe 的库，会将一个变量 frozen 注入到 sys 中。
# application_path = ''
application_path = os.getcwd()
# application_path = application_path[:application_path.rfind('/')]
print(application_path)
logger.init(application_path)
# logger.init(application_path)
frameui.run(application_path)
