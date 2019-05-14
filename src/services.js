export function setStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function getStorage(name) {
  try {
    return JSON.parse(localStorage.getItem(name))
  } catch (err) {
    console.log(err)
  }
}
