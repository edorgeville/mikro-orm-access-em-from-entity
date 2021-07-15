
import { MikroORM } from '@mikro-orm/core'
import { MongoDriver } from '@mikro-orm/mongodb'
import * as entities from './entities'

const entrypoint = async () => {
  const orm = await MikroORM.init<MongoDriver>({
    entities: Object.values(entities),
    dbName: 'main',
    type: 'mongo',
    implicitTransactions: false,
    forceEntityConstructor: true
  })

  const UserRepository = orm.em.getRepository(entities.User)

  // create a user and persist it
  await UserRepository.persistAndFlush(new entities.User('managed'))
  // fetch the user, user is managed
  const managedUser = await UserRepository.findOne({ name: 'managed' })
  console.log(managedUser)
  console.log(await managedUser.count())
  
  // create another user, don't persist it
  const unmanagedUser = new entities.User('unmanaged')
  console.log(unmanagedUser)
  console.log(await unmanagedUser.count())

}

entrypoint()