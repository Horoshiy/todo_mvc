import 'chromedriver'
import { browser, have, perform } from 'selenidejs'
import {test, afterAll} from '@jest/globals'

test("completing todo", async () => {
  await browser.open("http://todomvc.com/examples/emberjs/")
  await browser.element("//*[@id='new-todo']").type("a").then(perform.pressEnter)
  await browser.element("//*[@id='new-todo']").type("b").then(perform.pressEnter)
  await browser.element("//*[@id='new-todo']").type("c").then(perform.pressEnter)
  
  await browser.element("//*[@id='todo-list']/*[.//text()='b']//*[contains(concat(' ', @class, ' '), ' toggle ')]").click()
  
  await browser.all("//*[@id='todo-list']/*[contains(concat(' ', @class, ' '), ' completed ')]").should(have.exactTexts("b"))
  await browser.all("//*[@id='todo-list']/*[not(contains(concat(' ', @class, ' '), ' completed '))]").should(have.exactTexts("a", "c"))
  await browser.all("//*[@id='todo-list']/*").should(have.exactTexts("a", "b", "c"))
})

afterAll(async () => {
    await browser.quit();
})