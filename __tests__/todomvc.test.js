import 'chromedriver'
import { browser, by, be, have, perform } from 'selenidejs'
import {test, afterAll} from '@jest/globals'

test('add todos on TodoMVC page', async () => {
  await browser.open('http://todomvc.com/examples/emberjs/')

  await browser.element('#new-todo').type('a').then(perform.pressEnter)
  await browser.element('#new-todo').type('b').then(perform.pressEnter)
  await browser.element('#new-todo').type('c').then(perform.pressEnter)

  await browser.all('#todo-list>li').should(have.exactTexts('a', 'b', 'c'))

  await browser.element('#todo-list>li:nth-child(2) .toggle').click()

  await browser.all('#todo-list>li.completed').should(have.exactTexts('b'))

  await browser.all('#todo-list>li:not(.completed)').should(have.exactTexts('a', 'c'))
})

afterAll(async () => {
    await browser.quit();
})