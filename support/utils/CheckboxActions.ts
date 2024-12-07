import { Locator } from "@playwright/test";
import Log, {  } from "../../support/utils/logUtils";

export default class CheckBoxActions {
  private locator: Locator;
  private description: string;

  public setLocator(locator: Locator, description: string): CheckBoxActions {
    this.locator = locator;
    this.description = description;
    return this;
  }

  public async check() {
    Log.info(`Check ${this.description}`);
    await this.locator.check();
    return this;
  }

  /**
   * uncheck checkbox or radio button
   */
  public async uncheck() {
    Log.info(`Uncheck ${this.description}`);
    await this.locator.uncheck();
    return this;
  }

  /**
   * Returns the status of the checkbox
   * @returns
   */
  public async isChecked(): Promise<boolean> {
    Log.info(`Checking status of checkbox ${this.description}`);
    const element = this.locator;
    await element.waitFor({ state: "visible", timeout:12000});
    return await this.locator.isChecked();
  }
}
