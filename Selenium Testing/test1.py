from selenium import webdriver
import time

driver=webdriver.Chrome(executable_path="C:\\Users\\Sumedha\\Downloads\\chromedriver_win32\\chromedriver.exe")
driver.maximize_window()

driver.get('http://localhost:3000/login-form-08/index')    

time.sleep(1.5)
driver.find_element("xpath", '//*[@id="username"]').send_keys("admin")
time.sleep(1.5)
driver.find_element("xpath", '//*[@id="password"]').send_keys("admin123")
time.sleep(1.5)
driver.find_element("xpath", '/html/body/div/div/div/div[2]/div/div/form/input').click()
time.sleep(1.5)
driver.find_element("xpath", '//*[@id="dogName"]').send_keys("Cooper")
time.sleep(1.5)
driver.find_element("xpath", '//*[@id="dogAge"]').send_keys("4")
time.sleep(1.5)
driver.find_element("xpath", '//*[@id="dogDescription"]').send_keys("Cooper is a Labrador.")
time.sleep(1.5)
driver.find_element("xpath", '//*[@id="dogStatus"]').send_keys("Available")
time.sleep(1.5)
driver.find_element("xpath", '//*[@id="insertBtn"]').click()
time.sleep(3)

time.sleep(1000)