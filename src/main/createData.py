import os

rootDir = "resources/images/"

dataPics = {}

for (dirpath, dirnames, filenames) in os.walk(rootDir):

    # Create entries for all directories of rootDir
    if dirpath == rootDir:
        dataPics = {x: {'id':x, 'baseDir':None, 'pictures':None} for x in dirnames}

    # Add files to corresponding entry
    else:
        path = dirpath.replace(rootDir, '')
        if not path.endswith('thumbs'):
            dataPics[path]['pictures'] = filenames
            dataPics[path]['baseDir'] = dirpath

print dataPics