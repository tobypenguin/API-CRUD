# API-CRUD
> This project is API-CRUD by Express
## Checklist
- [x] Set up env docker compose
- [x] Setup project
- [x] Implement clean architecture
- [x] Database schema
- [x] CRUD account
- [x] Queue for CUD account
- [x] Docker file
- [x] validate field for create & update
- [x] redis
## Local Development
```python
# Start required containers
# - rabbitmq for queue
# - api-crud for mongo
# - redis
npm i
npm run dev
```
## Database schema
> Use ODM mongoose

id: ObjectId

firstname: string

lastname: string

nick name: string

phone: string (xxx-xxx-xxxx)

age: int

birth date: string (YYYY-MM-DD)

created date: date

updated date: date

### Example
```json
{
    "_id": "6400757d1711c386ab3c0106",
    "firstName": "To",
    "lastName": "by",
    "nickName": "toby",
    "phone": "095-123-1234",
    "age": 22,
    "birthDate": "2000-12-20",
    "createdAt": "2023-03-02T10:07:57.939Z",
    "updatedAt": "2023-03-02T10:07:57.939Z",
    "__v": 0
}
```
