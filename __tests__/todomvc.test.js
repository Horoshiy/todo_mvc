import 'chromedriver'
import { browser, have, perform } from 'selenidejs'
import {test, beforeEach, afterEach} from '@jest/globals'

beforeEach(async () => {
  await browser.open("http://todomvc.com/examples/emberjs/")
})

test("completing todo with css selectors", async () => {
  await browser.element("#new-todo").type("a").then(perform.pressEnter)
  await browser.element("#new-todo").type("b").then(perform.pressEnter)
  await browser.element("#new-todo").type("c").then(perform.pressEnter)
  
  await browser.element("#todo-list>li:nth-of-type(2) .toggle").click()
  
  await browser.all("#todo-list>li.completed").should(have.exactTexts("b"))
  await browser.all("#todo-list>li:not(.completed)").should(have.exactTexts("a", "c"))
  await browser.all("#todo-list>li").should(have.exactTexts("a", "b", "c"))
})

test("completing todo with xpath selectors", async () => {
  await browser.element("//input[@id='new-todo']").type("a").then(perform.pressEnter)
  await browser.element("//input[@id='new-todo']").type("b").then(perform.pressEnter)
  await browser.element("//input[@id='new-todo']").type("c").then(perform.pressEnter)
  
  await browser.element("//li[.//label='b']//input[@class='toggle']").click()
  
  await browser.all("//ul[@id='todo-list']/li[contains(@class,'completed')]").should(have.exactTexts("b"))
  await browser.all("//ul[@id='todo-list']/li[not(contains(@class,'completed'))]").should(have.exactTexts("a", "c"))
  await browser.all("//ul[@id='todo-list']/li").should(have.exactTexts("a", "b", "c"))
})

afterEach(async () => {
    await browser.quit();
})