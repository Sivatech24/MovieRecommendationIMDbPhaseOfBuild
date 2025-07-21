import os

def generate_folder_tree(start_path, indent=0):
    """
    Recursively generates a folder structure tree, excluding the 'node_modules' folder,
    and without including the base folder path.
    :param start_path: The path of the folder to start the structure from.
    :param indent: The level of indentation for tree visualization.
    """
    # Check if the provided path is a directory
    if os.path.isdir(start_path):
        # Skip 'node_modules' folder
        if os.path.basename(start_path) == 'node_modules':
            return
        
        # Get the list of files and directories in the current folder
        items = sorted(os.listdir(start_path))
        
        for item in items:
            item_path = os.path.join(start_path, item)
            if os.path.isdir(item_path):  # If it's a folder, print folder and recurse
                print("    " * indent + f"├── {item}/")
                generate_folder_tree(item_path, indent + 1)
            else:  # If it's a file, print the file
                print("    " * indent + f"├── {item}")

# Get user input for the folder path
base_path = input("Enter the folder path to generate the structure: ")

# Call function to generate and display the folder structure
if os.path.exists(base_path):
    generate_folder_tree(base_path, indent=0)
else:
    print("The specified path does not exist.")
