# This is a sample Python script.
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd
from time import sleep
from datetime import date
import re

from concurrent.futures import ThreadPoolExecutor
from concurrent.futures import as_completed

# To Save a list to csv
import csv

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
global container, df
headers = ['created_date', 'job_title', 'company', 'salary', 'address', 'time', 'link_description', 'JD']
df = pd.DataFrame(columns=headers)
container = []


def print_hi(name):
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.quit()
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press Ctrl+F8 to toggle the breakpoint.


def parse(url):
    driver = webdriver.Chrome()

    driver.get(url)
    driver.implicitly_wait(1)

    soup = BeautifulSoup(driver.page_source, 'lxml')
    data_boxes = soup.find_all('div', class_='body')
    for box in data_boxes:
        created_date = date.today()
        job_title = box.find('span', {'data-container': 'body'}).get_text().strip()
        company = box.find('a', class_='company').get_text().strip()
        salary = box.find('label', class_='title-salary').get_text().strip()
        address = box.find('label', class_='address').get('data-original-title').replace("<p style='text-align: left'>",
                                                                                         '').replace("</p>",
                                                                                                     '').replace(
            "<br/>", ': ').strip()
        time = box.find('label', class_='time').get_text().strip()

        # get the first link contains "JobSearchList_LinkDetail" (using re)
        link_description = box.select('a[href*=JobSearchList_LinkDetail]')[0].get('href')
        JD = parse_jd(link_description)
        print("JD" ,JD)
        list_to_csv(container)
        container.append([created_date, job_title, company, salary, address, time, link_description,JD])
        list_to_csv(container)

    driver.close()
    return container


def list_to_csv(list_in_list):
    headers = ['created_date', 'job_title', 'company', 'salary', 'address', 'time', 'link_description', 'JD']
    with open('data.csv', 'w', encoding="utf-8", newline='') as f:
        write = csv.writer(f)
        write.writerow(headers)
        write.writerows(list_in_list)


def get_data_in_parallel(page_count):
    links = [f"https://www.topcv.vn/viec-lam-it?page={i}" for i in range(1, page_count)]

    bigger_container = []

    # Change number of workers here ^^
    # with ThreadPoolExecutor(max_workers=10) as executor:
    #     future_results = [executor.submit(parse, url) for url in links]
    #     for future in future_results:
    #         # print(future.result())
    #         bigger_container.append(future.result())
    #
    #     executor.shutdown()
    for link in links:
        print("result :", parse(link))
    print("data bigger container :", bigger_container)
    # list_to_csv(bigger_container)


def parse_jd(url):
    driver = webdriver.Chrome()

    driver.get(url)
    driver.implicitly_wait(1)

    soup = BeautifulSoup(driver.page_source, 'lxml')
    jd = soup.find_all('div', class_='job-description__item--content')
    jd_list = []
    for item in jd:
        job_title = item.find('p')
        if job_title is not None:
            jd_list.append(job_title.get_text().strip())
    driver.close()
    return jd_list


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print(parse("https://www.topcv.vn/viec-lam-it?page=1"))


# See PyCharm help at https://www.jetbrains.com/help/pycharm/
