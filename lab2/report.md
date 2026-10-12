# Лабораторна робота №2
**Тема:** Проєктування тестів. Checklist, Test Cases та Decision Table  
**Виконав:** Романенко Ярослав, група 6.1213-пі-2  


## Test Object
* **URL:** https://www.saucedemo.com/
* **Функціональність:** Форма авторизації


## Test Conditions
* **TCND-01** - Успішна авторизація валідного користувача;
* **TCND-02** - Авторизація з неправильним Username;
* **TCND-03** - Авторизація з неправильним Password;
* **TCND-04** - Авторизація з порожнім Username;
* **TCND-05** - Авторизація з порожнім Password;
* **TCND-06** - Авторизація заблокованого користувача.


## Checklist
- [x] Успішна авторизація з валідними даними.
- [x] Відмова в авторизації з неправильним Username.
- [x] Відмова в авторизації з неправильним Password.
- [x] Перевірка порожнього Username.
- [x] Перевірка порожнього Password.
- [x] Відмова в авторизації заблокованого користувача.


## Test Cases

### TC-LOGIN-01 - Успішна авторизація standard_user
* **Type:** Positive
* **Preconditions:**
  1. Відкрита сторінка Login SauceDemo (https://www.saucedemo.com/).
  2. Користувач не авторизований.
* **Test Data:**
  * Username: `standard_user`
  * Password: `secret_sauce`
* **Steps:**
  1. У поле "Username" ввести `standard_user`.
  2. У поле "Password" ввести `secret_sauce`.
  3. Натиснути кнопку "Login".
* **Expected Result:** Після введення `standard_user` і правильного пароля та натискання Login користувач успішно авторизується і переходить на сторінку Products (`/inventory.html`).
* **Actual Result:** Після введення `standard_user` і правильного пароля та натискання Login відкрилася сторінка Products (`/inventory.html`).
* **Result:** Pass


### TC-LOGIN-02 - Авторизація з неправильним Password
* **Type:** Negative
* **Preconditions:**
  1. Відкрита сторінка Login SauceDemo (https://www.saucedemo.com/).
  2. Користувач не авторизований.
* **Test Data:**
  * Username: `standard_user`
  * Password: `wrong_password`
* **Steps:**
  1. У поле "Username" ввести `standard_user`.
  2. У поле "Password" ввести `wrong_password`.
  3. Натиснути кнопку "Login".
* **Expected Result:** Авторизація відхилена, користувач залишається на сторінці входу, відображається повідомлення про помилку: `Epic sadface: Username and password do not match any user in this service`.
* **Actual Result:** Авторизація відхилена, користувач залишився на сторінці входу, з'явилося повідомлення: `Epic sadface: Username and password do not match any user in this service`.
* **Result:** Pass


### TC-LOGIN-03 - Авторизація заблокованого користувача
* **Type:** Negative
* **Preconditions:**
  1. Відкрита сторінка Login SauceDemo (https://www.saucedemo.com/).
  2. Користувач не авторизований.
* **Test Data:**
  * Username: `locked_out_user`
  * Password: `secret_sauce`
* **Steps:**
  1. У поле "Username" ввести `locked_out_user`.
  2. У поле "Password" ввести `secret_sauce`.
  3. Натиснути кнопку "Login".
* **Expected Result:** Авторизація відхилена, користувач залишається на сторінці входу, відображається повідомлення про помилку: `Epic sadface: Sorry, this user has been locked out`.
* **Actual Result:** Авторизація відхилена, користувач залишився на сторінці входу, з'явилося повідомлення: `Epic sadface: Sorry, this user has been locked out`.
* **Result:** Pass


## Decision Table

| Умови / Дії | R1 | R2 | R3 | R4 | R5 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Username входить до списку допустимих?** | T | T | F | T | F |
| **Password правильний?** | T | T | T | F | F |
| **Користувач заблокований?** | F | T | - | - | - |
| **A1: Products (/inventory.html)** | **X** | | | | |
| **A2: Locked message** | | **X** | | | |
| **A3: Invalid credentials message** | | | **X** | **X** | **X** |


### Аналіз покриття тест-кейсами:
* **R1** покривається тест-кейсом: `TC-LOGIN-01`
* **R2** покривається тест-кейсом: `TC-LOGIN-03`
* **R4** покривається тест-кейсом: `TC-LOGIN-02`
* **Правила, які залишилися без окремого Test Case:** 
  * **R3** (невалідний Username + валідний Password);
  * **R5** (невалідний Username + невалідний Password). 


## Результати виконання

| Test Case | Type | Result |
| :--- | :--- | :--- |
| TC-LOGIN-01 | Positive | Pass |
| TC-LOGIN-02 | Negative | Pass |
| TC-LOGIN-03 | Negative | Pass |

## Висновок
Під час виконання лабораторної роботи було освоєно процес переходу від вимог до умов тестування, чек-листа та детальних тест-кейсів. Застосовано техніку проєктування тестів Decision Table, яка допомогла структуризувати комбінації облікових даних і виявити непокриті сценарії. Усі три створені тест-кейси були виконані на сайті SauceDemo з результатом **Pass**.
