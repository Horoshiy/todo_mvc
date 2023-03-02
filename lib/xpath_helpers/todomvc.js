function hasClassName(className) {
  return `contains(concat(' ', normalize-space(@class), ' '), ' ${className} ')`;
}

function hasNotClassName(className) {
  return `not(contains(concat(' ', normalize-space(@class), ' '), ' ${className} '))`;
}

export {hasClassName, hasNotClassName}