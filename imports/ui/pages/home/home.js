// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import SimpleSchema from 'simpl-schema'
import './home.html'

// define schema
const schema = new SimpleSchema({
  myField: String
}, {tracker: Tracker})

// on created
Template.App_home.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.App_home.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.App_home.helpers({
  schema() {
    return schema
  }
})

// events
Template.App_home.events({

  //on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.App_home.onDestroyed(() => {
  const instance = Template.instance()
})
