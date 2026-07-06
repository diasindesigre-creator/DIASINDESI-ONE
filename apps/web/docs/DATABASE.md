# DIASINDESI ONE Database

## Users
- id
- username
- password
- role
- active

---

## Customers
- id
- fullname
- phone
- email
- city
- address
- notes

---

## Devices
- id
- customerId
- category
- brand
- model
- serialNumber

---

## Repairs
- id
- customerId
- deviceId
- problem
- diagnosis
- status
- cost
- technician
- createdAt

---

## Repair Photos
- id
- repairId
- filename

---

## Products
- id
- barcode
- name
- category
- price
- stock

---

## Categories
- id
- name

---

## Suppliers
- id
- company
- phone
- email

---

## Sales
- id
- customerId
- total
- paymentMethod
- createdAt

---

## Sale Items
- id
- saleId
- productId
- quantity
- price

---

## Settings
- Company Name
- VAT
- Logo
- Email
- Phone