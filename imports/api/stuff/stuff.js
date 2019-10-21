import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';
/* eslint-disable object-shorthand */
export const Stuff = new Mongo.Collection('Stuff');

//Define Bulk Delete Method
Meteor.methods({
  'eits.bulk_delete'(ids) {
    if (!Meteor.user()){
      return new Meteor.Error('Not Authorised');
    }
    check(ids, Array);
    Stuff.remove({ _id: { $in: ids } });
  },
});
/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  name: {
    label: 'Full Name',
    type: String,
    optional: true,
    max: 30,
    autoform: {
      group: 'Stuff',
      placeholder: 'Firstname Lastname',
    },
  },
  age: {
    label: 'Age',
    type: Number,
    optional: true,
    autoform: {
      group: 'Stuff',
      placeholder: '23',
    },
  },
  country: {
    label: 'Country',
    type: String,
    optional: true,
    autoform: {
      group: 'Stuff',
      placeholder: 'Nigeria',
    },
  },
});
Stuff.attachSchema(StuffSchema);
