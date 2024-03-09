export function selectContacts(state) {
  return state.contacts.items;
}

export function selectNameFilter(state) {
  return state.filters.name;
}
