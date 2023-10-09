export class LandingPage {
  constructor(page) {
    this.page = page

    this.progressBar = page.getByRole('progressbar')
    this.firstNameInput = page.getByPlaceholder('First name')
    this.lastNameInput = page.getByPlaceholder('Last name')
    this.emailInput = page.getByLabel('Email address*')
    this.nextButton = page.getByRole('button', { name: 'Next' })
    this.websiteLink = page.getByRole('link', { name: 'GatesKennedy.com' })
    this.backButton = page.getByRole('button', { name: 'Back' })
    this.welcomeSubHeader = page.getByRole('heading', { name: 'Welcome' })
    this.questionsSubHeader = page.getByRole('heading', { name: 'Questions' })
  }

  visit = async () => {
    await this.page.goto("/")
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

  goBack = async () => {
    await this.backButton.waitFor()
    await this.backButton.click()
  }
}