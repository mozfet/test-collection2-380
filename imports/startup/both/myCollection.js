import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'
import { Tracker } from 'meteor/tracker'

SimpleSchema.extendOptions(['autoform'])

const myCollectionSchema = new SimpleSchema({
  myField: String
}, {tracker: Tracker})

MyCollection = new Mongo.Collection('myCollection')
MyCollection.attachSchema(myCollectionSchema)
