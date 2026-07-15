import os

files_to_fix = [
    "faq.html",
    "nosotros.html",
    "servicios.html",
    "login.html",
    "legales.html",
    "dashboard.html",
    "contacto.html",
    "index.head.html" # just in case
]

for filename in files_to_fix:
    if not os.path.exists(filename):
        continue
    
    with open(filename, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()
        
    out_lines = []
    state = 0 # 0=normal, 1=in HEAD, 2=in incoming
    
    for line in lines:
        if line.startswith("<<<<<<< HEAD"):
            state = 1
            continue
        elif line.startswith("======="):
            state = 2
            continue
        elif line.startswith(">>>>>>>"):
            state = 0
            continue
            
        if state == 0 or state == 1:
            out_lines.append(line)
            
    with open(filename, 'w', encoding='utf-8') as f:
        f.writelines(out_lines)
        
print("Fixed conflicts in HTML files.")
