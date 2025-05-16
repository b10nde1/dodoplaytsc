import Form1 from "../core/pages/form1.page";
import { test } from '@playwright/test';

test('form 1', async ({ page }) => {
  let form1PO = new Form1(page);

  await form1PO.openForm1();
  await form1PO.verifyContentTitle();
  await form1PO.verifyContentDescription();
  await form1PO.typeEmail();
  await form1PO.typePassword();
  await form1PO.checkMeOut();

  await page.pause();

  await form1PO.submitForm();
});