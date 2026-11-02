# Лабораторна робота №5
## Інтеграційне тестування компонентів та зовнішніх систем

**Виконав:** Романенко Ярослав Олександрович

**Група:** 6.1213-пі-2

**Дата:** 02.11.2026  

## 1. Component Integration Testing

### Test Object
`CartService - shop-utils`

### Scenario 1 - Discount
Test Data:
- item 1: price = 100;
- item 2: price = 200;
- discount = 10%.

Expected Result:
`270`

Actual Result:
`270`

Result:
`Pass`

### Scenario 2 - Invalid Discount
Test Data:
- item: price = 100;
- discount = 110%.

Expected Result:
`Discount must be between 0 and 100`

Actual Result:
`Discount must be between 0 and 100`

Result:
`Pass`

## 2. System Integration Testing

### Test Object
`ExternalEchoGateway - Postman Echo`

### Test Data
- orderId = `ORD-001`;
- total = `270`.

### Expected Result
```json
{
  "orderId": "ORD-001",
  "total": 270
}
```

### Actual Result
```json
{
  "orderId": "ORD-001",
  "total": 270
}
```

### Result:
`Pass`

## Висновки
У ході роботи освоєно інтеграційне тестування на двох рівнях:
1. **Component Integration:** перевірено реальну взаємодію внутрішніх модулів (`CartService` та `calculateDiscount`) без моків для позитивного сценарію та передачі помилок (Negative Test).
2. **System Integration:** реалізовано взаємодію із зовнішнім HTTP-сервісом (`Postman Echo`) через реальну мережу.

Встановлено, що результати SIT залежать від інфраструктури (Інтернет, DNS), тому падіння системного інтеграційного тесту не завжди свідчить про дефект у власному коді.
