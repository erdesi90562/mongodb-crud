// remove documents
// update documents
db.people.remove(
  { height: {$lt: 71} }
)
