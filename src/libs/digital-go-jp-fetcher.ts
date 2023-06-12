import { News, Procurement, Topic } from '@/types';
import { chromium } from 'playwright-core';

export const fetchTopics = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.digital.go.jp/');

  const cards = page.locator('.main .card');
  const count = await cards.count();
  const topics: Topic[] = [];
  for (let i = 0; i < count; i++) {
    const card = await cards.nth(i);

    const title = await card.locator('.card__title').innerText();
    const path = (await card.locator('a').getAttribute('href')) ?? '';

    const descExists = (await card.locator('.card__text').count()) !== 0;
    if (!descExists) {
      continue;
    }

    const dateExists = (await card.locator('.card__date').count()) !== 0;
    if (!dateExists) {
      continue;
    }

    topics.push({
      title,
      path,
    });
  }

  return {
    topics,
  };
};

export const fetchNews = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.digital.go.jp/news/');

  const cards = page.locator('.main .card');
  const count = await cards.count();
  const news: News[] = [];
  for (let i = 0; i < count; i++) {
    const card = await cards.nth(i);

    const title = await card.locator('.card__title').innerText();
    const category = await card.locator('.card__category').innerText();
    const date = (await card.locator('time').getAttribute('datetime')) ?? '';
    const path = (await card.locator('a').getAttribute('href')) ?? '';

    news.push({
      title,
      category,
      date,
      path,
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
  const procurements: Procurement[] = [];
  for (let i = 0; i < count; i++) {
    const card = await cards.nth(i);

    const title = await card.locator('.card__title').innerText();
    const category = await card.locator('.card__category').innerText();
    const date = (await card.locator('time').getAttribute('datetime')) ?? '';
    const path = (await card.locator('a').getAttribute('href')) ?? '';

    procurements.push({
      title,
      category,
      date,
      path,
    });
  }

  return {
    procurements,
  };
};
