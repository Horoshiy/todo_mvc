function hasClassName(value) {
  return `contains(concat(' ', normalize-space(@class), ' '), ' ${value} ')`;
}

function hasNotClassName(value) {
  return `not(${hasClassName(value)})`;
}

export default { hasClassName, hasNotClassName }