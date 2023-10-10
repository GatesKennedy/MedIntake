import { test } from "@playwright/test"
import { v4 as uuidv4 } from "uuid"
import { MainPage } from "../page-objects/MainPage.js"

test('User full journey', async ({ page }) => {
  const mainPage = new MainPage(page)
  await mainPage.visit()
  await mainPage.assertWelcome()
  
  const firstName = uuidv4()
  const lastName = uuidv4()
  const email = uuidv4() + "@example.com"
  await mainPage.registerNewUser(firstName, lastName, email)
  await mainPage.assertQuestions()
  await mainPage.backToWelcome()
  await mainPage.returnToQuestions()
  await mainPage.assertReview()
  await mainPage.answerQuestions()
  await mainPage.submitAnswers()
  await mainPage.assertComplete()
  await mainPage.takeAgain()
  await mainPage.assertWelcome()
})
