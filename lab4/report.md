# Лабораторна робота №4
## Тестування HTTP API за допомогою Postman

**Виконав:** Романенко Ярослав  
**Група:** 6.1213-пі-2  
**Дата:** 25.10.2026  

## Test Object
Postman Echo. Base URL: `https://postman-echo.com`

## Collection
`Lab 4 - API Testing`. Collection Variable: `baseUrl = https://postman-echo.com`

## Загальний результат
| Request | Tests | Passed | Failed |
| :--- | :--- | :--- | :--- |
| GET with Params | 4 | 4 | 0 |
| POST JSON | 5 | 5 | 0 |
| Negative - 404 | 2 | 2 | 0 |
| **Усього** | **11** | **11** | **0** |

## Висновок
Опановано тестування HTTP API у Postman із використанням змінних колекції та автоматизованих перевірок pm.test() і pm.expect(). Усі 11 створених позитивних і негативних автотестів для запитів GET, POST та статус-коду 404 успішно виконані з результатом PASSED.