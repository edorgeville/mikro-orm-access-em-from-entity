# mikro-orm-access-em-from-entity
## Trying to figure out how to access the EntityManager from an entity

### Getting started
```
npm install
npm start
```

### Console output
```
 npm start

> start
> ts-node src/index.ts

User { name: 'managed', _id: ObjectId('60f07b5f7b34156174f640b5') }
1
User { name: 'unmanaged' }

mikro-orm-access-em-from-entity\src\entities\User.ts:18       
    return await em.getRepository(User).count()
                    ^
TypeError: Cannot read property 'getRepository' of undefined
    at User.<anonymous> (mikro-orm-access-em-from-entity\src\entities\User.ts:18:21)
    at Generator.next (<anonymous>)
    at mikro-orm-access-em-from-entity\src\entities\User.ts:17:71
    at new Promise (<anonymous>)
    at __awaiter (mikro-orm-access-em-from-entity\src\entities\User.ts:13:12)
    at User.count (mikro-orm-access-em-from-entity\src\entities\User.ts:31:16)
    at mikro-orm-access-em-from-entity\src\index.ts:27:35     
    at Generator.next (<anonymous>)
    at fulfilled (mikro-orm-access-em-from-entity\src\index.ts:24:58)
    at processTicksAndRejections (node:internal/process/task_queues:94:5)
```