import update from 'immutability-helper'

update.extend('$arr', (value, arr) => update(arr || [], value))
update.extend('$obj', (value, obj) => update(obj || {}, value))
