import 'chromedriver'
import { browser, have, perform } from 'selenidejs'
import {test, afterAll} from '@jest/globals'

test("completing todo", async () => {
  await browser.open("http://todomvc.com/examples/emberjs/")
  await browser.element("#new-todo").type("a").then(perform.pressEnter)
  await browser.element("#new-todo").type("b").then(perform.pressEnter)
  await browser.element("#new-todo").type("c").then(perform.pressEnter)
  
  await browser.element("#todo-list>li:nth-of-type(2) .toggle").click()
  
  await browser.all("#todo-list>li.completed").should(have.exactTexts("b"))
  await browser.all("#todo-list>li:not(.completed)").should(have.exactTexts("a", "c"))
  await browser.all("#todo-list>li").should(have.exactTexts("a", "b", "c"))
})

afterAll(async () => {
    await browser.quit();
})