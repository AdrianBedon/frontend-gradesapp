import os
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

class WebDriverSingleton:
    _instance = None

    @classmethod
    def get_driver(cls):
        chrome_options = Options()
        chrome_options.add_argument("--headless=new")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--disable-popup-blocking")
        chrome_options.add_argument("--start-maximized")

        try:
            service = Service(ChromeDriverManager().install())
            driver = webdriver.Chrome(service=service, options=chrome_options)
            return driver
        except Exception as e:
            print(f"Error al iniciar WebDriver: {e}")
            return None

    @classmethod
    def close_driver(cls, driver):
        if driver:
            driver.quit()

def run_selenium_tests():
    driver = WebDriverSingleton.get_driver()
    if not driver:
        raise Exception("Error iniciando WebDriver")

    try:
        driver.get("http://localhost:3000/frontend-gradesapp")
        assert "Grades App" in driver.title, "Título de la página no coincide"
        print("Prueba de título exitosa!!!")
    finally:
        WebDriverSingleton.close_driver(driver)
        print("Todas las pruebas de Selenium finalizaron correctamente!!!")

if __name__ == "__main__":
    run_selenium_tests()
