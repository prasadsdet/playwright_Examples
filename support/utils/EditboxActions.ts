import { Locator } from "@playwright/test";
import Log from "../../support/utils/logUtils";
import UIElementActions from "./UIElementActions";

export default class EditBoxActions extends UIElementActions {
  description: any;
  /**
   * Sets the selector with description
   * @param selector
   * @param description
   * @returns
   */
  public setEditBox(selector: string, description: string): EditBoxActions {
    this.setElement(selector, description);
    return this;
  }
    setElement(_selector: string, _description: string) {
        throw new Error("Method not implemented.");
    }

  /**
   * Sets the locator with description
   * @param locator
   * @returns
   */
  public setLocator(locator: Locator, description: string): EditBoxActions {
    super.setLocator(locator, description);
    return this;
  }

  /**
   * Clear and enter text
   * @param value
   * @returns
   */
  public async fill(value: string) {
    Log.info(`Entering ${this.description} as ${value}`);
    await this.getLocator().fill(value);
    return this;
  }
    getLocator() {
        throw new Error("Method not implemented.");
    }

  /**
   * Types the value to text field
   * @param value
   * @returns
   */
  public async type(value: string) {
    Log.info(`Typing ${this.description} as ${value}`);
    await this.getLocator().type(value);
    return this;
  }

  /**
   * Enter text and hit tab key
   * @param value
   * @returns
   */
  public async fillAndTab(value: string) {
    Log.info(`Entering ${this.description} as ${value} and Tab`);
    await this.getLocator().fill(value);
    await this.getLocator().press("Tab");
    return this;
  }

  /**
   * Typing text and hit tab key
   * @param value
   * @returns
   */
  public async typeAndTab(value: string) {
    Log.info(`Entering ${this.description} as ${value} and Tab`);
    await this.getLocator().type(value);
    await this.getLocator().press("Tab");
    return this;
  }
}
