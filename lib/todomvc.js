class TodoMvc {
    checkItemXPathLocator = "//*[@id='todo-list']/li[.//text()='b']//*[contains(concat(' ', normalize-space(@class), ' '), ' toggle ')]";
    completedItemXPathLocator = "//*[@id='todo-list']/li[contains(concat(' ', normalize-space(@class), ' '), ' completed ')]";
    unCompletedItemXPathLocator = "//*[@id='todo-list']/li[not(contains(concat(' ', normalize-space(@class), ' '), ' completed '))]"
}

export const todoMvc = new TodoMvc()