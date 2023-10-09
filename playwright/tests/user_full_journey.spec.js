import { test } from "@playwright/test"
import { v4 as uuidv4 } from "uuid"
import { LandingPage } from "../page-objects/LandingPage.js"

test('user full journey', async ({ page }) => {
  const landingPage = new LandingPage(page)
  await landingPage.visit()
  const firstName = uuidv4()
  const lastName = uuidv4()
  const email = uuidv4() + "@example.com"
  await landingPage.registerNewUser(firstName, lastName, email)
  await page.pause()
})
