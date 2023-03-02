import 'chromedriver'
import { browser, have, perform } from 'selenidejs'
import {test, afterEach} from '@jest/globals'
import xpath from '../../lib/helpers/xpath.js'

test("completing todo", async () => {
  
  await browser.open("http://todomvc.com/examples/emberjs/")
  await browser.element("//*[@id='new-todo']").type("a").then(perform.pressEnter)
  await browser.element("//*[@id='new-todo']").type("b").then(perform.pressEnter)
  await browser.element("//*[@id='new-todo']").type("c").then(perform.pressEnter)
  
  await browser.element(`//*[@id='todo-list']/li[.//text()="b" ]//*[${xpath.hasClassName('toggle')}]`).click()
  
  await browser.all(`//*[@id='todo-list']/li[${xpath.hasClassName('completed')}]`).should(have.exactTexts("b"))
  await browser.all(`//*[@id='todo-list']/li[${xpath.hasNotClassName('completed')}]`).should(have.exactTexts("a", "c"))
  await browser.all("//*[@id='todo-list']/li").should(have.exactTexts("a", "b", "c"))
})

afterEach(async () => {
    await browser.quit();
})