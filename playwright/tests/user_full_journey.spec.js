import { test } from "@playwright/test"
import { v4 as uuidv4 } from "uuid"
import { LandingPage } from "../page-objects/LandingPage.js"

test('User full journey', async ({ page }) => {
  const landingPage = new LandingPage(page)
  await landingPage.visit()
  await landingPage.assertWelcome()
  
  const firstName = uuidv4()
  const lastName = uuidv4()
  const email = uuidv4() + "@example.com"
  await landingPage.registerNewUser(firstName, lastName, email)
  await landingPage.assertQuestions()
  await landingPage.backToWelcome()
  await landingPage.returnToQuestions()
  await landingPage.assertReview()
  await landingPage.answerQuestions()
  await landingPage.submitAnswers()
  await landingPage.assertComplete()
  await landingPage.takeAgain()
  await landingPage.assertWelcome()
})
