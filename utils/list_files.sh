#!/bin/bash

# Specify the directory you want to iterate
directory="../images/residence_photos"

# Check if the directory exists
if [ -d "$directory" ]; then
  # Loop through the files in the directory
  for file in "$directory"/*; do
    # Check if it is a file (and not a directory)
    if [ -f "$file" ]; then
      # Print the file name
      echo "$(basename "$file")"
    fi
  done
else
  echo "Directory $directory does not exist."
fi
