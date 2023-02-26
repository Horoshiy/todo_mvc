export function elemByText(elem, text) {
  return `${elem}[.//text()='${text}']`;
}

export function elemContainClass(elem, className) {
  return `${elem}[contains(concat(' ', normalize-space(@class), ' '), ' ${className} ')]`;
}

export function elemNotContainClass(elem, className) {
  return `${elem}[not(contains(concat(' ', normalize-space(@class), ' '), ' ${className} '))]`;
}
