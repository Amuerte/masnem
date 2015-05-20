import os

imgDir = "resources/images/"

"""
for dirname in os.listdir(imgDir):
    for filename in os.listdir(imgDir + dirname):
        print filename
"""

for (dirpath, dirnames, filenames) in os.walk(imgDir):
    for filename in filenames:
        print dirpath + '/' + filename