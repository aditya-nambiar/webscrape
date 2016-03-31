

f = open('rajhans.html')

from bs4 import BeautifulSoup

def match_class(target):                                                        
    def do_match(tag):                                                          
        classes = tag.get('class', [])                                          
        return all(c in classes for c in target)                                
    return do_match  


soup = BeautifulSoup(f, "html.parser")
matches = soup.findAll(match_class(["fsl", "fwb", "fcb"]))
i = 0
for m in matches:
	if m.find('a'):
		print(m.find('a').contents[0])




