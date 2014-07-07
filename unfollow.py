import selenium
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException

import time
from random import randint

driver = webdriver.Firefox()

driver.get('http://www.facebook.com')
time.sleep(15)
file = open("friends.txt",'r')
i = 830
for f in file:
    print(f)
    slep = randint(1,4)
    driver.get(f)
    time.sleep(slep)
    driver.find_element_by_xpath('/html/body/div[1]/div[2]/div[1]/div/div[2]/div[2]/div[2]/div/div/div[1]/div[3]/div/div[2]/div[1]/div/div/span[2]/span[1]/span/a[2]').click()
  
    time.sleep(1)
    print(i)
    i = i+1
    
    