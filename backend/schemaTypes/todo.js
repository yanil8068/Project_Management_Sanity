import {defineField, defineType} from 'sanity'

export const todo = defineType({
  name: 'todo',
  title: 'Todo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'title',
    }),
  ],
})
