// update documents
db.people.update(
  { given_name: 55 },
  {
    $set: {weight: 'wicked fucking heavy guy!'}
  },
  {multi: true}
)
