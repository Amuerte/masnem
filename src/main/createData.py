import os

imgDir = "resources/images/"

"""
for dirname in os.listdir(imgDir):
    for filename in os.listdir(imgDir + dirname):
        print filename

{'pictures': {'pictures': ['pic1', 'pic2'], 'baseDir': 'toto', 'id': 'test'}}
"""
dataPics = {}
for (dirpath, dirnames, filenames) in os.walk(imgDir):
    for directory in dirnames:
        dataPics[directory] = {'id':directory, 'baseDir':dirpath, 'pictures' : filenames}
    #for path in dirpath:

print dataPics