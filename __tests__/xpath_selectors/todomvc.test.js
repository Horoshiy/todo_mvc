import 'chromedriver'
import { browser, have, perform } from 'selenidejs'
import {test, afterEach} from '@jest/globals'
import { elemByText, elemContainClass, elemNotContainClass } from '../../lib/helpers.js'


test("completing todo", async () => {
  
  await browser.open("http://todomvc.com/examples/emberjs/")
  await browser.element("//*[@id='new-todo']").type("a").then(perform.pressEnter)
  await browser.element("//*[@id='new-todo']").type("b").then(perform.pressEnter)
  await browser.element("//*[@id='new-todo']").type("c").then(perform.pressEnter)
  
  await browser.element(`//*[@id='todo-list']/${elemByText('li', 'b')}//${elemContainClass('*', 'toggle')}`).click()
  
  await browser.all(`//*[@id='todo-list']/${elemContainClass('li', 'completed')}`).should(have.exactTexts("b"))
  await browser.all(`//*[@id='todo-list']/${elemNotContainClass('li', 'completed')}`).should(have.exactTexts("a", "c"))
  await browser.all("//*[@id='todo-list']/li").should(have.exactTexts("a", "b", "c"))
})

afterEach(async () => {
    await browser.quit();
})