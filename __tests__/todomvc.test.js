import 'chromedriver'
import { browser, by, be, have, perform } from 'selenidejs'
import {test, afterAll} from '@jest/globals'

test('add todos on TodoMVC page', async () => {
  // open TodoMVC page
  await browser.open('http://todomvc.com/examples/emberjs/')

  // add todos: a, b, c
  await browser.element('#new-todo').type('a').then(perform.pressEnter)
  await browser.element('#new-todo').type('b').then(perform.pressEnter)
  await browser.element('#new-todo').type('c').then(perform.pressEnter)

  // todos should be a, b, c
  await browser.all('#todo-list>li').should(have.exactTexts('a', 'b', 'c'))

  // toggle b
  await browser.all('#todo-list>li').elementBy(have.exactText('b')).element('.toggle').click()

  // completed todos should be b
  await browser.element('#todo-list>li.completed').should(have.exactText('b'))

  // active todos should be a, c
  await browser.all('#todo-list>li:not(.completed)').should(have.exactTexts('a', 'c'))
})

afterAll(async () => {
    await browser.quit();
})