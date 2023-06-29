import { News, Procurement } from '@/types';
import { chromium } from 'playwright-core';

const ITEM_MAX = 8;

export const fetchNews = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.digital.go.jp/news/');

  const cards = page.locator('.main .card');
  const count = await cards.count();
  const max = count > ITEM_MAX ? ITEM_MAX : count;
  const news: News[] = [];
  for (let i = 0; i < max; i++) {
    const card = await cards.nth(i);

    const title = await card.locator('.card__title').innerText();
    const category = await card.locator('.card__category').innerText();
    const date = (await card.locator('time').getAttribute('datetime')) ?? '';
    const path = (await card.locator('a').getAttribute('href')) ?? '';

    news.push({
      title,
      category,
      date,
      path: `https://digital.go.jp${path}`,
    });
  }

  return {
    news,
  };
};

export const fetchProcurements = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.digital.go.jp/news/procurement/');

  const cards = page.locator('.main .card');
  const count = await cards.count();
  const max = count > ITEM_MAX ? ITEM_MAX : count;
  const procurements: Procurement[] = [];
  for (let i = 0; i < max; i++) {
    const card = await cards.nth(i);

    const title = await card.locator('.card__title').innerText();
    const category = await card.locator('.card__category').innerText();
    const date = (await card.locator('time').getAttribute('datetime')) ?? '';
    const path = (await card.locator('a').getAttribute('href')) ?? '';

    procurements.push({
      title,
      category,
      date,
      path: `https://digital.go.jp${path}`,
    });
  }

  return {
    procurements,
  };
};
