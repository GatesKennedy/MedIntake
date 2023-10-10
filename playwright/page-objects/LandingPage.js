import { expect } from '@playwright/test'

export class LandingPage {
  constructor(page) {
    this.page = page

    this.progressBar = page.getByRole('progressbar')
    this.subHeader = page.locator('[data-test-id="form-identity-heading"]')
    this.firstNameInput = page.getByPlaceholder('First name')
    this.lastNameInput = page.getByPlaceholder('Last name')
    this.emailInput = page.getByLabel('Email address*')
    this.nextButton = page.getByRole('button', { name: 'Next' })
    this.websiteLink = page.getByRole('link', { name: 'GatesKennedy.com' })
    this.backButton = page.getByRole('button', { name: 'Back' })
    this.reviewButton = page.getByRole('button', { name: 'Review' })

    this.question1 = page.locator('.chakra-switch__track').first()
    this.question2 = page.locator('div:nth-child(4) > .chakra-form-control > .chakra-switch > .chakra-switch__track')
    this.question3 = page.locator('div:nth-child(6) > .chakra-form-control > .chakra-switch > .chakra-switch__track')
    this.question4 = page.locator('div:nth-child(8) > .chakra-form-control > .chakra-switch > .chakra-switch__track')
    this.question5 = page.locator('div:nth-child(10) > .chakra-form-control > .chakra-switch > .chakra-switch__track')
    this.question6 = page.locator('div:nth-child(12) > .chakra-form-control > .chakra-switch > .chakra-switch__track')
    this.question7 = page.locator('div:nth-child(14) > .chakra-form-control > .chakra-switch > .chakra-switch__track')
    this.question8 = page.locator('div:nth-child(16) > .chakra-form-control > .chakra-switch > .chakra-switch__track')
    this.question9 = page.locator('div:nth-child(18) > .chakra-form-control > .chakra-switch > .chakra-switch__track')
    this.question10 = page.locator('div:nth-child(20) > .chakra-form-control > .chakra-switch > .chakra-switch__track')

    this.submitButton = page.getByRole('button', { name: 'Submit' })
    this.takeAgainButton = page.getByRole('button', { name: 'Take Again' })
  }

  visit = async () => {
    await this.page.goto("/")
  }

  assertWelcome = async () => {
    await this.subHeader.waitFor()
    const welcomeMessage = await this.subHeader.innerText()
    expect(await this.subHeader.innerText()).toBe(welcomeMessage)
  }
  
  assertQuestions = async () => {
    await this.subHeader.waitFor()
    const questionsMessage = await this.subHeader.innerText()
    expect(await this.subHeader.innerText()).toBe(questionsMessage)
  }

  registerNewUser = async (firstName, lastName, email) => {
    await this.firstNameInput.waitFor()
    await this.firstNameInput.fill(firstName)
    await this.lastNameInput.waitFor()
    await this.lastNameInput.fill(lastName)
    await this.emailInput.waitFor()
    await this.emailInput.fill(email)
    await this.nextButton.waitFor()
    await this.nextButton.click()
  }

  backToWelcome = async () => {
    await this.backButton.waitFor()
    await this.backButton.click()
    await this.subHeader.waitFor()
    const welcomeMessage = await this.subHeader.innerText()
    expect(await this.subHeader.innerText()).toBe(welcomeMessage)
  }

  returnToQuestions = async () => {
    await this.nextButton.waitFor()
    await this.nextButton.click()
    await this.subHeader.waitFor()
    const questionsMessage = await this.subHeader.innerText()
    expect(await this.subHeader.innerText()).toBe(questionsMessage)
  }

  answerQuestions = async () => {
    await this.question1.waitFor()
    await this.question1.check()
    expect(await this.question1.isChecked()).toBeTruthy()
    await this.question2.waitFor()
    await this.question2.check()
    expect(await this.question2.isChecked()).toBeTruthy()
    await this.question3.waitFor()
    await this.question3.check()
    expect(await this.question3.isChecked()).toBeTruthy()
    await this.question4.waitFor()
    await this.question4.check()
    expect(await this.question4.isChecked()).toBeTruthy()
    await this.question5.waitFor()
    await this.question5.check()
    expect(await this.question5.isChecked()).toBeTruthy()
    await this.question6.waitFor()
    await this.question6.check()
    expect(await this.question6.isChecked()).toBeTruthy()
    await this.question7.waitFor()
    await this.question7.check()
    expect(await this.question7.isChecked()).toBeTruthy()
    await this.question8.waitFor()
    await this.question8.check()
    expect(await this.question8.isChecked()).toBeTruthy()
    await this.question9.waitFor()
    await this.question9.check()
    expect(await this.question9.isChecked()).toBeTruthy()
    await this.question10.waitFor()
    await this.question10.check()
    expect(await this.question10.isChecked()).toBeTruthy()
    await this.reviewButton.waitFor()
    await this.reviewButton.click()
  }

  assertReview = async () => {
    await this.subHeader.waitFor()
    const reviewMessage = await this.subHeader.innerText()
    expect(await this.subHeader.innerText()).toBe(reviewMessage)
  }

  submitAnswers = async () => {
    await this.submitButton.waitFor()
    await this.submitButton.click()
  }

  assertComplete = async () => {
    await this.subHeader.waitFor()
    const completeMessage = await this.subHeader.innerText()
    expect(await this.subHeader.innerText()).toBe(completeMessage)
  }

  takeAgain = async () => {
    await this.takeAgainButton.waitFor()
    await this.takeAgainButton.click()
  }
}
